import React, { useState, useEffect } from 'react';
import  { useLogin } from '@/components/hooks/login';
import axios from 'axios';
import { getUrlSearchParams,api } from '@/utils/index';
import toast from '@/components/toast';
import { history } from 'umi';
import styles from './index.less';

export default function IndexPage(){
    const [total,setTotal] = useState('0');
    const [inviteNum,setInviteNum] = useState('0');
    const [curAce,setCurAce] = useState(0);
    const [curAceMax,setCurAceMax] = useState(0);
    const [dailyRefer,setDailyRefer] = useState(0);
    const {isLogin} = useLogin();
    const [twitterUrl,setTwitterUrl] = useState('')
    const [discordUrl,setDiscordUrl] = useState('')
    const [discordAuth,setDiscordAuth] = useState('')
    const [bindAccount,setBindAccount] = useState<Record<string,any>>({})
    const [_id,setId] = useState('')
    const [discordTxt,setDiscordTxt] = useState('GO!');

    const GetInfo = ()=>{
        axios.post(`${api}/v1/users/me?pkg=app.zclub`,null,{
            headers:{
                'Authorization':`HIN ${isLogin}`
            }
        },).then((res)=>{
            const {total_point,daily_point,referred,point_conf,user_bindings,id,daily_refer_point} = res.data.data;
            setTotal(total_point);
            setCurAce(daily_point);
            setInviteNum(referred);
            setTwitterUrl(point_conf.twitter_link);
            setDiscordUrl(point_conf.discord_join_link);
            setDiscordAuth(point_conf.discord_oauth_link);
            setDailyRefer(daily_refer_point);
            setCurAceMax(point_conf.daily_max)
            setId(id);
            let _bind:Record<string,any> = {};
            (user_bindings||[]).forEach((item:Record<string,any>)=>{
                _bind[item.bind_type] = true;
            })
            setBindAccount(_bind)
        }).catch(e=>{
            const msg = e?.response?.data?.err_msg||'network err';
            toast(msg)
        })
    }

    useEffect(()=>{
        GetInfo()
    },[])

    useEffect(()=>{
        if(window.location.search&&_id){
            let res = getUrlSearchParams();
            if(res['code']&&res['state']){
                Bind({
                    code:res['code'],
                    state:res['state'],
                    bind_id:_id
                },'discord')
            }
        }
    },[_id])

    const goTwitter = ()=>{
        if(!bindAccount['twitter']){
            Bind({
                bind_id:_id
            },'twitter')
        }
    }

    const goDiscord = ()=>{
        if(!bindAccount['discord']){
            setTimeout(()=>{
                setDiscordUrl(discordAuth)
                setDiscordTxt('Verify')
            },500)
        }
    }

    const Bind = (data:Record<string,any>,type:string)=>{
        axios.post(`${api}/v1/binding?pkg=app.zclub`,{
            'bind_type':type,
            ...data,
        },{
            headers:{
                'Authorization':`HIN ${isLogin}`
            }
        },).then((res)=>{
           toast('bind success');
           GetInfo();
        }).catch(e=>{
            const msg = e?.response?.data?.err_msg||'network err';
            toast(msg)
        })
    }

    const twitterProps = {
        href:bindAccount['twitter']?"#":twitterUrl,
        target:bindAccount['twitter']?"_self":"_blank",
    }

    const discordProps = {
        href:bindAccount['discord']?"#":discordUrl,
        target:bindAccount['discord']?"_self":"_blank",
    }

    const walletProps = {
        href:bindAccount['wallet']?"#":"/referral/wallet"
    }

    return <>
        <div className={styles.back} onClick={()=>history.push('/')}></div>
        <div className={styles.main}>
            <div className={styles.total}>
                <em>ACE</em>
                <div>{total}</div>
            </div>
            <div className={styles.preDay}>
                <div>
                    <em>{`+${curAceMax>curAce?curAce:curAceMax}`}</em> Pre Day
                </div>
                <div>Before Launch</div>
            </div>
            <p>The following four tasks can help you to earn more <em>Free ACE</em></p>
            <ul className={styles.list}>
                <li>
                    <a  {...twitterProps} onClick={goTwitter}>
                        <div className={styles.left}>
                            <div>Follow Twitter Account</div>
                            <div>&nbsp;</div>
                            {
                                bindAccount['twitter']?<span className={styles.comp}>Complete</span>:<span>GO!</span>
                            }                            
                        </div>
                        <div className={styles.right}>
                            <em>+10</em>
                            <div>ACE Per Day</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a {...discordProps} onClick={goDiscord}>
                        <div className={styles.left}>
                            <div>Join Discord Channel</div>
                            <div>&nbsp;</div>
                            {
                                bindAccount['discord']?<span className={styles.comp}>Complete</span>:<span>{discordTxt}</span>
                            }        
                        </div>
                        <div className={styles.right}>
                            <em>+10</em>
                            <div>ACE Per Day</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/referral/sharecode">
                        <div className={styles.left}>
                            <div>Add referrals</div>
                            <div>{`now: ${inviteNum} users`}</div>
                            <span>GO!</span>
                        </div>
                        <div className={styles.right}>
                            <em>{`+${dailyRefer}`}</em>
                            <div>ACE Per Day</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a {...walletProps}>
                        <div className={styles.left}>
                            <div>Add Wallet</div>
                            <div>Link</div>
                            {
                                bindAccount['wallet']?<span className={styles.comp}>Complete</span>:<span>GO!</span>
                            }   
                        </div>
                        <div className={styles.right}>
                            <em>+5</em>
                            <div>ACE Per Day</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        </>
}