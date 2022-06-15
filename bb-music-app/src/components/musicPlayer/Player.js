import react, { useEffect, useRef, useState } from 'react'
import Details from './Details';
import Controls from './Controls';
import '../../App';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../theme/GlobalStyle";
import { lightTheme, darkTheme } from "../theme/Themes"


function Player(props) {

    const audioEI = useRef(null)
    const [isPlaying, setIsPlaying] = useState (false)

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

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

        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
        <GlobalStyles/>
        
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

            <Link to='/search'>
            <button className='control_faSearch' >
                <FontAwesomeIcon icon = { faSearch } /> {" "} Search
            </button>
             </Link>


             { " "}
             <button onClick={themeToggler}>Switch Theme</button>
             {" "}
             <Link to ='/tracklist'>
                <button className='details'>Track List</button>
             </Link>
            
        </div>
        </>
    </ThemeProvider>

    )
   

}
export default Player; 