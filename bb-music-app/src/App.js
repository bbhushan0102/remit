import './App.css';
// import Player from './components/Player';
import PlayerMain from './components/musicPlayer/PlayerMain';
import { BrowserRouter, Route, Link, Switch, NavLink, Router } from 'react-router-dom'

import Sidebar from './components/layout/Sidebar'
import Contentbar from './components/layout/Contentbar';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Search from './components/musicPlayer/Search';



function App() {
  return (
  
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PlayerMain} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
      <Sidebar>
        <Router>
          <NavLink className="navbar-item" activeClassName="is-active" to="/">
              Music Player
          </NavLink>
          <NavLink className="navbar-item" activeClassName="is-active" to="/search">
            Search
          </NavLink>
        </Router>
      </Sidebar> 
      <Footer> </Footer>
    </div>
  );
}
export default App;
