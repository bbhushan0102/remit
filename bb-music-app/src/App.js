import logo from './logo.svg';
import './App.css';
// import Player from './components/Player';
import Main from './components/Main';
import Search from './components/Search';
import Sidebar from './components/Sidebar'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Sidebar />
        <span>
         <Main />
       </span>
       {/* <Search/> */}
    </div>
  );
}
export default App;
