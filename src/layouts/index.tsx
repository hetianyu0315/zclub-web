import React, {useEffect, useState} from 'react';
import { NavLink,  Link } from 'umi';
import  { useLogin } from '@/components/hooks/login';
import styles from './index.less';
import logo from '@/assets/images/logo.png';
import logoSvg from '@/assets/images/logo.svg';
import footerIco01 from '@/assets/images/icon_tw.svg';
import footerIco02 from '@/assets/images/icon_discord.svg';
import footerIco03 from '@/assets/images/icon_tel.svg';
import footerIco04 from '@/assets/images/icon_medium.svg';

export default function Layout(props:any) {
  const { isLogin } = useLogin();
  const [act,setAct] = useState('');
  const [goUrl, setGoUrl] = useState(isLogin?'/referral/mission':'/referral');
  
  const barClick = ()=>{
    if(act==''){
      setAct(styles.barAct);
    }else{
      setAct('');
    }
  }

  useEffect(()=>{
    if(isLogin){
      setGoUrl('/referral/mission')
    }else{
      setGoUrl('/referral')
    }
  },[isLogin])

  return (
    <>
      <nav className={act}>
        <span className={styles.bar} onClick={barClick}></span>
        {/* <a className={styles.referral} href={goUrl}>Invite</a> */}
        <a className={styles.logobox} href="/">
          <img src={logoSvg} alt="" />
        </a>
        <div className={styles.navs}>
          <ul>
            <li>
              <NavLink exact to="/" onClick={barClick}>Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/howToPlay"  onClick={barClick}>How to Play</NavLink>
            </li>
            <li>
              <NavLink exact to="/litePaper"  onClick={barClick}>LitePaper</NavLink>
            </li>
            <li>
              <a target="_blank" href="https://ella-li.gitbook.io/zclub/"  onClick={barClick}>WhitePaper</a>
            </li>
            <li className={styles.referralbox}>
              <a href={goUrl} className={styles.referral}>Invite</a>
            </li>
            <li className={styles.airdropbox}>
              <NavLink className={styles.airdrop} exact to="/airdrop" >Airdrop</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{minHeight:'100vh'}}>
        {/* <Outlet/> */}
        {props.children}
      </div>
      <footer>
        <div className={styles.icons}>
          <a href="https://twitter.com/ZClub_App" target="_blank">
            <img src={footerIco01} alt="" />
          </a>
          <a href="https://discord.gg/FZj8ypXNPx" target="_blank">
            <img src={footerIco02} alt="" />
          </a>
          {/* <a href="https://t.me/zclub_web3" target="_blank">
            <img src={footerIco03} alt="" />
          </a>
          <a href="https://medium.com/@ZClub_Web3" target="_blank">
            <img src={footerIco04} alt="" />
          </a> */}
        </div>
      </footer>
    </>
  );
}
