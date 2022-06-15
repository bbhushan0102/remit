import react from 'react'
import '../../App'


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
  faShuffle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Controls (props) {
    console.log(props.skipSong)
    console.log(props.demo)
    return (
        <div className="controls">
            <button className='control_SkipButton' onClick = {()=> props.skipSong(false)}>
                <FontAwesomeIcon icon = { faBackward } />
            </button>
            <button className="control_playButton" onClick={() => props.setIsPlaying(!props.isPlaying)} >
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            
            <button className='control_SkipButton' onClick={()=> props.skipSong()}>
                <FontAwesomeIcon icon = { faForward } />
            </button>
            
            <button className='control_ShuffleButton' onClick={()=>props.shuffle()} >
                <FontAwesomeIcon icon = { faShuffle } />
            </button>
        </div>
       
        
    )
}
export default  Controls;