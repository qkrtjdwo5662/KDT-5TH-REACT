import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Workspace from './testComponents/Workspace';
import WorkspaceComponent from './testComponents/WorkspaceComponent';
function App() {
  return (
    <>
      <Routes>
        <Route path="/workspace" element={<Workspace />}></Route>
        <Route path="/workspaceredux" element={<WorkspaceComponent />}></Route>
      </Routes>
    </>
  );
}
export default App;
