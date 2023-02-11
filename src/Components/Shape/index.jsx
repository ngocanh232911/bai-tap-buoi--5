import React, { useState } from 'react'

const Shape = () => {
  const [changeShape, setChangeShape, changeText, changeSize] =useState(true);
  const Form = ( )=>{
    setChangeShape(!changeShape,!changeText,!changeSize);
  }
  return (
    <div>
      <button onClick={Form}>Change Shape</button>
      <b tton onClick={Form}> Change text</button>
      <button onclick={Form}> Change size</button>
      <p
        style={{
        fontSize: changeSize === false ? "100px": "20px",
        text:changeText=== true? "HIHIHI": "HEHE",
        background: "red",
        height: "100px",
        weight:"100px",
        textAlign: "center",
        borderRadius: changeShape === true ? "100px" : "0px",}
      }> Hello</p> 
    </div>
  )
}button onClick={changeSize}>Change size</button>
<button onClick={changeText}>Change text</button>

export default Shape;