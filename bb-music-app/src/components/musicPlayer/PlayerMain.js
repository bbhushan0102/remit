import { useEffect, useState } from "react";
import Player from "./Player";
import data from '../data'

function PlayerMain () {

    const [songs, setSongs] = useState(data());
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

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
        <div className="player">
            <Player 
            currentSongIndex= {currentSongIndex}
            setCurrentSongIndex = { setCurrentSongIndex }
            nextSongIndex ={ nextSongIndex }
            songs = {songs}
            />
        </div>
    )

}
export default PlayerMain;