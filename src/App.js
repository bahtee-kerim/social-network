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
    
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebarPage} />
          <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}
                                                          addPost={props.addPost}
                                                          changeTextareaText={props.changeTextareaText}/>} />
            <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogPage} 
                                                          addMessage={props.addMessage} />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/musik" render={() => <Musik />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>
      </div>
  );
}

export default App;
