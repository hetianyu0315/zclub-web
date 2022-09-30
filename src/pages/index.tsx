import React from 'react';
import styles from './index.less';
import TeamCom from '@/components/team';
import RoadCom from '@/components/roadmap';
import toast from '@/components/toast';
import downico01 from '@/assets/images/ios.png';
import downico02 from '@/assets/images/android.png';

export default function HomePage() {
  const showComeSoon = ()=>{
    toast('coming soon');
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.headbox}>
        <div className={styles.part01}>
          <img className={styles.part01_back_img} src={require('@/assets/images/img_head_1.svg')} />
          <p className={styles.part01_text}>Leading audio-focused social app that<br/>enables users to talk to earn and get<br/> revenue share from live gifting.</p>
        </div>
        
        <div className={styles.part02}>
          <img className={styles.part02_back_img} src={require('@/assets/images/img_road.svg')} />
          <p className={styles.part02_text}>Our purpose is to be the leading audio chat app that enable users<br/> to talk to earn. Users buy a SeatNFT to start, and build social<br/> connections in the Social-Fi and Game-Fi app and get revenue<br/> share from Live gifting. </p>
        </div>
      </div>
      <div className={styles.earnbox}>
        <h3 className={styles.earn_title}>Token Earning</h3>
        <img className={styles.earn_img01} src={require('@/assets/images/img_token_earnning_1.png')} alt="" />
        <img className={styles.earn_img02} src={require('@/assets/images/img_token_earnning_2.png')} alt="" />
      </div>
      <div className={styles.burnbox}>
        <h3 className={styles.burn_title}>Token Burning</h3>
        <img className={styles.burn_img} src={require('@/assets/images/img_token_burning.svg')} alt="" />
      </div>
      <RoadCom />
      <TeamCom />
      <div className={styles.downbox}>
        <h3 className={styles.down_title}>Download</h3>
        <ul className={styles.down_list}>
          <li className={styles.down_item}>
            <a className={styles.down_link} href="javascript:void(0)" onClick={showComeSoon}>
              <img className={styles.down_apple} src={downico01} alt="" />
            </a>
          </li>
          <li className={styles.down_item}>
            <a className={styles.down_link} target="_blank" href="https://play.google.com/store/apps/details?id=com.meta.zclub">
            <img className={styles.down_google} src={downico02} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
