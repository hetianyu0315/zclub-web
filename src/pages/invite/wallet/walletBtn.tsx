import React, { useEffect, useMemo, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

export default function WalletBtn(props: any) {
    const { connecting, connected, connect, wallet } = useWallet();

    const content = useMemo(() => {
        if (connecting) return 'Connecting ...';
        if (connected) return 'disConnect';
        return 'Connect';
    }, [connecting, connected]);

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
