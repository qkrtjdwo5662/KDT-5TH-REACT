import React,{ useState } from 'react'

export default function StateProblem() {
  let [state, setState] = useState([0]);
  console.log(state);

  return (
    <div>
      {state.name}
      <br/>
      <button onClick={()=>{
        // state.name = "park";
        state[0] = 1
        setState(state);
        console.log(state);
      }}>
        1로 만들기
      </button>
    </div>
  )
}
