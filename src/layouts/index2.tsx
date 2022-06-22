import React, {useState} from 'react';
import styles from './index2.less';
import CustomHeader from '@/components/customHeader';
import bg_pc from '@/assets/images/invite/bg_contuibute.png';
import bg_phone from '@/assets/images/invite/bg_contribute_phone.png';
import bg_footer from '@/assets/images/invite/bg_coin.png';
import img_chair01 from '@/assets/images/invite/pic_1.png';
import img_chair02 from '@/assets/images/invite/pic_2.png';
import img_chair03 from '@/assets/images/invite/pic_3.png';
import img_chair04 from '@/assets/images/invite/pic_4.png';
import img_chair05 from '@/assets/images/invite/pic_5.png';
import img_chair06 from '@/assets/images/invite/pic_6.png';

const chairs = [img_chair01,img_chair02,img_chair03,img_chair04,img_chair05,img_chair06];

export default function Layout(props:any) {

  return (
    <div className={styles.main}>
      <CustomHeader/>
      {props.children}
      <div className={`${styles.footer} footer`}>
        <div className='mask'></div>
        {/* <img src={bg_footer} alt="" /> */}
        <div className={styles.chairs}>
          <img src={bg_footer} alt="" />
          <div className={`${styles.box} footer_box`}>
          {
            chairs.map((item,idx)=>(
              <span key={idx}>
                <img src={item} alt="" />
              </span>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
}
