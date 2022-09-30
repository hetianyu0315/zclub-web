import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import bs58 from 'bs58'
import { api } from '@/utils';
import toast from '@/components/toast';
import { useWallet } from '@solana/wallet-adapter-react';
import useLogin from '../useLogin'

export default function WalletBtn(props: any) {
    const { connecting, connected, signMessage, publicKey, connect, wallet } = useWallet();
    const { getToken, setToken } = useLogin();
    const token = getToken();
    const [nonce, setNonce] = useState('');
    const content = useMemo(() => {
        if (connecting) return 'Connecting ...';
        if (connected) return 'Connected';
        return 'Connect';
    }, [connecting, connected]);
    const getNonce = () => {
        axios.post(`${api}/v1/auth/nonce?pkg=app.zclub&e=LFGf`).then((res) => {
            if (res.data.code == 0) {
                setNonce(res.data.data.nonce);
            } else {
                toast(res.data.msg || 'error')
            }
        }).catch((err) => {
            toast('error');
        })
    }
    const login = (signature: string) => {
        axios.post(`${api}/v1/auth/login?pkg=app.zclub&e=LFGf`, {
            login_type: 'solana',
            address: publicKey?.toBase58(),
            nonce: nonce,
            signature: signature
        }).then(res => {
            if (res.data.code == 0) {
                localStorage.setItem('airdropTk', res.data.data.token)
                localStorage.setItem('userInfo', JSON.stringify({ isLogin: 'true' }))
                window.location.reload();
            } else {
                toast(res.data.msg || 'error')
            }
        }).catch(err => {
            toast('error')
        })
    }
    useEffect(() => {
        if (connected && publicKey) {
            (async () => {
                const msg = await signMessage?.(new TextEncoder().encode(nonce))
                //@ts-ignore
                login(bs58.encode(msg));
            })()
        }
    }, [connected, publicKey])
    useEffect(() => {
        if (!token) {
            // needLogin
            getNonce()
        }
    }, [token])
    useEffect(() => {
        if (wallet && wallet.adapter && !connecting && !connected) {
            (async () => {
                try {

                    await wallet.connect();      
                    
                } catch (e) {
                    await connect();
                    console.log('err', e);
                }
            })();
        }
    }, [wallet, connecting, connected]);
    return <button {...props}>{content}</button>
}
