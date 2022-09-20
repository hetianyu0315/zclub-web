import React from 'react';
import styles from './index.less';
import logoSvg from '@/assets/images/logo.svg';

export default function IndexPage(){

    return <div className={styles.header}>
        <div className={styles.logo}>
            <a href="/">
                <img src={logoSvg} alt="" />
            </a>
        </div>
        <div className={styles.opts}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/airdrop/" className={styles.active}>ZClubNFT</a></li>
            </ul>
        </div>
    </div>
}