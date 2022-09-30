import React from 'react';
import Line from '@/components/line';
import RoadCom from '@/components/roadmap';
import styles from './index.less';

export default function PagerPage() {
    return (
    <div className={styles.main}>
        <div className={styles.headbox}>
            <img className={styles.headbox_img} src={require('@/assets/images/img_head_2.svg')} alt="" />
            <h2 className={styles.headbox_title}>ZClub Litepaper</h2>
            <p className={styles.headbox_desc}>Leading audio-focused social app the<br/>enable users to talk to earn and get<br/>revenue share from live gifting.</p>
        </div>
        <div className={styles.introduce}>
            <h3 className={styles.introduce_title}>What is ZClub?</h3>
            <p className={styles.introduce_desc}>Build upon Solana and BNB Chian, ZClub is the first ever audio-focused web3 social app that enables users to talk-to-earn and get in-app token rewards from live gifting. All you need to do is to get a SeatNFT and start to chat with your friends in the app, or get a Chatroom NFT to host events or competition, then you will get revenue share from talk-to-earn and live gifting by being an NFT holder.</p>
        </div>
        <div className={styles.info}>
            <img className={styles.info_img} src={require('@/assets/images/img_2nfts.png')} alt="" />
        </div>
        <div className={styles.detail}>
            <ul className={styles.detail_list}>
                <li className={styles.detail_item}>
                    <img className={styles.detail_image} src={require('@/assets/images/img_what_is_gifting.svg')} alt="" />
                    <div className={styles.context}>
                        <h5 className={styles.context_title}>What is ZClub Live Gifting?</h5>
                        <p className={styles.context_desc}>Similar to Bits on twitch where people can buy such virtual goods to cheer for their favorite streamers, ZClub live gifting operates in the same way. Whenever your ZClub friends go live, you can send them gifts with varying amounts of token value to show your love, support, admiration and friendship.</p>
                        <p className={styles.context_desc}>Users gain both investing and emotional values from ZClub. Investing values refer to ZClub NFT holders who join the community and talk-to-earn; Emotional values mean users make friends and build social bonds with others to gain happiness, friendship, feeling of existence, and even fulfill their egos. Therefore, users are more encouraged to use ZClub when compared with other X-to-Earn apps, making the ecosystem suitable in the long run.</p>
                    </div>
                </li>
                <li className={styles.detail_item}>
                    <img className={styles.detail_image} src={require('@/assets/images/img_send_gift.png')} alt="" />
                    <div className={styles.context}>
                        <h5 className={styles.context_title}>How can I send gifts?</h5>
                        <p className={styles.context_desc}>To be able to send gifts in ZClub, you need to be 18 years or older. You might also ask “Do I need to be an NFT holder to send gift?”: The answer is NO. Both of NFT holders and normal users can send virtual gifts to their friends. However, if you want to #Talk2Earn or get revenue share from these social activities/live gifting, you must be a SeatNFT or ChatRoom NFT holder. Otherwise, you won’t be able to earn any token rewards.</p>
                    </div>
                </li>
                <li className={styles.detail_item}>
                <img className={styles.detail_image} src={require('@/assets/images/img_receive_gift.png')} alt="" />
                    <div className={styles.context}>
                        <h5 className={styles.context_title}>How Do I Become Eligible to Receive Live Gifts in ZClub?</h5>
                        <p className={styles.context_desc}>ZClub is a fair and open community, all of the participants are eligible to receive live gifts from audio chatting. There is no requirement on followers or streaming time. Therefore, you do not need to worry that it is difficult to hit the threshold to be eligible to receive gifts. However, if you want to convert these virtual gifts into in-app tokens, you must become a community member. That is to say you have to become a ZClub NFT holder. Otherwise, you will not be able to get revenue share from live gifts.</p>
                    </div>
                </li>
                <li className={styles.detail_item}>
                    <img className={styles.detail_image} src={require('@/assets/images/img_mint.png')} alt="" />
                    <div className={styles.context}>
                        <h5 className={styles.context_title}>How to mint a new NFT?</h5>
                        <p className={styles.context_desc}>First of all, you should be clear that there are different kinds of NFTs in ZClub. The most important ones are SeatNFT and ChatroomNFT. Room NFT holder is an organizer or a host, Seat NFT is a guest or a participant. Room NFT holders organize talks/events/competitions for SeatNFT holders to join. To mint a new SeatNFT, one should possess two SeatNFTs and burn some AUT and AHT tokens; To mint a new RoomNFT, one should burn six SeatNFTs and AHT&AUT tokens. Bear in mind that each NFT can only be minted for 5 times, think twice before you mint anything</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className={styles.tips}>
            <p className={styles.tips_text}>Our purpose is to be the leading audio chat app that enable users to talk to earn. Users buy a SeatNFT to start, and build social connections in the Social-Fi and Game-Fi app and get revenue share from Live gifting.</p>
        </div>
        <div className={styles.system}>
            <h3 className={styles.system_title}>Dual-Token System</h3>
            <ul className={styles.system_list}>
                <li className={styles.system_item}>
                    <img className={styles.system_icon} src={require('@/assets/images/coin_aht.png')} alt="" />
                    <p className={styles.system_text}>AHT(Ave Hamilton Token):<br/>utility token</p>
                </li>
                <li className={styles.system_item}>
                    <img className={styles.system_icon} src={require('@/assets/images/coin_aut.png')} alt="" />
                    <p className={styles.system_text}>AUT(Ave University Token):<br/>governance token</p>
                </li>
            </ul>
            <img className={styles.system_img} src={require('@/assets/images/img_dual_token_system.png')} alt="" />
        </div>
        <div className={styles.tokenomics}>
            <h3 className={styles.tokenomics_title}>Tokenomics</h3>
            <img className={styles.tokenomicx_img} src={require('@/assets/images/img_tokenomic_1.png')} alt="" />
            <img className={styles.tokenomicx_img} src={require('@/assets/images/img_tokenomic_2.png')} alt="" />
            <img className={styles.tokenomicx_img} src={require('@/assets/images/img_tokenomic_3.png')} alt="" />
        </div>
        <div className={styles.burnbox}>
            <h3 className={styles.burnbox_title}>Token Burning</h3>
            <img className={styles.burnbox_img} src={require('@/assets/images/img_token_burning.svg')} alt="" />
        </div>
        <div className={styles.dist}>
            <h3 className={styles.dist_title}>Token distribution</h3>
            <div className={styles.dist_charts}><Line/></div>
        </div>
        <RoadCom/>  
    </div>)
}