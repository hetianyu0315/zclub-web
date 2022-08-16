import React, { useEffect, useState, useRef, useCallback } from 'react';
import styles from './index.less';
import { history } from 'umi';
import axios from 'axios';
import Loading from '@/pages/loading';
import WalletBtn from './walletBtn';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { toJpeg, toBlob } from 'html-to-image';
import { api } from '@/utils';
import toast from '@/components/toast';
import useLogin from '../useLogin';
import Img from '@/assets/images/airdrop/img_talknft.png';
import itemCheck from '@/assets/images/airdrop/check.svg';
import itemNoCheck from '@/assets/images/airdrop/false.svg';
import downImg from '@/assets/images/airdrop/down.png';
import cardHost from '@/assets/images/airdrop/host.svg';
import cardListener from '@/assets/images/airdrop/listener.svg';
import cardSpeaker from '@/assets/images/airdrop/speaker.svg';

const _msg = 'Due to Twitter API limitations, the ZClub bot does not have capture your Space list. Please participate in more Twitter Spaces, then return to the page to refresh. Thank you for your patience and understanding :)';

const formatDate = (str:string)=>{
    const date = new Date(str);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}


export default function IndexPage() {
    const ref = useRef<HTMLDivElement>(null)
    const {loginInfo, setLoginInfo} = useLogin()
    const [token, setToken] = useState(localStorage.getItem('airdropTk'));
    const [twitter, setTwitter] = useState(loginInfo.twitter);
    const [follow, setFollow] = useState(loginInfo.follow);
    const [discordJoin,setDiscordJoin] = useState('');
    const [discord, setDiscord] = useState(loginInfo.discord);
    const [msg, setMsg] = useState('')
    const [btnLoad,setBtnLoad] = useState(false);
    const { visible, setVisible } = useWalletModal();
    const [prevImg,setPrevImg] = useState<string|undefined>();
    const [spaceInfo, setSpaceInfo] = useState([]);
    const [twitterUrl, seTwitterUrl] = useState('javascript:void(0)')
    const [discordUrl, setDiscordUrl] = useState('javascript:void(0)')
    const [discordAuthUrl, setDiscordAuthUrl] = useState('javascript:void(0)')
    const [discordTxt, setDiscordTxt] = useState('Join')
    const [shareUrl, setShareUrl] = useState('')
    const [twitterInfo,setTwitterInfo] = useState<Record<string,any>>({});
    const [summary,setSummary] = useState<Record<string,any>>({});
    const [loading,setLoading] = useState(false);


    const goFollow = () => {
        localStorage.setItem('userInfo', JSON.stringify({
            ...loginInfo,
            follow: true
        }));
        setFollow(true);
    }

    const goDiscord = () => {
        localStorage.setItem('userInfo', JSON.stringify({
            ...loginInfo,
            discord: true
        }));
        setDiscord(true);
        // if(discordUrl!=discordAuthUrl){
        //     setTimeout(()=>{
        //         setDiscordUrl(discordAuthUrl);
        //         setDiscordTxt('Verify')
        //     },500)
            
        // }else{
        //     localStorage.setItem('userInfo', JSON.stringify({
        //         ...loginInfo,
        //         discord: true
        //     }));
        //     setDiscord(true);
        //     setDiscordTxt('Join')
        // }
    }

    const Sync = async ()=>{
        if(!(twitter&&discord)){
            return 
        }
        setBtnLoad(true);
        setMsg('');
        const formData = new FormData();
        //@ts-ignore;
        const img_blob = await toBlob(ref.current,{});
        //@ts-ignore;
        formData.append('file',img_blob);
        axios.post(`${api}/v1/poster/claim?pkg=app.zclub`,formData,{
            headers:{
                'Authorization':`HIN ${token}`
            }
        }).then(res=>{
            if(res.data.code==0){
                setLoginInfo({
                    ...loginInfo,
                    isDone:true
                })
                localStorage.setItem('userInfo',JSON.stringify({
                    ...loginInfo,
                    isDone:true
                }))
                getSpaceInfo();
            }else{
                toast(res.data.err_msg||'error');
            }
        }).catch(e=>{
            const info = {
                '92038':'already claimed',
                '80003':'index error',
                '20221':'did not connect twitter/ did not follow twitter/ participant 0 twitter space'
            } 
            const code = e?.response?.data?.code;
            // @ts-ignore
            const msg = info[code]||'unknown error'
            setMsg(msg);
            toast(msg)
        }).finally(()=>{
            setBtnLoad(false);
        })
    }

    const Connection = ()=>{
        setVisible(true);
    }

    const goVerify = ()=>{
        history.push('/airdrop/verify/')
    }

    const goShare = useCallback(async () => {
        if(shareUrl){
            window.open(shareUrl);
        }
    },[shareUrl])

    const getSpaceInfo = ()=>{
        axios.get(`${api}/v1/users/me/space?pkg=app.zclub`,{
            headers:{
                'Authorization':`HIN ${token}`
            }
        }).then(res=>{
            if(res.data.code == 0){
                setShareUrl(res.data.data.twitter_share_url)
                setSpaceInfo(res.data.data)
                setTwitterInfo(res.data.data.user)
                setSummary(res.data.data.summary);
            }else{
                toast(res.data.msg||'error')
            }
        }).catch(e=>{
            const msg = e?.response?.data?.err_msg||'network err';
            toast(msg)
        })
    }

    const getUserInfo = ()=>{
        setLoading(false);
        axios.get(`${api}/v1/users/me?pkg=app.zclub`,{
            headers:{
                'Authorization':`HIN ${token}`
            }
        }).then(res=>{
            if(res.data.code == 0){
                const {point_conf,user_bindings} = res.data.data;
                seTwitterUrl(point_conf.twitter_link)
                setDiscordUrl(point_conf.discord_join_link)
                setDiscordJoin(point_conf.discord_join_link)
                setDiscordAuthUrl(point_conf.discord_oauth_link);
                setTwitter(false);
                setLoading(true);
                //setDiscord(false);
                const loc_store = {
                    twitter:false,
                    discord: discord
                };
                (user_bindings||[]).forEach((item:any)=>{
                    if(item.bind_type=='twitter'){
                        setTwitter(true)
                        loc_store.twitter = true;
                    }else if(item.bind_type=='discord'){
                        setDiscord(true);
                        loc_store.discord = true;
                    }
                })
                localStorage.setItem('userInfo', JSON.stringify({
                   ...loginInfo,
                   ...loc_store
                }));
            }else{
                toast(res.data.msg||'error')
            }
        }).catch(e=>{
            const msg = e?.response?.data?.err_msg||'network err';
            toast(msg)
        })
    }

    const prevImgDown = ()=>{
        var link = document.createElement('a');
        link.download = 'ZClubNFT.jpeg';
        //@ts-ignore
        link.href = prevImg;
        link.click();
    }




    useEffect(()=>{
        if(token && loginInfo.isDone&& ref && ref.current){
            toJpeg(ref.current,{}).then(dataUri=>{
                setPrevImg(dataUri);
            })
        }
    },[loginInfo,token,ref,twitterInfo])

    useEffect(()=>{
        if(token){
            getUserInfo();
        }
    },[token])

    useEffect(()=>{
        if(loading){
            getSpaceInfo();
        }
    },[loading])

    // useEffect(()=>{
    //     if(spaceInfo && spaceInfo.poster_url=="" && prevImg){
    //         (async ()=>{
    //             // upload img
    //             const formData = new FormData();
    //             //@ts-ignore;
    //             const img_blob = await toBlob(ref.current,{});
    //             //@ts-ignore;
    //             formData.append('file',img_blob);

    //             axios.post(`${api}/v1/poster/upload`,formData,{
    //                 headers:{
    //                     'Authorization':`HIN ${token}`
    //                 }
    //             }).then(res=>{
    //                 console.log('upload',res);
    //             }).catch(e=>{
    //                 const msg = e?.response?.data?.err_msg||'network err';
    //                 toast(msg)
    //             })
    //         })()
            
    //     }
    // },[spaceInfo,prevImg])




    return <>
    
        <div className={styles.main}>
            {loginInfo.isLogin == 'true' ? <>
                <div className={styles.box2}>
                    <div className={styles.steps}>
                        <ul>
                            <li>
                                <em>Claim ZCLUB NFT</em>
                                <p>Airdrop credential</p>
                            </li>
                            <li>
                                <em>Token Airdrop</em>
                                <p>Coming soon…</p>
                            </li>
                            <li>
                                <em>Talk to Earn</em>
                                <p>We’re working on it</p>
                            </li>
                        </ul>
                    </div>
                    {loginInfo.isDone ? <div className={styles.done}>
                        <h3>🎉 Congratulations</h3>
                        <p>You’ve won a free ZClub NFT.   In-app NFTs will be distributed on launch day, make sure to join <a href={discordJoin} target="_blank">Discord</a> for the latest info.</p>
                        <div className={styles.res}>
                            <img src={prevImg} alt="" />
                            <span onClick={prevImgDown}><img src={downImg} alt="" /></span>
                        </div>
                        <button onClick={goShare}>Tell friends via Twitter</button>
                    </div> : <>
                        <div className={styles.bod}>
                            <img src={Img} alt="" />
                            <dl>
                                <dt>Step 1</dt>
                                <dd>
                                    <p>Connect your Twitter account to sync your Space data.</p>
                                    <ul>
                                        <li><img src={follow ? itemCheck : itemNoCheck} /><span>Follow <a className={styles.color01} href={twitterUrl} onClick={goFollow} target="_blank">@ZClub_App</a> on Twitter</span></li>
                                        <li><img className={styles.verNg8} src={twitter ? itemCheck : itemNoCheck} /><span>Connect your Twitter</span>{twitter ? null : <button onClick={goVerify}>Verify Twitter</button>}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>Step 2</dt>
                                <dd>
                                    <p>Join the Discord to claim NFT for free.</p>
                                    <ul>
                                        <li><img src={discord ? itemCheck : itemNoCheck} /><span>{discordTxt} <a className={styles.color02} href={discordUrl} onClick={goDiscord}  target="_blank">ZClub</a> Discord</span></li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <button className={twitter&&discord ? '' : styles.disable} onClick={Sync}>Sync Data to Claim NFT{btnLoad&&<i></i>}</button>
                        {msg ? <div className={styles.errMsg}>{msg}</div> : null}
                    </>}
                </div>
                {twitterInfo.twitter_user_id ? <div className={styles.spaceInfo}>
                    <div className={styles.userInfo}>
                        <div className={styles.avatar}>
                            <img src={twitterInfo.avatar_url} alt="" />
                        </div>
                        <div className={styles.info}>
                            <div>{twitterInfo.display_name}</div>
                            <p>{twitterInfo.twitter_screen_name}</p>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <em>{summary.host}</em>
                            <p>Host</p>
                        </li>
                        <li>
                            <em>{summary.speaker}</em>
                            <p>Speaker</p>
                        </li>
                        <li>
                            <em>{summary.listener}</em>
                            <p>Listener</p>
                        </li>
                    </ul>
                </div> : null}
                {spaceInfo?.spaces?.map(item=><div className={styles.listener}>
                    <div className={styles.info}>
                        <a target="_blank" href={`https://twitter.com/i/spaces/${item.space_id}`}><i></i></a>
                        <span>{formatDate(item.started_at)}</span>
                        <em>{item.role=='4'?'Host':item.role=='2'?'Speaker':item.role=='1'?'Listener':''}</em>
                    </div>
                    <h4>{item.title}</h4>
                    <div className={styles.peoples}>
                        {item.listeners.slice(0,5).map((it:any)=><img src={it.avatar_url} alt="" />)}
                        <span>{item.total_live_listeners} Listeners</span>
                    </div>
                </div>)}
            </> : <>
                <div className={styles.box}>
                    <img src={Img} alt="" />
                    <h2>ZCLUB NFT</h2>
                    <p>Millions of people contribute to Twitter Space, but they have no return. ZCLUB is making something change.</p>
                    <ul>
                        <li>Airdrop to Twitter Space users with no gas.</li>
                        <li>The credential for claiming future airdrops.</li>
                        <li>A pass to the next-gen social networking.</li>
                        <li>A identity-bound NFT tie to your Twitter ID.</li>
                    </ul>
                    <WalletBtn onClick={Connection}>Connect Wallet</WalletBtn>
                </div>
                <div className={styles.steps}>
                    <ul>
                        <li>
                            <em>Claim ZCLUB NFT</em>
                            <p>Airdrop credential</p>
                        </li>
                        <li>
                            <em>Token Airdrop</em>
                            <p>Coming soon…</p>
                        </li>
                        <li>
                            <em>Talk to Earn</em>
                            <p>We’re working on it</p>
                        </li>
                    </ul>
                </div>
            </>}
            <div className={styles.imgBox}>
                <div className={styles.card} ref={ref}>
                    <div className={styles.site}>Free claim ZClub NFT via https://zclub.app</div>
                    <div className={styles.type}>Listener</div>
                    <div className={styles.user_info}>
                        <div><img src={twitterInfo.avatar_url} alt=""/><i></i></div>
                        <span>@{twitterInfo.twitter_screen_name}</span>
                    </div>
                    <ul>
                        <li>
                            <div>
                                <img src={cardHost} alt=""/>
                                <span>Host</span>
                            </div>
                            <em>{summary.host}</em>
                        </li>
                        <li>
                            <div>
                                <img src={cardListener} alt="" />
                                <span>Speaker</span>
                            </div>
                            <em>{summary.speaker}</em>
                        </li>
                        <li>
                            <div>
                                <img src={cardSpeaker} alt="" />
                                <span>Listener</span>
                            </div>
                            <em>{summary.listener}</em>
                        </li>
                    </ul>
                    <p>{spaceInfo?.spaces?.length||0} Twitter Spaces related to you</p>
                </div>
            </div>
        </div>
    </>
}