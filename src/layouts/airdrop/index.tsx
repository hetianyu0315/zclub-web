import React, {useEffect, useState} from 'react';
import styles from './index.less';
import AirDropHeader from '@/components/airdropHeader';
import WalletCtx from '@/components/walletCtx';

export default function Layout(props:any) {

  return (
    <WalletCtx>
      <div className={styles.main}>
        <AirDropHeader/>
        {props.children}
        <div className={styles.footer}>
        </div>
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
    </WalletCtx>
  );
}
