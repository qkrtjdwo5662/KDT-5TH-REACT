// import axios from "axios";
// import { useEffect } from "react";
import React from 'react';

import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import './App.css';
// import LoginForm from './routes/LoginForm';
import Test from './components/Title'
import Login from './routes/Login';
import Register from './routes/Register';
import Error from './routes/Error';



// practice react

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Test/>}></Route>

          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
        {/* <Test/> */}
    </div>
  );
}
export default App;
