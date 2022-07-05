import React from 'react';
import {  useSelector,  } from 'dva';
import styles from './index.less';
import  { useLogin } from '@/components/hooks/login';
import logoSvg from '@/assets/images/logo.svg';

export default function IndexPage(){
    const { isLogin, setLogin } = useLogin();
    const wallet = useSelector(state=>{
        return state.invite.wallet
    })
    const logout = ()=>{
        setLogin('');
    }
    return <div className={styles.header}>
        <div className={styles.logo}>
            <a href="/">
                <img src={logoSvg} alt="" />
            </a>
        </div>
        <div className={styles.opts}>
            {
                isLogin?<span onClick={logout}>{wallet?`${wallet.slice(0,5)}...`:'Quite'}</span>:null
            }
        </div>
    </div>
}