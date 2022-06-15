import react, { useEffect, useRef, useState } from 'react'
import Details from './Details';
import Controls from './Controls';
import '../../App'



function Player(props) {

    const audioEI = useRef(null)
    const [isPlaying, setIsPlaying] = useState (false)
    useEffect(() => {
        if (isPlaying) {
            audioEI.current.play()
        } 
        else {
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
    const shuffle = () => {
            props.setCurrentSongIndex(() => {
              let index = props.currentSongIndex;
              return Math.floor(Math.random() * index)
            })
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
                shuffle={ shuffle }
               
                
                
                />
            </div>
            <audio className='player_audio'
                
                src={props.songs[props.currentSongIndex].src}
                ref={ audioEI}
            >
            </audio>
            
            {/* <p className='nextsong-details'>
                    Next Song:
                    <span className='nextsong-details'>
                        { props.songs [props.nextSongIndex].title} by { " "} 
                        { props.songs [props.nextSongIndex].artist}
                        Next Song
                    </span>
                </p>
            <p>
                Songs List:
                <span className='nextsong-details'>
                    {props.songs.length}
                    
                </span>
            </p> */}
            
        </div>

    )
   

}
export default Player; 