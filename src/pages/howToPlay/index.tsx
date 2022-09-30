import React, { useState } from 'react';
import styles from './index.less';

export default function IndexPage() {
  const [idx1, setIdx1] = useState(0);
  const [idx2, setIdx2] = useState(0);
  return (
    <div className={styles.main}>
      <h2 className={styles.page_title}>How to talk to earn?</h2>
      <dl className={styles.part}>
        <dt className={styles.part_title}>
          <h3 className={styles.part_title_main}>1. Choose a SeatNFT according to your reference</h3>
          <p className={styles.part_title_sub}>You earn in-app tokens only when you are an NFT holder</p>
        </dt>
        <dd className={styles.part_content}>
          <img className={styles.small_img_1} src={require('@/assets/images/howtoplay/img_01_4seats.png')}  alt="" loading="lazy" />
        </dd>
      </dl>
      <dl className={styles.part}>
        <dt className={styles.part_title}>
          <h3 className={styles.part_title_main}>2. Get a SeatNFT from in-app marketplace</h3>
        </dt>
        <dd className={styles.part_content}>
          <img className={styles.small_img_2} src={require('@/assets/images/howtoplay/img_02_get_a_seat.png')}  alt="" loading="lazy" />
        </dd>
      </dl>
      <dl className={styles.part}>
        <dt className={styles.part_title}>
          <h3 className={styles.part_title_main}>3. Seat/Room NFT Detail Page</h3>
        </dt>
        <dd className={styles.part_content}>
          <div className={`${styles.img_box} ${styles.img_box_1}`}>
            {idx1 != 0 && (
              <span className={`${styles.img_btn} ${styles.left}`} onClick={() => setIdx1(0)}></span>
            )}
            {idx1 != 1 && (
              <span className={`${styles.img_btn} ${styles.right}`} onClick={() => setIdx1(1)}></span>
            )}
            <img
              src={require('@/assets/images/howtoplay/img_03_seatnft.png')}
              className={`${styles.slide_img} ${idx1 == 0 ? styles.active : ''}`}
              alt=""
              loading="lazy"
            />
            <img
              src={require('@/assets/images/howtoplay/img_03_roomnft.png')}
              className={`${styles.slide_img} ${idx1 == 1 ? styles.active : ''}`}
              alt=""
              loading="lazy"
            />
          </div>
        </dd>
      </dl>
      <dl className={styles.part}>
        <dt className={styles.part_title}>
          <h3 className={styles.part_title_main}>
            4. Equip your NFTs and start to talk Burn energy and <br/> earn handsome
            rewards
          </h3>
        </dt>
        <dd className={styles.part_content}>
          <img className={styles.big_img} src={require('@/assets/images/howtoplay/img_04_home.png')}  alt="" loading="lazy" />
        </dd>
      </dl>
      <dl className={styles.part}>
        <dt className={styles.part_title}>
          <h3 className={styles.part_title_main}>5. SocialFi and GameFi</h3>
        </dt>
        <dd className={styles.part_content}>
          <img className={styles.big_img} src={require('@/assets/images/howtoplay/img_05_socialfi_gamefi.png')}  alt="" loading="lazy" />
        </dd>
      </dl>
      <dl className={styles.part}>
        <dt className={styles.part_title}>
          <h3 className={styles.part_title_main}>6. Check your assets talk earings+ live gift earings</h3>
        </dt>
        <dd className={styles.part_content}>
          <img className={styles.big_img} src={require('@/assets/images/howtoplay/img_06_assets_detail.png')}  alt="" loading="lazy" />
        </dd>
      </dl>
      <dl className={styles.part}>
        <dt className={styles.part_title}>
          <h3 className={styles.part_title_main}>7. Mint new SeatNFT/RoomNFT</h3>
        </dt>
        <dd className={styles.part_content}>
          <div className={`${styles.img_box} ${styles.img_box_1}`}>
            {idx2 != 0 && (
              <span className={`${styles.img_box} ${styles.img_box_1}`} onClick={() => setIdx2(0)}></span>
            )}
            {idx2 != 1 && (
              <span className={`${styles.img_btn} ${styles.right}`} onClick={() => setIdx2(1)}></span>
            )}
            <img
              src={require('@/assets/images/howtoplay/img_07_room_mint.png')}
              className={`${styles.slide_img} ${idx2 == 0 ? styles.active : ''}`}
              alt=""
              loading="lazy"
            />
            <img
              src={require('@/assets/images/howtoplay/img_07_seat_mint.png')}
              className={`${styles.slide_img} ${idx2 == 1 ? styles.active : ''}`}
              alt=""
              loading="lazy"
            />
          </div>
          <div className={styles.box}>
            {idx2 != 0 && (
              <ul className={styles.box_list}>
                <li className={styles.box_item}>
                  1. Get 2 SeatNFTs from in-app marketplace or third-party
                  platforms
                </li>
                <li className={styles.box_item}>2. Burn some AHT&amp;AUT tokens</li>
                <li className={styles.box_item}>3. Get a SeatBox and open it to claim your new SeatNFT</li>
              </ul>
            )}
            {idx2 != 1 && (
              <ul className={styles.box_list}>
                <li className={styles.box_item}>
                  1. Get 6 SeatNFTs from in-app marketplace or third-party
                  platforms
                </li>
                <li className={styles.box_item}>2. Burn 6 SeatNFTs and AHT&amp;AUT tokens</li>
                <li className={styles.box_item}>
                  3. Get a ChatroomBox and open it to claim your new RoomNFT
                </li>
              </ul>
            )}
          </div>
        </dd>
      </dl>
      <dl className={styles.part}>
        <dt className={styles.part_title}>
          <h3 className={styles.part_title_main}>8. Upgrade &amp; Token Burn</h3>
        </dt>
        <dd className={styles.part_content}>
          <img className={styles.big_img} src={require('@/assets/images/howtoplay/img_08_upgrade.png')} alt="" loading="lazy" />
          <div className={styles.box}>
            <ul className={styles.box_list}>
              <li className={styles.box_item}>1. Mint new NFTs for investment</li>
              <li className={styles.box_item}>2. Levelup NFTs for greater fun and token earnings</li>
            </ul>
          </div>
        </dd>
      </dl>
    </div>
  );
}
