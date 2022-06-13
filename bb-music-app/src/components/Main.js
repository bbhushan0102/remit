import { useEffect, useState } from "react";
import Player from "./Player";

function Main () {

    const [songs]=useState ([ {

        title: "song1",
        artist: "Bharat",
        img_src:"./song_images/Beauty_Cover (front)_e.jpg",
        src:"./songs/Beauty.mp3"

    },
    {
        title: "song2",
        artist: "Vera",
        img_src:"./song_images/Feblu_Cover (front)_e.jpg",
        src:"./songs/Feblu.mp3"
    }

       
    ])

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

    // useEffect(()=>{
    //     if(currentSongIndex+1>songs.length -1) {
    //         return 0
    //     }
    //     else {
    //         return currentSongIndex +1
    //     }
    // },[currentSongIndex, songs.length])

    useEffect(()=>{
        setNextSongIndex(()=>{
        if (currentSongIndex + 1 >songs.length - 1 ){
          return 0;
        } else{
          return currentSongIndex + 1;
        }
      });
      },[currentSongIndex])

    return (
        <div class="player">
            <Player 
            currentSongIndex= {currentSongIndex}
            setCurrentSongIndex = { setCurrentSongIndex }
            nextSongIndex ={ nextSongIndex }
            songs = {songs}
            />
        </div>
    )

}
export default Main;