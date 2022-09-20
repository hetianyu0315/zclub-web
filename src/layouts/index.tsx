import React, {useEffect, useState} from 'react';
import { NavLink,  Link } from 'umi';
import  { useLogin } from '@/components/hooks/login';
import styles from './index.less';

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
      <div className={styles.head_block}>
        <nav className={`${styles.head_content} ${act}`}>
          <span className={styles.menu} onClick={barClick}></span>
          <a className={styles.logo_link} href="/">
            <img src={require('@/assets/images/logo.png')} alt="" />
          </a>
          <span className={styles.space}></span>
          <div className={styles.nav_block}>
            <ul className={styles.nav_list}>
              <li className={styles.nav_item}>
                <NavLink className={styles.nav_link} activeClassName={styles.active} exact to="/" onClick={barClick}>Home</NavLink>
              </li>
              <li className={styles.nav_item}>
                <NavLink className={styles.nav_link} activeClassName={styles.active} exact to="/howToPlay"  onClick={barClick}>How to Play</NavLink>
              </li>
              <li className={styles.nav_item}>
                <NavLink className={styles.nav_link} activeClassName={styles.active} exact to="/litePaper"  onClick={barClick}>LitePaper</NavLink>
              </li>
              <li className={styles.nav_item}>
                <a className={styles.nav_link} target="_blank" href="https://whitepaper.zclub.app/"  onClick={barClick}>WhitePaper</a>
              </li>
              <li className={styles.nav_item}>
                <a href={goUrl} className={styles.referral}>Invite</a>
              </li>
              <li className={styles.nav_item}>
                <NavLink className={styles.airdrop} activeClassName={styles.active} exact to="/airdrop" >Airdrop</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div style={{minHeight:'100vh'}}>
        {/* <Outlet/> */}
        {props.children}
      </div>
      <div className={styles.foot_block}>
        <footer className={styles.foot_content}>
          <div className={styles.icon_block}>
            <a className={styles.icon_link} href="https://twitter.com/ZClub_App" target="_blank">
              <img className={styles.icon_twitter} src={require('@/assets/images/icon_tw.svg')} alt="" />
            </a>
            <a className={styles.icon_link} href="https://discord.gg/FZj8ypXNPx" target="_blank">
              <img className={styles.icon_discord} src={require('@/assets/images/icon_discord.svg')} alt="" />
            </a>
            {/* <a href="https://t.me/zclub_web3" target="_blank">
              <img src={require('@/assets/images/icon_tel.svg')} alt="" />
            </a>
            <a href="https://medium.com/@ZClub_Web3" target="_blank">
              <img src={require('@/assets/images/icon_medium.svg')} alt="" />
            </a> */}
          </div>
        </footer>
      </div>
    </>
  );
}
