function EventHandler() {
  function alertFunc(){
    alert("클릭됨");
  }
  return(
    <div>
      <div onClick={() => {alert('클릭 됨!');}}>클릭해봐라</div>
      <br />
      <div onClick={alertFunc}>클릭해봐라2</div>
      <br />
      {/* <div onClick={() => { let num =10; num +=5; console.log(num)}}></div> */}
    </div>
    
  )
}

export default EventHandler;