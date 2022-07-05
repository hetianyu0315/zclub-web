import React, { useEffect, useState } from 'react';
import styles from './index.less';
//import 'swiper/css';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import teamImg from '@/assets/images/img_team.png';
import img01 from '@/assets/images/phone_1.png';
import img03 from '@/assets/images/phone_2.png';
import img02 from '@/assets/images/phone_3.png';
import img04 from '@/assets/images/phone_4.png';
import img05 from '@/assets/images/phone_5.png';
import { Swiper, SwiperSlide } from 'swiper/react';

const teamInfo = [
  {
    name:'Daniel J. Mott',
    avatar:img02,
    desc:`Mahmoud Soltan is an Egyptian who got full scholarship from official government foundation in Egypt to stay aborad in Software Engineering. Moahmound is also the fonder of Shabab Talanted platform , it's platform for all arab countries who are interested in travelling and studying abroad. `
  },
  {
    name:'Jatin Dewan',
    avatar:img03,
    desc:`Jatin is a graduate in Forensic Science and now MBA in Digital Innovation Management from Brunel University, London. He has 6 years experience working in multi diverse companies in business operations and marketing field. He is passionate about his work and using his B2C product knowledge helps make a product efficient. `
  },
  {
    name:'Iqbal Banu',
    avatar:img04,
    desc:`Iqbal Banu is from Indonesia and he is enthusiasm in Technology, Content & Innovation. Iqbal is experisenced in Application Content and Agency Management and skilled in Music, Video & Gaming user operation and Online Event Operation. `
  },
  {
    name:'Nupur Bose',
    avatar:img05,
    desc:`Nupur Bose holds a master degree in Chemistry. She is the first female to join Zclub, experienced in user and online events operation. Also, Nupur is a singer with over 5.5M followers on Iocal social media Starmaker. `
  },
  {
    name:'Forrest C',
    avatar:img01,
    desc:`Forrest C is the founder of Hacker Interstellar(closed C-round $50 million Funding from Tencent in 2018), and co-founder of Umeng(acquired by Alibaba for 80 million dollars),  he is currently based in Singapore and lead a team focusing on web3 and NFTs. `
  },
]

export default function Team() {
    const [swiper, setSwiper] = useState(null);
    const addActive = (e:any)=>{
        e.target.classList.toggle(styles.active);
    }
    return <>
        <div className={styles.teambox}>
            <h3>Team</h3>
            <div>
                <div className={styles.slideNav}>
                 <span onClick={()=>swiper.slidePrev()}></span>
                 <span onClick={()=>swiper.slideNext()}></span>
             </div>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={2}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(s) => {
                        setSwiper(s);
                      }}
                >
                    {
                        teamInfo.map(item=>(<SwiperSlide className={styles.item}>
                            <div>
                                <img src={item.avatar} alt="" />
                                <div onClick={e=>addActive(e)}>{item.desc}</div>
                            </div>
                            <p>{item.name}</p>
                        </SwiperSlide>))
                    } 
                </Swiper>
            </div>
            {/* <div className="swiper">
                <ul className="swiper-wrapper">
                {
                    teamInfo.map(item=>(<li className="swiper-slide">
                    <div>
                        <img src={item.avatar} alt="" />
                        <div>{item.desc}</div>
                    </div>
                    <p>{item.name}</p>
                    </li>))
                }
                </ul>
            </div> */}
        </div> 
        <div className={styles.teambox2}>
            <h3>Team</h3>
            <div>
                <img src={teamImg} alt="" />
                <ul>
                    {
                    teamInfo.map(item=> (<li>
                        <div className={styles.touchArea}></div>
                        <div className={styles.touchShow}>
                            <p>{item.name}</p>
                            <div>{item.desc}</div>
                        </div>
                        </li>))
                    }
                </ul>
            </div>
        </div> 
    </>
}