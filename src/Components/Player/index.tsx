import React, {useEffect, useState} from 'react'
import Button from '../Button'
import image from '../../Assets/Cover.png'
import Slider from '@material-ui/core/Slider'
import styles from './controll.module.css'
const music = require('../../Assets/GetIntoIt.mp3')



export default function Player(){
    let myaudio = new Audio(music.default)

    function formatDuration(value:number){
        const minute = Math.floor(value/60);
        const secondLeft = value - minute*60;
        return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
    }
    
 
    
    const [duration, setDuration] = useState(0)
    const [position, setPosition] = useState(0)
    
    myaudio.ontimeupdate = () =>{

        let int = myaudio.currentTime
    


        setPosition(Math.round(int))

        }
    myaudio.onloadeddata = ()=>{
       setDuration(Math.round(myaudio.duration))
   }
   myaudio.volume = 0.3

 


    return(
        <div className={styles.container}>  
            <div className={styles.content_container}>
               <img className={styles.cover} src={image} alt='cover'/>
                
            </div> 
            <div className={styles.content_container}>
                <h1>Doja Cat - Get into it (yuh)</h1>
                <div className={styles.buttons}>
                    <Button audio={myaudio} />
                    <Slider
                    min={0}
                    max={duration}
                    value={position}
                    color='secondary' aria-label="Default" onChange={(_, value)=>{console.log(value)}} />
                    <div className={styles.durations}>
                        <p>{formatDuration(position)}</p>
                        <p> - {formatDuration(duration - position)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}