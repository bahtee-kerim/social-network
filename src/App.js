import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    
      <div className="app-wrapper">
        <Header />
        <Navbar sidebarPage={props.state.sidebarPage} />
          <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile state={props.state} dispatch={props.dispatch} />} />
            <Route path="/dialogs" render={() => <Dialogs state={props.state} dispatch={props.dispatch} />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/musik" render={() => <Musik />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>
      </div>
  );
}

export default App;
