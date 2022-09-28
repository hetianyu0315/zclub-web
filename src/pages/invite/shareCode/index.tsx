import React, { useState, useEffect } from 'react';
import  { useLogin } from '@/components/hooks/login';
import { history } from 'umi';
import axios from 'axios';
import { api } from '@/utils/index';
import toast from '@/components/toast';
import styles from './index.less';

const copyToClipboard = (str:string)=>{
    if (navigator && navigator.clipboard && navigator.clipboard.writeText){
        return navigator.clipboard.writeText(str);
    }else{
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    } 
}

export default function IndexPage(){
    const [ total, setTotal] = useState(0);
    const [ code , setCode ] = useState('');
    const {isLogin} = useLogin();
    const onCopy = (type:string)=>{
        switch(type){
            case 'code':
                copyToClipboard(code);
                break;
            case 'url':
                copyToClipboard(`${window.location.origin}/referral/?referral=${code}`);
                break;
        }
        toast('copy success')
    }

    useEffect(()=>{
        axios.post(`${api}/v1/users/me?pkg=app.zclub&e=GkU4`,null,{
            headers:{
                'Authorization':`HIN ${localStorage.getItem('token')}`
            }
        }).then((res)=>{
            const {total_point,daily_point,referred,id} = res.data.data;
            setTotal(referred);
            setCode(id);
        }).catch(e=>{
            const msg = e?.response?.data?.err_msg||'network err';
            toast(msg)
        })
    },[])
    return <>
        <div className={styles.back_box}><div className={styles.back} onClick={()=>history.push('/referral/mission')}></div></div>
        <div className={styles.main}>
            <div className={styles.info}>
                <div>Add referrals:</div>
                <div><em>{total}</em> Users</div>
                <p>Be one of the top referrers and get access to free ACE points or valuble NFTS</p>
            </div>
            <div>
                <dl>
                    <dt>REF Code:</dt>
                    <dd>
                        <div onClick={()=>onCopy('code')}>{`${code}`}</div>
                    </dd>
                </dl>
                <button onClick={()=>onCopy('url')}>Copy Your Share Link</button>
            </div>
        </div>
        </>
}