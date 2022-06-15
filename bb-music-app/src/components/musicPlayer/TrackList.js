import Songs from '../playList.json'

function SongsList() {
    return (
        <div>
           <h1>Data</h1>
           {
        Songs.map( song =>{
            return(
                <div key={song.id}>
                    { song.track }
                    {/* { song.src }
                    {song.img_src} */}
                </div>
            )
        })
           }
        </div>
    )
}
export default SongsList;
