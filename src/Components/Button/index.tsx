import React, { useEffect, useState } from 'react';
import {PlayArrow, KeyboardArrowLeftRounded, KeyboardArrowRightRounded, Pause} from '@material-ui/icons'
import styles from './button.module.css'



export default function Button({audio}:any){
const [isPlaying, setIsPlaying] = useState(false)


useEffect(()=>{

isPlaying?audio.play():audio.pause()


},[isPlaying])


function playMusic(){
   
    setIsPlaying(true)
}

function pauseMusic(){
    console.log('pause')
    setIsPlaying(false)

   
}




    return(
        <div className={styles.buttons}>
              <div className={styles.button}>
                <KeyboardArrowLeftRounded fontSize='large'/>
            </div>
            <div className={`${styles.button} ${styles.playButton}`}>
                {!isPlaying?<div  onClick={playMusic}><PlayArrow fontSize='large'/></div>:<div onClick={pauseMusic}><Pause/></div>}
            </div>

            <div className={styles.button}>
                <KeyboardArrowRightRounded fontSize='large'/>
            </div>
               
        </div>
    )
    }