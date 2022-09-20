import React, { useEffect, useState, useRef } from 'react';

interface LoginInfo {
    isLogin?: string
    twitter?: boolean
    follow?: boolean
    discord?: boolean
    isDone?: boolean
}

const useLogin = ()=>{
    const [token, setToken] = useState<string|null|boolean>(false);
    const [loginInfo, setLoginInfo] = useState<LoginInfo>({})

    useEffect(()=>{
        setToken(localStorage.getItem('airdropTk'));
        setLoginInfo(JSON.parse(localStorage.getItem('userInfo') || '{}'));
    },[])

    const getToken = ()=>{
        return token;
    }
    const getLoginInfo = ()=>{
        return loginInfo;
    }

    return {
        getToken,getLoginInfo,setLoginInfo,setToken
    }
}

export default useLogin;