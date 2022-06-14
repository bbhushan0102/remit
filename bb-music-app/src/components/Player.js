import react, { useEffect, useRef, useState } from 'react'
import Details from './Details';
import Controls from './Controls';



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
              let index = props.currentSongIndex;
              index++;
      
              if (index > props.songs.length - 1) {
                index = 0;
              }
              return index;
            });
        } else {
                props.setCurrentSongIndex(()=>{
                    let index = props.currentSongIndex;
                    index--;
                    if (index < 0) {
                        index = props.songs.length - 1;
            }   
                return index;
            })
        }
     }
    return (
        <div>
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
                shuffle = {props.songs}
                
                
                />
            </div>
            <audio className='player_audio'
                
                src={props.songs[props.currentSongIndex].src}
                ref={ audioEI}
            >
            </audio>
            <p>
                    Next Song:
                    <span>
                        { props.songs [props.nextSongIndex].title} by { " "} 
                        { props.songs [props.nextSongIndex].artist}
                        Next Song
                    </span>
                </p>
            <p>
                Songs List:
                <span>
                    {props.songs.length}
                    
                </span>
            </p>
            
        </div>

    )
   

}
export default Player; 