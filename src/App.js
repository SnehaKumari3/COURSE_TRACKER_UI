import logo from './logo.svg';
import './App.css';
import Course from './components/Card/Course';
import HomePage from './components/Home/HomePage';
import Navbar from './components/Navbar/Navbar';
import Courses from './components/Courses/Courses';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Navbar/>
      <HomePage/>
      <Courses/>
      </div>
    </Provider>
  );
}

export default App;
