import React, { useState } from 'react';
import styles from './index.less';
import Img01 from '@/assets/images/howtoplay/img_01_4seats.png';
import Img02 from '@/assets/images/howtoplay/img_02_get_a_seat.png';
import Img03_1 from '@/assets/images/howtoplay/img_03_seatnft.png';
import Img03_2 from '@/assets/images/howtoplay/img_03_roomnft.png';
import Img04 from '@/assets/images/howtoplay/img_04_home.png';
import Img05 from '@/assets/images/howtoplay/img_05_socialfi_gamefi.png';
import Img06 from '@/assets/images/howtoplay/img_06_assets_detail.png';
import Img07_1 from '@/assets/images/howtoplay/img_07_room_mint.png';
import Img07_2 from '@/assets/images/howtoplay/img_07_seat_mint.png';
import Img08 from '@/assets/images/howtoplay/img_08_upgrade.png';

export default function IndexPage() {
  const [idx1, setIdx1] = useState(0);
  const [idx2, setIdx2] = useState(0);
  return (
    <div className={styles.main}>
      <h2>How to talk to earn?</h2>
      <dl>
        <dt>
          <h3>1. Choose a SeatNFT according to your reference</h3>
          <p>You earn in-app tokens only when you are an NFT holder</p>
        </dt>
        <dd>
          <img src={Img01} className={styles.imgWidth2} alt="" loading="lazy" />
        </dd>
      </dl>
      <dl>
        <dt>
          <h3>2. Get a SeatNFT from in-app marketplace</h3>
        </dt>
        <dd>
          <img src={Img02} className={styles.imgWidth} alt="" loading="lazy" />
        </dd>
      </dl>
      <dl>
        <dt>
          <h3>3. Seat/Room NFT Detail Page</h3>
        </dt>
        <dd>
          <div className={styles.imgBox}>
            {idx1 != 0 && (
              <span className={styles.left} onClick={() => setIdx1(0)}></span>
            )}
            {idx1 != 1 && (
              <span className={styles.right} onClick={() => setIdx1(1)}></span>
            )}
            <img
              src={Img03_1}
              width="90%"
              className={idx1 == 0 ? styles.active : ''}
              alt=""
              loading="lazy"
            />
            <img
              src={Img03_2}
              width="90%"
              className={idx1 == 1 ? styles.active : ''}
              alt=""
              loading="lazy"
            />
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
          <h3>
            4. Equip your NFTs and start to talk Burn energy and earn handsome
            rewards
          </h3>
        </dt>
        <dd>
          <img src={Img04} className={styles.imgWidth} alt="" loading="lazy" />
        </dd>
      </dl>
      <dl>
        <dt>
          <h3>5. SocialFi and GameFi</h3>
        </dt>
        <dd>
          <img src={Img05} className={styles.imgWidth} alt="" loading="lazy" />
        </dd>
      </dl>
      <dl>
        <dt>
          <h3>6. Check your assets talk earings+ live gift earings</h3>
        </dt>
        <dd>
          <img src={Img06} width="20%" alt="" loading="lazy" />
        </dd>
      </dl>
      <dl>
        <dt>
          <h3>7. Mint new SeatNFT/RoomNFT</h3>
        </dt>
        <dd>
          <div className={styles.imgBox}>
            {idx2 != 0 && (
              <span className={styles.left} onClick={() => setIdx2(0)}></span>
            )}
            {idx2 != 1 && (
              <span className={styles.right} onClick={() => setIdx2(1)}></span>
            )}
            <img
              src={Img07_1}
              width="56%"
              className={idx2 == 0 ? styles.active : ''}
              alt=""
              loading="lazy"
            />
            <img
              src={Img07_2}
              width="56%"
              className={idx2 == 1 ? styles.active : ''}
              alt=""
              loading="lazy"
            />
          </div>
          <div className={styles.box}>
            {idx2 != 0 && (
              <ul>
                <li>
                  1. Get 2 SeatNFTs from in-app marketplace or third-party
                  platforms
                </li>
                <li>2. Burn some AHT&amp;AUT tokens</li>
                <li>3. Get a SeatBox and open it to claim your new SeatNFT</li>
              </ul>
            )}
            {idx2 != 1 && (
              <ul>
                <li>
                  1. Get 6 SeatNFTs from in-app marketplace or third-party
                  platforms
                </li>
                <li>2. Burn 6 SeatNFTs and AHT&amp;AUT tokens</li>
                <li>
                  3. Get a ChatroomBox and open it to claim your new RoomNFT
                </li>
              </ul>
            )}
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
          <h3>8. Upgrade &amp; Token Burn</h3>
        </dt>
        <dd>
          <img src={Img08} width="40%" alt="" loading="lazy" />
          <div className={styles.box}>
            <ul>
              <li>1. Mint new NFTs for investment</li>
              <li>2. Levelup NFTs for greater fun and token earnings</li>
            </ul>
          </div>
        </dd>
      </dl>
    </div>
  );
}
