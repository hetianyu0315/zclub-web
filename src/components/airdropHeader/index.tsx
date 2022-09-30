import React from 'react';
import styles from './index.less';

export default function IndexPage(){

    return <div className={styles.header}>
        <div className={styles.logo}>
            <a href="/">
                <img src={require('@/assets/images/logo.png')} alt="" />
            </a>
        </div>
        <div className={styles.opts}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/airdrop/" className={styles.active}>Airdrop</a></li>
            </ul>
        </div>
    </div>
}