import react, { useEffect, useRef, useState } from 'react'
import Details from './Details';
import Controls from './Controls';
import { faForward } from '@fortawesome/free-solid-svg-icons';


function Player(props) {

    const audioEI = useRef(null)
    const [isPlaying, setIsPlaying] = useState (false)
    useEffect(() => {
        if (isPlaying) {
            audioEI.current.play()
        } else {
            audioEI.current.pause()
        }
        
    })
     const skipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
              let temp = props.currentSongIndex;
              temp++;
      
              if (temp > props.songs.length - 1) {
                temp = 0;
              }
      
              return temp;
            });
          } else {
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
            })
          }
     }
    return (
        <div>
            <h3 className='player'>Plying now</h3>

            <div>
            <Details 
            song = {props.songs[props.currentSongIndex]}
            />
            
            </div>
            <div>
                <Controls
                isPlaying = { isPlaying}
                setIsPlaying = {setIsPlaying}
                skipSong = {skipSong}
                
                
                />
            </div>
            <audio className='player_audio'
                
                src={props.songs[props.currentSongIndex].src}
                ref={ audioEI}
            >
            </audio>
            <p>
                    Next Up:
                    <span>
                        { props.songs [props.nextSongIndex].title} by { " "} 
                        { props.songs [props.nextSongIndex].artist}
                        Next Song
                    </span>
                </p>
            
        </div>

    )
   

}
export default Player; 