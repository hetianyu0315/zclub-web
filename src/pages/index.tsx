import React from 'react';
import styles from './index.less';
import TeamCom from '@/components/team';
import RoadCom from '@/components/roadmap';
import toast from '@/components/toast';
import headImg  from '@/assets/images/headImg.png';
import headImgSvg  from '@/assets/images/img_head_1.svg';
import headRoad  from '@/assets/images/headroad.png';
import headRoadSvg  from '@/assets/images/img_road.svg';
import earnImg from '@/assets/images/earnImg.png';
import earnImgSvg from '@/assets/images/img_token_earnning.svg';
import burnImg from '@/assets/images/burnImg.png';
import burnImgSvg from '@/assets/images/img_token_burning.svg';
import icon01 from '@/assets/images/icon01.png';
import icon02 from '@/assets/images/icon02.png';
import icon03 from '@/assets/images/icon03.png';
import downico01 from '@/assets/images/ios.png';
import downico02 from '@/assets/images/android.png';

export default function HomePage() {
  const showComeSoon = ()=>{
    toast('coming soon');
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.headbox}>
        <div className={styles.part01_bg}>
        <div className={styles.part01_content}>
          <img src={require('@/assets/images/img_head_1.svg')} />
          <p>Leading audio-focused social app that<br/>enables users to talk to earn and get<br/> revenue share from live gifting.</p>
        </div>
        </div>
        
        <div className={styles.part02}>
          <img src={require('@/assets/images/img_road.svg')} />
          <p>Our purpose is to be the leading audio chat app that enable users<br/> to talk to earn. Users buy a SeatNFT to start, and build social<br/> connections in the Social-Fi and Game-Fi app and get revenue<br/> share from Live gifting. </p>
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
      <RoadCom />
      <TeamCom />
      <div className={styles.downbox}>
        <h3>Download</h3>
        <ul>
          <li>
            <a href="javascript:void(0)" onClick={showComeSoon}>
              <img src={downico01} alt="" />
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" onClick={showComeSoon}>
            <img src={downico02} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
