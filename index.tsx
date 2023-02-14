import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import App from './App'; BEFORE

//NEW:
import {App} from './App';
import AppClassComponent from './app-class-component'; //No parentethis because of the default method
import ToDoList from './todo-list-component'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
   
    <AppClassComponent/>
    <br />
    <ToDoList/>
    
  </StrictMode>
);


// <App background='#d2d2d2'/>
