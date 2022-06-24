import React, {useEffect, useState} from 'react';
import { history  } from 'umi';
import axios from 'axios';
import { getUrlSearchParams, api } from '@/utils/index';
import  { useLogin } from '@/components/hooks/login';
import toast from '@/components/toast';
import styles from './index.less';
const reg_email = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;

export default function IndexPage(){
    const {setLogin} = useLogin();
    const [step,setStep] = useState('1');
    const [email,setEmail] = useState('');
    const [otp,setOtp] = useState('');
    const [code,setCode] = useState('');
    const [butCls,setButCls] = useState(styles.disabled)
    const [butCls2,setButCls2] = useState(styles.disabled2)
    const [codeTxt,setCodeTxt] = useState('Send Again')
    const [count,setCount] = useState(60);
    const countdown = ()=>{
        setCount(60);
    }
    const goStep2 = ()=>{ 
        setStep('2')
    }
    const goStep3 = ()=>{
        if(!email.length){
            toast('please input email');
            return;
        }
        if(!reg_email.test(email)){
            toast('invalid email');
            return;
        }
        if(code.length && code.length!=10){
            toast('invalid referral code');
            return;
        }
       
        axios.post(`${api}/v1/auth/otp?&pkg=app.zclub`,{
            email,
        }).then(()=>{
            setStep('3')
            countdown();
        }).catch(e=>{
            const msg = e?.response?.data?.err_msg||'network err';
            console.log('e',e)
            toast(msg);
        })
    }
    const handleChange=(type:string, value:string)=>{
        switch(type){
            case 'email':
                setEmail(value);
                if(value.length){
                    setButCls('');
                }else{
                    setButCls(styles.disabled);
                }
                break;
            case 'otp':
                setOtp(value);
                if(value.length){
                    setButCls2('');
                }else{
                    setButCls2(styles.disabled2);
                }
                break;
            case 'code':
                setCode(value);
                break;
        }
    }
    const Submit =async ()=>{
        if(butCls==''){
            try{
                let res = await axios.post(`${api}/v1/auth/login?&refer=${code}&pkg=app.zclub`,{
                    email,
                    code:otp,
                })
                console.log('res',res);
                if(res.data.code==0&&res.data.data){
                    setLogin(res.data.data.token)
                    history.push('/referral/mission');
                }else{
                    toast(res.data.err_msg)
                }
            }catch(e:any){
                const msg = e?.response?.data?.err_msg||'network err';
                console.log('e',e)
                toast(msg);
            }
            
        }else{
            toast('require email')
        }
    }
    const sendCode = ()=>{
        if(count==0){
            axios.post(`${api}/v1/auth/otp?&pkg=app.zclub`,{
                email,
            }).then(()=>{
                setCodeTxt('Send Again')
                countdown();
            }).catch(e=>{
                const msg = e?.response?.data?.err_msg||'network err';
                console.log('e',e)
                toast(msg);
            })
        }else{
            
        }
    }

    useEffect(()=>{
        if(step == '1'){
            document.body.classList.add('animate');
        }else{
            document.body.classList.remove('animate');
        }
        
    },[step]);

    useEffect(()=>{
        if(window.location.search){
            let res = getUrlSearchParams();
            if(res['referral']){
                setCode(res['referral'])
            }
        }
    },[])

    useEffect(()=>{
        let tick:any;
        if(count!=0){
            tick = setTimeout(() => {
                setCount(count-1)
            }, 1000);
        }
        return ()=>{
            tick && clearTimeout(tick);
        }
    },[count])


    return <>
        {
            step=='1' &&
            <>
                <div className={styles.main}>
                    <div className={styles.head}>Invite and Earn</div>
                    <ul>
                        <li>- Invite your friends to join Zclub</li>
                        <li>- Earn ACE Points</li>
                        <li>- Burn ACE points for AUT tokens or unique NFTs on launch day</li>
                    </ul>
                    <p>The more friends you invite, the more ACE points you earn!!!</p>
                    <button onClick={goStep2}>Sign up and refer to earn ACE points</button>
                </div>
            </>
        }
        {
            step=='2' &&
            <>
                <div className={styles.back} onClick={()=>setStep('1')}></div>
                <div className={styles.main2}>
                    <div className={styles.head}>Invite and Earn</div>
                    <p>Please Enter your email for sign up</p>
                    <dl>
                        <dt>Email:</dt>
                        <dd><input type="text"  value={email} onChange={(e)=>handleChange('email',e.target.value)}/></dd>
                    </dl>
                    <dl>
                        <dt>Invite Code: <span>(optional)</span></dt>
                        <dd><input type="text" value={code} onChange={(e)=>handleChange('code',e.target.value)}/></dd>
                    </dl>
                    <button className={butCls} onClick={goStep3}>Confirm</button>
                </div>
            </>

        }
        {
            step=='3'&&
            <>
                <div className={styles.back} onClick={()=>setStep('2')}></div>
                <div className={styles.main3}>
                    <div className={styles.head}>Invite and Earn</div>
                    <p>We've send an OTP to your email. <br/>Please check it!</p>
                    <dl>
                        <dt>OTP Code:</dt>
                        <dd><input type="text" placeholder='Please enter OTP' value={otp} onChange={(e)=>handleChange('otp',e.target.value)}/></dd>
                        <dd>
                            <div className={styles.sendbox}><span onClick={sendCode}>{count>0?`${count}s`:codeTxt}</span></div>
                        </dd>
                    </dl>
                    <button className={butCls2} onClick={Submit}>Confirm</button>
                </div>
            </>
        }
        </>
}