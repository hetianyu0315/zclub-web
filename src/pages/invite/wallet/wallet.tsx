import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import axios from 'axios';
import toast from '@/components/toast';
import { api } from '@/utils/index';
import { useLogin } from '@/components/hooks/login';
import WalletBtn from './walletBtn';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import bs58 from 'bs58'
import styles from './index.less';

export default function IndexPage() {
  const { isLogin } = useLogin();
  const [butCls, setButCls] = useState(styles.disabled);
  const [btnLoad, setBtnLoad] = useState(false);
  const { visible, setVisible } = useWalletModal();

  const { connecting, connected, signMessage, publicKey, connect, wallet } =
    useWallet();
  const Submit = async () => {
    const addr = publicKey?.toBase58();
    if (!addr) {
      toast('please connect wallet');
      return;
    }
    if (addr.length > 10) {
      try {
        setBtnLoad(true);
        const nonceRes = await axios.post(
          `${api}/v1/auth/nonce?pkg=app.zclub&e=GkU4`,
        );
        let nonce = '';
        if (nonceRes.data.code == 0) {
          nonce = nonceRes.data.data.nonce;
        }

        const signature = await signMessage?.(new TextEncoder().encode(nonce));

        const res = await axios.post(
          `${api}/v1/binding?pkg=app.zclub&e=GkU4`,
          {
            bind_type: 'solana',
            bind_id: addr,
            state: nonce,
            code: bs58.encode(signature),
          },
          {
            headers: {
              Authorization: `HIN ${localStorage.getItem('token')}`,
            },
          },
        );

        if (res.data.code == 0) {
          toast('bind success');
          setTimeout(() => {
            history.push('/referral/mission/');
          }, 1500);
        } else {
          const msg = res?.data?.err_msg || 'network err';
          toast(msg);
        }
        setBtnLoad(false);
      } catch (e:any) {
        let msg = '';
        if(e.response){
          msg = e.response?.data?.err_msg || 'network err';
        }
        toast(msg);
        setBtnLoad(false);
      }
    } else {
      toast('error wallet address');
    }
  };

  const Connection = () => {
    if (!connected) {
      setVisible(true);
    } else {
      wallet?.adapter.disconnect && wallet?.adapter.disconnect();
      setButCls(styles.disabled);
    }
  };
  useEffect(() => {
    if (connected) {
      setButCls('');
    }
  }, [connected]);

  return (
    <>
      <div className={styles.back_box}>
        <div
          className={styles.back}
          onClick={() => history.push('/referral/mission/')}
        ></div>
      </div>
      <div className={styles.main}>
        <div className={styles.info}>
          <p>
            Enter Your Solana Wallet to earn{' '}
            <span>
              <em>+5</em> free ACE
            </span>{' '}
            per day
          </p>
        </div>
        <div>
          <dl>
            <dt>
              {publicKey
                ? null
                : 'Click [Connect] Button to Connect your Wallet So That We Can Have Access to Your Wallet Address'}
            </dt>
            <dd>
              {publicKey ? (
                <input
                  type="text"
                  name=""
                  id=""
                  readOnly={true}
                  value={connected ? publicKey?.toBase58() : ''}
                />
              ) : null}
            </dd>
            <dd>
              <div className={styles.connect}>
                <WalletBtn onClick={Connection}>Connect</WalletBtn>
              </div>
            </dd>
          </dl>
          <button className={butCls} onClick={Submit}>
            Submit{btnLoad && <i></i>}
          </button>
        </div>
      </div>
    </>
  );
}
