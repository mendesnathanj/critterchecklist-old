import React from 'react';
import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { BrowserRouter as Router, Route, Switch, NavLink as Link } from 'react-router-dom';
import Navbar from './components/nav/navbar';
import Filter from './components/filter/filter_container';
import BugsPage from './pages/bugs_container';
import FishPage from './pages/fish_container';
import MusicPage from './pages/music_container';
import FossilPage from './pages/fossils_container';
import Home from './pages/home';
import Footer from './components/footer/footer';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="app">
            <h1 className="checklist-header-wrapper navitem">
              <Link exact className="critter-checklist-header navlink" to="/">Critter Checklist</Link>
            </h1>
            <Navbar />
            <Route path={"/:page"}>
              <Filter />
            </Route>
            <Switch>
              <Route path='/bugs'>
                <BugsPage />
              </Route>
              <Route path='/fish'>
                <FishPage />
              </Route>
              <Route path='/fossils'>
                <FossilPage />
              </Route>
              <Route path='/music'>
                <MusicPage />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
            <Route exact path='/'>
              <Footer />
            </Route>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
