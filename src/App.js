import React from 'react'
import {useState} from 'react'
const App = () => {
  const[count, setCount]=useState(true);
  const[size, setSize]=useState(true);
  const[text, setText]=useState("Hello")
  const changeShape = () =>{
  setCount(!count);
  }
  const changeSize=() =>{
    setSize(!size);
  }
  const changeText=() =>{
    setText("hihi");
  }
  return (
    <div className="count">
      <button onClick={changeShape}>Change shape</button>
      <button onClick={changeSize}>Change Size</button>
      <button onClick={changeText}> Change text</button>
       
      <p style={{
        fontSize: size === true ? "40px" : "20px",
        background: "red",
        height: "50px",
        weight:"50px",
        textAlign: "center",
        borderRadius: count === true ? "300px" : "0px",}
      }>{text}</p>
   </div>
  )
}

export default App