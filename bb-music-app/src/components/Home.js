import react from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import PlayerMain from './musicPlayer/PlayerMain';

function Home(){
    return (
        <div class="App">
            <h2> Home component</h2>
            <Link to='/player'>
             
                </Link>

        </div>
    )
}
export default Home;