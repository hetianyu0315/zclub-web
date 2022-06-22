import React,{useEffect,useState,useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';

export default function Toast(text:string){

    let el = document.querySelector('#message')
    if (!el) {
        el = document.createElement('div')
        el.className = 'message'
        el.id = 'message'
        document.body.append(el)
    }

    setTimeout(()=>{
        if(document.querySelector('#message')){
            document.body.removeChild(el);
        }
    },2000);
    
    ReactDOM.render(
        <div className={styles.message}>{text}</div>,
        el
      )
}
