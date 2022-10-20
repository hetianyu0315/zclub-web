import React, { useEffect, useState } from 'react';
import styles from './index.less';
//import 'swiper/css';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Swiper, SwiperSlide } from 'swiper/react';

const teamInfo = [
  {
    name:'Daniel J. Mott',
    avatar:require('@/assets/images/phone_3.png'),
    desc:`Mahmoud Soltan is an Egyptian who got full scholarship from official government foundation in Egypt to stay aborad in Software Engineering. Moahmound is also the fonder of Shabab Talanted platform , it's platform for all arab countries who are interested in travelling and studying abroad. `
  },
  {
    name:'Jatin Dewan',
    avatar:require('@/assets/images/phone_2.png'),
    desc:`Jatin is a graduate in Forensic Science and now MBA in Digital Innovation Management from Brunel University, London. He has 6 years experience working in multi diverse companies in business operations and marketing field. He is passionate about his work and using his B2C product knowledge helps make a product efficient. `
  },
  {
    name:'Iqbal Banu',
    avatar:require('@/assets/images/phone_4.png'),
    desc:`Iqbal Banu is from Indonesia and he is enthusiasm in Technology, Content & Innovation. Iqbal is experisenced in Application Content and Agency Management and skilled in Music, Video & Gaming user operation and Online Event Operation. `
  },
  {
    name:'Nupur Bose',
    avatar:require('@/assets/images/phone_5.png'),
    desc:`Nupur Bose holds a master degree in Chemistry. She is the first female to join Zclub, experienced in user and online events operation. Also, Nupur is a singer with over 5.5M followers on Iocal social media Starmaker. `
  },
  {
    name:'Forrest C',
    avatar:require('@/assets/images/phone_1.png'),
    desc:`Forrest C is the founder of Hacker Interstellar(closed C-round $50 million Funding from Tencent in 2018), and co-founder of Umeng(acquired by Alibaba for 80 million dollars),  he is currently based in Singapore and lead a team focusing on web3 and NFTs. `
  },
  {
    name:'Swagata Das',
    avatar:require('@/assets/images/phone_6.png'),
    desc:`Swagata Das has an international education background: bachelors from India, exchange student at York University in Canada, international MBA graduate from Peking University. With a total of 7+ years of work experience in the tech industry, Swagata greatly focuses on ADDING VALUE in businesses and people. `
  },
]

export default function Team() {
    const [swiper, setSwiper] = useState(null);
    const addActive = (e:any)=>{
        e.target.classList.toggle(styles.active);
    }
    return <>
        <div className={styles.teambox_phone}>
            <h3 className={styles.team_title}>Team</h3>
            <div className={styles.team_content}>
                <div className={styles.slideNav}>
                    <span className={styles.left} onClick={()=>swiper.slidePrev()}></span>
                    <span className={styles.right} onClick={()=>swiper.slideNext()}></span>
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(s) => {
                        setSwiper(s);
                      }}
                >
                    {
                        teamInfo.map(item=>(<SwiperSlide className={styles.item}>
                            <div className={styles.member_info}>
                                <img className={styles.member_img} src={item.avatar} alt="" />
                                <div className={styles.member_desc} onClick={e=>addActive(e)}>{item.desc}</div>
                            </div>
                            <p className={styles.member_name}>{item.name}</p>
                        </SwiperSlide>))
                    } 
                </Swiper>
            </div>
        </div> 
        <div className={styles.teambox_base}>
            <h3 className={styles.team_title}>Team</h3>
            <div className={styles.team_content}>
                <img className={styles.team_img} src={require('@/assets/images/img_team.png')} alt="" />
                <ul className={styles.team_list}>
                    {
                    teamInfo.map(item=> (<li className={styles.team_item}>
                        <div className={styles.touchArea}></div>
                        <div className={styles.touchShow}>
                            <p className={styles.member_name}>{item.name}</p>
                            <div className={styles.member_desc}>{item.desc}</div>
                        </div>
                        </li>))
                    }
                </ul>
            </div>
        </div> 
    </>
}