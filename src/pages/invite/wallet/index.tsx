import React, {useState} from 'react';
import { history } from 'umi';
import axios from 'axios';
import toast from '@/components/toast';
import { api } from '@/utils/index';
import  { useLogin } from '@/components/hooks/login';
import styles from './index.less';
import wallet_img01 from '@/assets/images/invite/wallet/phantom.svg';
import wallet_img02 from '@/assets/images/invite/wallet/sollet.svg';
import wallet_img03 from '@/assets/images/invite/wallet/solflare.svg';
import wallet_img04 from '@/assets/images/invite/wallet/math.svg';

const wallets = [
    {
        img:wallet_img01,
        name:'Phantom'
    },
    // {
    //     img:wallet_img02,
    //     name:'Sollet Extension'
    // },
    {
        img:wallet_img03,
        name:'Solflare Extension'
    }
]

export default function IndexPage(){
    const [addr,setAdd] = useState('');
    const {isLogin} = useLogin();
    const [butCls,setButCls] = useState(styles.disabled)
    const Submit = ()=>{
        if(addr.length>10){
            axios.post(`${api}/v1/binding?pkg=app.zclub&e=GkU4`,{
                'bind_type':'wallet',
                'bind_id': addr
            },{
                headers:{
                    'Authorization':`HIN ${localStorage.getItem('token')}`
                }
            },).then((res)=>{
               toast('bind success');
               setTimeout(()=>{
                    history.push('/referral/mission/')
               },1500);
            }).catch(e=>{
                const msg = e?.response?.data?.err_msg||'network err';
                toast(msg)
            })
        }else{
            toast('error wallet address')
        }
    }
    const Change = (val:string)=>{
        setAdd(val)
        if(val.length>10){
            setButCls('')
        }else{
            setButCls(styles.disabled)
        }
    }

    const Connect = async (type:string)=>{
        switch(type){
            case 'Phantom':
                if(window.solana&&window.solana.isPhantom){
                    let res = await window.solana.connect()
                    setAdd(res.publicKey.toString());
                    setButCls('')
                }else {
                    window.open('https://phantom.app/')
                }
                break;
            case 'Solflare Extension':
                if(window.solflare){
                    await window.solflare.connect();
                    setAdd(window.solflare.publicKey.toString())
                    setButCls('')
                }else {
                    window.open('https://solflare.com/')
                }
        }
    }
    return <>
        <div className={styles.back} onClick={()=>history.push('/referral/mission/')}></div>
        <div className={styles.main}>
            <div className={styles.info}>
                <p>Enter Your Solana Wallet to earn <span><em>+5</em> free ACE</span> per day</p>
            </div>
            <div>
                <dl>
                    <dt>Solana Wallet Address</dt>
                    <dd>
                        <input type="text" name="" id="" value={addr} onChange={(e)=>Change(e.target.value)}/>
                    </dd>  
                    <dd>
                        <div className={styles.connect}>
                            <span>Connect Wallet</span>
                            <ul>
                                {
                                    wallets.map((item)=>(
                                        <li key={item.name} onClick={()=>Connect(item.name)}>
                                            <img src={item.img} alt="" />
                                            <span>{item.name}</span>
                                        </li>
                                    ))
                                }
                                
                            </ul>
                        </div>
                        
                    </dd>
                </dl>
                <button className={butCls} onClick={Submit}>Submit</button>
            </div>
        </div>
        </>
}