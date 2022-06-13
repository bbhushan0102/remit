import react from 'react'

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function Controls (props) {

    return (
        <div className="control">
            <button className='control_SkipButton' onClick = {()=> props.skipSong(false)}>
                <FontAwesomeIcon icon = { faBackward } />
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)} >
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            
            <button className='control_SkipButton' onClick={()=> props.skipSong()}>
                <FontAwesomeIcon icon = { faForward } />
            </button>


        </div>
    )
}
export default  Controls;