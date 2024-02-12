
import './App.css'
import { useState } from 'react';
function App() {

  const [color, setColor] = useState("orange");




  return (
    <>
      <div className="w-full h-screen duration-200 " style={{ backgroundColor: color }}>
        <div className='fixed flex  bottom-12 flex-wrap px-2 inset-x-0 justify-center gap-5 rounded-2 mr-5' style={{backgroundColor:'white',}}>
          <button className='rounded-l px-1 py-1 outline-none' style={{backgroundColor:"red"}} onClick={() => setColor("red")}>red</button>
          <button className='rounded-l' style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>blue</button>
          <button className='rounded-l' style={{backgroundColor:"yellow", color:"black"}} onClick={() => setColor("yellow")}>yellow</button>
          <button className='rounded-l' style={{backgroundColor:"olive"}} onClick={() => setColor("olive")}>olive</button>
          
        </div>


      </div>
    </>
  )
}

export default App
