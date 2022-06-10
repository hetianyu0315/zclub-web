import React from 'react';
import styles from './index.less';
import loadImg  from '@/assets/images/loading.gif';

export default function Loading(){
    return <>
        <div className={styles.loading}>
            <img src={loadImg} alt="" style={{width:150,height:150}}/>
        </div>
    </>
}