// import axios from "axios";
// import { useEffect } from "react";

import './App.css';



// practice react
// import ClassState from './components/ClassState';
import StateAndVariable from './components/StateAndVariable';

// react + express

function App() {
  // const callApi = async()=>{
  //   axios.get("/api").then((res)=>{console.log(res.data.test)});
  // };

  // useEffect(()=>{
  //   callApi();
  // }, []);
  return (
    <div className="App">
      <StateAndVariable />
    </div>
  );
}
export default App;
