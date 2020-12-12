import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebarPage} />
          <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile state={props.state.profilePage} />} />
            <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogPage} />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/musik" render={() => <Musik />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
