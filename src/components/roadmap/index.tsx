import React, { useEffect, useState } from 'react';
import styles from './index.less';

export default function RoadMap() {
    return (<div className={styles.roadmap}>
        <h3>RoadMap</h3>
        <div>
          <div className={styles.processbar}>
          </div>
          <ul>
            <li>
              <div className={styles.time}>2022/6</div>
              <div className={styles.text}>UI&UE Creation</div>
            </li>
            <li>
              <div className={styles.time}>2022/7</div>
              <div className={styles.text}>Infrastructure Development<br/>Wallet Design</div>
            </li>
            <li>
              <div className={styles.time}>2022/8</div>
              <div className={styles.text}>Gamification Design<br/>NFT Marketplace<br/>Genesis NFTs</div>
            </li>
            <li>
              <div className={styles.time}>2022/9</div>
              <div className={styles.text}>SocialFi Implement<br/>Beta Launch</div>
            </li>
            <li>
              <div className={styles.time}>2022/Q4</div>
              <div className={styles.text}>Rental System<br/>Mainnet Launch</div>
            </li>
            <li>
              <div className={styles.time}>2023/Q1</div>
              <div className={styles.text}>Multi-chain Development</div>
            </li>
          </ul>
        </div>
    </div>)
}
