import React, { useEffect, useState } from 'react';
import {PlayArrow, KeyboardArrowLeftRounded, KeyboardArrowRightRounded, Pause} from '@material-ui/icons'
import styles from './button.module.css'



export default function Button({audio}:any){
const [isPlaying, setIsPlaying] = useState(false)


useEffect(()=>{

isPlaying?audio.play():audio.pause()


},[isPlaying])


function changePlay(){
    isPlaying? setIsPlaying(false) : setIsPlaying(true)
}





    return(
        <div className={styles.buttons}>
              <div className={styles.button}>
                <KeyboardArrowLeftRounded fontSize='large'/>
            </div>
            <div className={`${styles.button} ${styles.playButton}`}>
                {!isPlaying?<div  onClick={()=>{changePlay()}}><PlayArrow fontSize='large'/></div>:<div onClick={()=>{changePlay()}}><Pause/></div>}
            </div>

            <div className={styles.button}>
                <KeyboardArrowRightRounded fontSize='large'/>
            </div>
               
        </div>
    )
    }