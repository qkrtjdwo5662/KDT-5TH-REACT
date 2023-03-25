import axios from "axios";
import { useEffect } from "react";

import './App.css';

import Title from './components/Title';
import Form from './components/Form';
function App() {
  const callApi = async()=>{
    axios.get("/api").then((res)=>{console.log(res.data.test)});
  };

  useEffect(()=>{
    callApi();
  }, []);

  return (
    <div className="App">
      <Title />
    </div>
      
  );
}
export default App;
