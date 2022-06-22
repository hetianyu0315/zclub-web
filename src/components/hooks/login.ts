import {useState,useEffect} from 'react';
import {history} from 'umi'

export function useLogin(){
    const _token = localStorage.getItem('token');
    const [isLogin,_setLogin] = useState(_token);
    const setLogin = (val:string)=>{
        if(val){
            localStorage.setItem('token',val);
            _setLogin(val);
        }else{
            localStorage.setItem('token','');
            _setLogin(null);
            history.push('/');
        }
    }

    useEffect(()=>{
        if(_token){
            _setLogin(_token);
        }
    },[_token])

    return {
        isLogin,
        setLogin,
    }
}