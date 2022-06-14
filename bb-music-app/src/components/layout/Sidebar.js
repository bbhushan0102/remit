import react , {useState} from 'react'
import '../../css/sidebar.css';
import logo from './logo.jpg';

function Sidebar ({props}) {

    const [state, setState] = useState({
        currentPlayList: '',
        playlists: {
            home:null,
            favourite:null
        }
    })

    const playlists =Object.keys(state.playlists)
    return (
        <div className='sidebar_container'>
            <h2>sidebar</h2>
            <img src = {logo} className="img"/>
            <ul>
                {
                    playlists.map(list =>
                        <li key={list}>{list}</li>)
                }
            </ul>
        
        </div>
    )
}

export default Sidebar;
