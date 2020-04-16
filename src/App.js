import React from 'react';
import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { BrowserRouter as Router, NavLink as Link, Route, Switch } from 'react-router-dom';
import BugsPage from './pages/bugs_container';
import FishPage from './pages/fish_container';
import Fossils from './pages/fossils_page';
import Music from './pages/music_page';
import Home from './pages/home';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/bugs'>Bugs</Link>
                </li>
                <li>
                  <Link to='/fish'>Fish</Link>
                </li>
                <li>
                  <Link to='/fossils'>Fossils</Link>
                </li>
                <li>
                  <Link to='/music'>Music</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path='/bugs'>
                <BugsPage />
              </Route>
              <Route path='/fish'>
                <FishPage />
              </Route>
              <Route path='/fossils'>
                <Fossils />
              </Route>
              <Route path='/music'>
                <Music />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
