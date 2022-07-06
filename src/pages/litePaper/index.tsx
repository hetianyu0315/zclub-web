import React from 'react';
import Line from '@/components/line';
import RoadCom from '@/components/roadmap';
import styles from './index.less';
import headImg from '@/assets/images/img_head_2.svg';
import infoImg from '@/assets/images/img_2nfts.svg';
import detailImg01 from '@/assets/images/img_hdiw.svg';
import detailImg02 from '@/assets/images/img_zclub.svg';
import detailImg03 from '@/assets/images/img_share_revenue.svg';
import img_dual_token_system from '@/assets/images/img_dual_token_system.svg';
import coin_aht from '@/assets/images/coin_aht.svg';
import coin_aut from '@/assets/images/coin_aut.svg';
import img_tokenomic_1 from '@/assets/images/img_tokenomic_1.svg';
import img_tokenomic_2 from '@/assets/images/img_tokenomic_2.svg';
import img_tokenomic_3 from '@/assets/images/img_tokenomic_3.svg';
import burnImgSvg from '@/assets/images/tokenburning.svg';
import icon01 from '@/assets/images/icon01.png';
import icon02 from '@/assets/images/icon02.png';
import icon03 from '@/assets/images/icon03.png';

export default function PagerPage() {
    return (<div className={styles.main}>
        <div className={styles.headbox}>
            <img src={headImg} alt="" />
            <h2>ZClub Litepaper</h2>
            <p>Leading audio-focused social app that<br/>enable users to earn revenue share</p>
        </div>
        <div className={styles.introduce}>
            <h3>what is ZClub?</h3>
            <p>ZClub is the first-ever audio-focused Web3 social app that enables everyone across the globe to profit from their social networks and activities. All you need to do is to get an NFT to start, and build your social connections in the Social-Fi and Game-Fi app.</p>
            <p>We aim to make a difference. In traditional pay-to-play platforms, users are the ones who support, post and pay to use social media. But these platforms never share their money and profits and are the only ones benefiting from its user base. However, ZClub is going to change that and become the next-gen mobile application that enables users to socialize to earn and give money/profits back to them.</p>
        </div>
        <div className={styles.info}>
            <img src={infoImg} alt="" />
        </div>
        <div className={styles.detail}>
            <ul>
                <li>
                    <div className={styles.context}>
                        <h5>How does it work?</h5>
                        <p>By equipping themselves with NFTs in forms of Seats or ChatRooms, ZClub users will be able to host events, or welcome friends, guests, and social influencers to communicate, and engage with each other to earn in-app tokens, which later can be used in-game or cashed out.</p>
                    </div>
                    <img src={detailImg01} alt="" />
                </li>
                <li>
                    <img src={detailImg02} alt="" />
                    <div className={styles.context}>
                        <h5>Why does ZClub Share Revenue?</h5>
                        <p>We do not want users to remain silent or their needs to be overlooked, because they are the vital life force of platforms and should be rewarded for their contributions, and their assets should not be stolen away by platforms. Also, we want to transforms how the social media works. We believe socialize/talk to earn mechanism can make normal users feel valued and thus inspire other businesses and companies to do the same.</p>
                    </div>
                </li>
                <li>
                    <div className={styles.context}>
                        <h5>How does ZClub Share Revenue?</h5>
                        <p>We adopt blockchain to do so to ensure everything is transparent so that users know exactly how everything works. We do not profit from selling ads or sensitive user data. We only took a small tax from in-app activities, such as NFT trading, NFT minting, or NFT rental, giving majority of the revenue back to users and DAO members.</p>
                    </div>
                    <img src={detailImg03} alt="" />
                </li>
            </ul>
        </div>
        <div className={styles.tips}>
            <p>Our purpose is to be the leading Web3 audio-focused social app, enabling the mass to turn their social network into profits and earn a revenue share from social activities.</p>
        </div>
        <div className={styles.system}>
            <h3>Dual-Token System</h3>
            <ul>
                <li>
                    <img src={coin_aht} alt="" />
                    <p>AHT(Ave Hamilton Token):<br/>utility token</p>
                </li>
                <li>
                    <img src={coin_aut} alt="" />
                    <p>AUT(Ave University Token):<br/>governance token</p>
                </li>
            </ul>
            <img src={img_dual_token_system} alt="" />
        </div>
        <div className={styles.tokenomics}>
            <h3>Tokenomics</h3>
            <img src={img_tokenomic_1} alt="" />
            <img src={img_tokenomic_2} alt="" />
            <img src={img_tokenomic_3} alt="" />
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
      <div className={styles.dist}>
        <h3>Token distribution</h3>
        <div><Line/></div>
      </div>
      <RoadCom/>  
    </div>)
}