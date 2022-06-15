import react , {useState, useRef} from 'react'
import '../../css/sidebar.css';
import logo from './logo.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import Modal from './Modal';

function Sidebar ({props}) {

    const [state, setState] = useState({
        currentPlayList: 'home',
        modal: false,

        playlists: {
            home: new Set(),
            favourite: new Set(),
        }
    })

    const playlistRef =useRef(null)
    const playlists =Object.keys(state.playlists)


    const addplaylist = e => {
        e.preventDefault()
        const list = playlistRef.current.value
        setState({
            ...state,
            modal:false,
            playlists: { ...state.playlists, [list]:new Set()
            }
        })
    }
    return (
        <div className='sidebar_container'>
            <h2>Battery safe mode on</h2>
            <img src = {logo} className="img"/>
            <ul>
                {
                    playlists.map(list =>(
                        <li 
                        key={list} 
                        className={list === state.currentPlayList? 'active':''} 
                        onClick ={() =>{
                            setState({ ...state, currentPlayList: list})
                        }}
                        >
                            {list}
                        </li>
                    ))}
                <li 
                className='new_playlist' 
                onClick={()=> {
                    setState({...state, modal: true})
                }}
                >
                   <FontAwesomeIcon icon = { faPlusCircle } />
                {" "}
                <span>New Playlist</span>
                </li>
                

             
                <Modal 
                    show={state.modal} 
                    close={() => {
                    setState({ ...state, modal: false })
                }}>
                <form onSubmit={addplaylist}>
                    <div className='title'> New Plylist</div>
                    <input
                    type="text"
                    placeholder='My Playlist'
                    ref= { playlistRef }
                    required
                    /> <br />
                    <button type="submit">Create List</button>
                    
                </form>
                </Modal>
            </ul>
        
        </div> 
    )
}

export default Sidebar;
