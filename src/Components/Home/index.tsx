import React from 'react';
import Player from '../Player'
import styles from './home.module.css'


export default function Home(){
    return(
        <main className={styles.main}>
        <Player/>
        </main>
    )
}