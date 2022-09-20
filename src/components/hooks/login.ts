import {useState,useEffect} from 'react';
import {history} from 'umi'

export function useLogin(){
    let _token:string|null|boolean = '';
    const [isLogin,_setLogin] = useState<string|null|boolean>('');
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
        _token = localStorage.getItem('token');
        if(_token){
            _setLogin(_token);
        }else{
            _setLogin(false);
        }
    },[])

    return {
        isLogin,
        setLogin,
    }
}