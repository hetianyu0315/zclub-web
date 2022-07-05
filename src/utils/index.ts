import axios  from "axios";
export function getUrlSearchParams(){
    let str = window.location.search;
    let res:Record<string,any> = {};
    let arr;
    if(str){
        arr = str.slice(1).split('&');
        arr.forEach(item=>{
            let [k,v] = item.split('=');
            res[k] = v;
        })
    }
    return res;
}

export const api = `https://webapi.zclub.app`;
