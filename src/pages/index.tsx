import React from 'react';
import styles from './index.less';
import TeamCom from '@/components/team';
import headImg  from '@/assets/images/headImg.png';
import headImgSvg  from '@/assets/images/img_head_1.svg';
import headRoad  from '@/assets/images/headroad.png';
import headRoadSvg  from '@/assets/images/img_road.svg';
import earnImg from '@/assets/images/earnImg.png';
import earnImgSvg from '@/assets/images/img_token_earnning.svg';
import burnImg from '@/assets/images/burnImg.png';
import burnImgSvg from '@/assets/images/tokenburning.svg';
import icon01 from '@/assets/images/icon01.png';
import icon02 from '@/assets/images/icon02.png';
import icon03 from '@/assets/images/icon03.png';
import downico01 from '@/assets/images/ios.png';
import downico02 from '@/assets/images/android.png';

export default function HomePage() {
  return (
    <div>
      <div className={styles.headbox}>
        <div className={styles.part01}>
          <img src={headImgSvg} />
          <p>Leading audio-focused social app that<br/>enable users to earn revenue share</p>
        </div>
        <div className={styles.part02}>
          <img src={headRoadSvg} />
          <p>Our purpose is to be the leading Web3 audio-focused social app,<br/>enabling the mass to turn their social network into profits, <br/>and earn revenue share from social activities.</p>
        </div>
      </div>
      <div className={styles.earnbox}>
        <h3>Token Earning</h3>
        <img src={earnImgSvg} alt="" />
      </div>
      <div className={styles.burnbox}>
        <h3>Token Burning</h3>
        <img src={burnImgSvg} alt="" />
        <div className={styles.burnleft} style={{display:'none'}}>
            <span></span>
            <div className={styles.burntxt}>
              <div>
                <img src={icon01} alt="" />
                <img src={icon02} alt="" />
              </div>
              <ul>
                <li>Gifting</li>
                <li>Suprise Box Openning</li>
              </ul>
            </div>
        </div>
        <div className={styles.burnright} style={{display:'none'}}>
            <span></span>
            <span></span>
            <div className={styles.burntxt}>
              <div>
                <img src={icon01} alt="" />
                <img src={icon02} alt="" />
                <img src={icon03} alt="" />
              </div>
              <ul>
                <li>Room/Seat Repair</li>
                <li>Room/Seat Mint</li>
                <li>Seat Socket Unlock</li>
                <li>Room/Seat Level-up</li>
                <li>Crown Upgrade</li>
              </ul>
            </div>
        </div>
      </div>
      <div className={styles.roadmap}>
        <h3>RoadMap</h3>
        <div>
          <div className={styles.processbar}>
          </div>
          <ul>
            <li>
              <div className={styles.time}>2022/6</div>
              <div className={styles.text}>infrastructure design</div>
            </li>
            <li>
              <div className={styles.time}>2022/7</div>
              <div className={styles.text}>wallet development</div>
            </li>
            <li>
              <div className={styles.time}>2022/8</div>
              <div className={styles.text}>Gamification Design</div>
            </li>
            <li>
              <div className={styles.time}>2022/Q4</div>
              <div className={styles.text}>multi-chain development</div>
            </li>
            <li>
              <div className={styles.time}>2023/Q1</div>
              <div className={styles.text}>Rental system</div>
            </li>
          </ul>
        </div>
      </div>
      <TeamCom />
      <div className={styles.downbox}>
        <h3>Download</h3>
        <ul>
          <li>
            <a href="">
              <img src={downico01} alt="" />
            </a>
          </li>
          <li>
            <a href="">
            <img src={downico02} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
