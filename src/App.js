import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    
      <div className="app-wrapper">
        <Header />
        <Navbar store={props.store} />
          <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/musik" render={() => <Musik />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>
      </div>
  );
}

export default App;
