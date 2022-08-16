import React, {useEffect, useState} from 'react';
import styles from './index.less';
import AirDropHeader from '@/components/airdropHeader';
import WalletCtx from '@/components/walletCtx';
import footerIco01 from '@/assets/images/icon_tw.svg';
import footerIco02 from '@/assets/images/icon_discord.svg';

export default function Layout(props:any) {

  return (
    <WalletCtx>
      <div className={styles.main}>
      <AirDropHeader/>
      {props.children}
      <div className={styles.footer}>
      </div>
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
    </WalletCtx>
  );
}
