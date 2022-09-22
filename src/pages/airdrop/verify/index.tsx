import React, {useCallback, useEffect, useState} from 'react';
import styles from './index.less';
import { history  } from 'umi';
import axios from 'axios';
import {api} from '@/utils';
import toast from '@/components/toast';
import useLogin from '../useLogin'
import ImgBack from '@/assets/images/airdrop/arrow_back.svg';

export default function IndexPage(){
    const {getToken} = useLogin()
    const token = getToken();
    const [userInfo,setUserInfo] = useState<Record<string,any>>({});

    const [val,setVal] = useState('')

    const goVerify = ()=>{
        if(!val){
            toast('Paste the URL of the tweet to input box');
            return;
        }
        axios.post(`${api}/v1/binding?pkg=app.zclub`,{
            "bind_type":"twitter",
            "bind_id":val
        },{
            headers:{
                'Authorization':`HIN ${localStorage.getItem('airdropTk')}`
            }
        }).then(res=>{
            if(res.data.code == 0){
                toast('verify success');
                history.push('/airdrop/')
            }else{
                toast(res.data.msg||'error')
            }
        }).catch(e=>{
            const msg = e?.response?.data?.err_msg||'network err';
            toast(msg)
        })
    }

    const goPost = useCallback(()=>{
        if(userInfo && userInfo.twitter_signature_url){
            window.open(userInfo.twitter_signature_url)
        }else{
            toast('wait for twitter signature url');
        }
    },[userInfo])

    const getUserInfo = ()=>{
        axios.get(`${api}/v1/users/me?pkg=app.zclub`,{
            headers:{
                'Authorization':`HIN ${localStorage.getItem('airdropTk')}`
            }
        }).then(res=>{
            if(res.data.code == 0){
                setUserInfo(res.data.data);
            }else{
                toast(res.data.msg||'error')
            }
        }).catch(e=>{
            const msg = e?.response?.data?.err_msg||'network err';
            toast(msg)
        })
    }

    useEffect(()=>{
        if(token){
            getUserInfo();
        }
    },[token])

    const onChange = (e:any)=>{
        setVal(e.target.value);
    }

    return <>
            <div className={styles.main}>
                <div className={styles.box}>
                    <div className={styles.back}>
                        <a href="/airdrop/"><img src={ImgBack} alt="" />Back</a>
                    </div>
                    <h3>Verify your twitter</h3>
                    <dl>
                        <dt>Step 1</dt>
                        <dd>
                            <p>Post a public tweet that contains your signed message.</p>
                            <button onClick={goPost}>Post tweet</button>
                        </dd>
                    </dl>
                    <dl>
                        <dt>Step 2</dt>
                        <dd>
                            <p>Paste the URL of the tweet to verify your profile.</p>
                            <input type="text" value={val} onChange={onChange} name="" id="" placeholder='Enter your Tweet URL' />
                            <button onClick={goVerify}>Submit</button>
                        </dd>
                    </dl>
                </div>
            </div>
        </>
}