import React, { useEffect, useState, useRef } from 'react';
import SVGA from 'svgaplayerweb';
import { useLocation } from 'umi';

interface SvgaProps  {
    src:string,
    delay:number,
    interval: number,
}

export default function Svga(props:SvgaProps) {
    const player = useRef<any>();
    const parser = useRef<any>();
    const {src,delay,interval} = props;
    const [count,setCount] = useState(0);
    const [visible,setVisible] = useState(true);
    const [ani,setAni] = useState(false);
    const Ref = useRef<HTMLDivElement>();

    const animate = ()=>{
        setTimeout(()=>{
            player.current.startAnimation();
            setCount(count+1);
        },delay*1000)
    }

    useEffect(()=>{
        const callback = function(mutationsList:any, observer:any) {
            for(let mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName == 'class') {
                    if(mutation.target.classList.contains('animate')){
                        if(!ani){
                            setAni(true);
                        }
                    }else{
                        setAni(false);
                    }
                }
            }
        };
        let observer:any;
        observer = new MutationObserver(callback);
        observer.observe(window.document.body, {
            attributes: true,
            characterData: true ,
            attributeFilter: ['class']
        });

        // if(window.document.body.classList.contains('animate')){
        //     setAni(true);
        // }

        return ()=>{
            observer && observer.disconnect()
        }
        
    },[])

    useEffect(()=>{
        if(Ref.current){
            player.current = new SVGA.Player(Ref.current);
            parser.current = new SVGA.Parser();
            parser.current.load(src, function(videoItem:any) {
                player.current.loops = 1;
                player.current.clearsAfterStop = false;
                player.current.setContentMode('AspectFill')
                player.current.setVideoItem(videoItem);
                if(ani){
                    animate();
                }
            })
        }
    },[visible,ani])

    useEffect(()=>{
        const fn = ()=>{
            setVisible(!document.hidden);
        }
        window.addEventListener('visibilitychange',fn)
        return ()=>{
            window.removeEventListener('visibilitychange',fn)
        }
    },[])

    useEffect(()=>{
        let tick:any;
        if(visible&&ani){
            tick = setTimeout(()=>{
                player.current.startAnimation();
                setCount(count+1);
            },interval*1000)
        }
        return ()=>{
            tick &&clearTimeout(tick);
        }
    },[count,ani])

    return <>
       <div ref={Ref}/>
    </>
}