import React, { useEffect, useState, useRef } from 'react';

interface LoginInfo {
    isLogin: string
    twitter: boolean
    follow: boolean
    discord: boolean
    isDone: boolean
}

const useLogin = ()=>{
    const [token, setToken] = useState(localStorage.getItem('airdropTk'));
    const [loginInfo, setLoginInfo] = useState<LoginInfo>(JSON.parse(localStorage.getItem('userInfo') || '{}'))

    return {
        token,loginInfo,setLoginInfo,setToken
    }
}

export default useLogin;