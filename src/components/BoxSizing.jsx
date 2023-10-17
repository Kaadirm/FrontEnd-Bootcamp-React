import React, {useState} from 'react'

function BoxSizing() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [inputWidth, setinputWidth] = useState();
  const [inputHeight, setinputHeight] = useState();
  

  const change = () => {
    setWidth(parseInt(inputWidth));
    setHeight(parseInt(inputHeight));
  }

    return (
    <>
      <div style={{width: "100vw", display: "flex", flexDirection: "column", gap:"1rem"}}>
        <div style={{display: "flex", gap:"0.5rem", justifyContent:"center"}}>
          <label htmlFor="">Width</label>
          <input type="number" placeholder='200' onChange={(e) => setinputWidth(e.target.value)}></input>
          <label htmlFor="">Height</label>
          <input type="number" placeholder='200' onChange={(e) => setinputHeight(e.target.value)}></input>
          <button onClick={change}>Change</button>
        </div>
        <div style={{display: "flex", justifyContent:"center"}}>
          <div style={{ width: width, height: height, border: "1px solid red" }}>
          </div>
        </div>
      </div>

    </>
  )
}

export default BoxSizing