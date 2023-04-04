import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Board from './routes/Board';
import Profile from './routes/Profile';
import Header from './routes/Header';
import Error from './routes/Error';
import BoardDetail from './components/BoardDetail';

import PracticeRedux from './components/PracticeRedux';
import ListContainer from './components/ListContainer';
// practice react

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}></Route>
      <Route path="/board" element={<Board />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/board/:boardID" element={<BoardDetail />}></Route>
      <Route path="/test" element={<PracticeRedux />}></Route>
      <Route path="/todo" element={<ListContainer />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}
export default App;
