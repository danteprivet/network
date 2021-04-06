import React from 'react';
import Header from './components/Header/Header.jsx';
import Nav_bar from './components/Nav-bar/Nav-bar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
const  App = (props) => {

  return (
    <div className="app-wrapper">
       <Header />
       <Nav_bar />
       <div className="app-wrapper-content">
         <Route path='/dialogs'render = { () => <Dialogs state={props.state.dialogsPage} />} />
         <Route path='/profile' render = { () => <Profile state={props.state.profilePage} addPost={props.addPost} />} />
         <Route path='/news' component={News} />
         <Route path='/music' component={Music} />
         <Route path='/settings' component={Settings} />
       </div>
    </div>
  );
}

export default App;
