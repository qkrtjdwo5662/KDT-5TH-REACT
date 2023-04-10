import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Workspace from './testComponents/Workspace';
function App() {
  return (
    <>
      <Routes>
        <Route path="/workspace" element={<Workspace />}></Route>
      </Routes>
    </>
  );
}
export default App;
