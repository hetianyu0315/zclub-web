import React, {useEffect, useState} from 'react';
import styles from './index2.less';
import CustomHeader from '@/components/customHeader';
import Svga from '@/components/svga';
import bg_pc from '@/assets/images/invite/bg_contuibute.png';
import bg_phone from '@/assets/images/invite/bg_contribute_phone.png';
import bg_footer from '@/assets/images/invite/icon_coin.png';
import img_chair01 from '@/assets/images/invite/1.svga';
import img_chair02 from '@/assets/images/invite/2.svga';
import img_chair03 from '@/assets/images/invite/3.svga';
import img_chair04 from '@/assets/images/invite/4.svga';

const chairs = [img_chair01,img_chair02,img_chair03,img_chair04];

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
          <div className={`${styles.box}`}>
            {
              chairs.map((item,idx)=>(
                  <span key={idx}>
                    <Svga src={item} delay={idx} interval={4}/>
                  </span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
