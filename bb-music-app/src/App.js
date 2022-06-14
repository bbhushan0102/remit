import './App.css';
// import Player from './components/Player';
import PlayerMain from './components/musicPlayer/PlayerMain';

import Sidebar from './components/layout/Sidebar'
import Contentbar from './components/layout/Contentbar';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';


function App() {
  return (
    <div className="App">
      <Header > </Header>
      <Contentbar > </Contentbar>
      {/* <header className="App-header"> */}
      <Sidebar> </Sidebar>
        {/* <span>
         <PlayerMain />
       </span> */}
       {/* <Search/> */}
       <Footer> </Footer>
    </div>
  );
}
export default App;
