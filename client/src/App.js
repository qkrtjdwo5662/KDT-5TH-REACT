// import axios from "axios";
// import { useEffect } from "react";
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './routes/Login';
import Error from './routes/Error';
import Register from './routes/Register';
import LoginSuccess from './routes/LoginSuccess';
import LoginFail from './routes/LoginFail';
import ConditionalState from './components/ConditionalState';
import Practice from './components/Practice';
import Test from './components/Test';
import TestUseEffect from './components/TestUseEffect';
import Timer from './components/Timer';
import TimerRender from './components/TimerRender';
import PracticeTimerRender from './components/PracticeTimerRender';
// practice react

function App() {
  const USER = [
    {
      ID: 'qkrtjdwo5662',
      PASSWORD: '1111',
    },
    {
      ID: 'psjj03',
      PASSWORD: '1111',
    },
  ];

  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login USER={USER} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<LoginSuccess />} />
          <Route path="/fail" element={<LoginFail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter> */}
      <PracticeTimerRender />
    </div>
  );
}
export default App;
