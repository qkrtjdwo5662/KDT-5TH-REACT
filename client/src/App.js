// import axios from "axios";
// import { useEffect } from "react";
import React from 'react';

import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import './App.css';

import Test from './components/Title'
import Login from './routes/Login';
import Register from './routes/Register';
import Error from './routes/Error';

import StateProblem from './components/StateProblem';
import StateAndVariable from './components/StateAndVariable';
import List from './components/List';
import PropsHeader from './components/PropsHeader';
import MultiProps from './components/MultiProps';
import ClassProps from './components/ClassProps';
import ListChild from './components/ListChild';
import MapExercise from './components/MapExercise';
import CustomList from './components/CustomList';
import CustomObj from './components/CustomObj';
import ChangeObj from './components/ChangeObj';
import Ex5 from './components/Ex5';

// practice react

function App() {
  const a = {
    name:1,
    age:2,
    nickName:3
  }
  const pororoObjArr = [
    {
      name: "뽀로로",
      age: "5",
      nickName: "사고뭉치",
    },
    {
      name: "루피",
      age: "4",
       nickName: "공주님",
    },
    {
      name: "크롱이",
      age: "5",
      nickName: "장난꾸러기",
    }, 
  ];
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter> */}
      <ChangeObj objArr={pororoObjArr}/>
    </div>
  );
}
export default App;
