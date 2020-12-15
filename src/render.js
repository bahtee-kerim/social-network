import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, addPost, changeTextareaText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';



export const rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App state={state} addPost={addPost} addMessage={addMessage} changeTextareaText={changeTextareaText} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}