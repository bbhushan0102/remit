import logo from './logo.svg';
import './App.css';
// import Player from './components/Player';
import PlayerMain from './components/PlayerMain';
import Search from './components/Search';
import Sidebar from './components/Sidebar'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Sidebar />
        <span>
         <PlayerMain />
       </span>
       {/* <Search/> */}
    </div>
  );
}
export default App;
