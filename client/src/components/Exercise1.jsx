const Exercise1 = () => {
  const helloStr = "Hello, First Exercise"

  return (
    <div style={{marginTop:"32px", backgroundColor:"skyblue"}} 
      onClick={() => { alert("클릭됨");}}> {helloStr} </div>
  )
}

export default Exercise1