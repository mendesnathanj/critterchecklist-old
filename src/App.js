import React from 'react';
import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import BugsPage from './pages/bugs_container';
import Fish from './pages/fish';
import Fossils from './pages/fossils';
import Music from './pages/music';
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
                <Fish />
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
