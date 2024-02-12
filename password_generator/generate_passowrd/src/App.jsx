import { useState, useEffect ,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] =useState(false);
  const [symbolAllowed, setSymbolAllowed] =useState(false);
  const [password,setPassword]= useState("")

  const passref=useRef(null);

  const copyClipboard=()=>{
    passref.current?.select();
    window.navigator.clipboard.writeText(password)
  }

  const passwordGenrator=()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqerstuwxyz";
    if(numberAllowed==true) {
      str+="123456789";
    }
    if(symbolAllowed==true) {
      str+="!@#$%^&*()-?></";
    }
    
    for(let i=0;i<length;i++){
      let char= Math.floor(Math.random()*str.length+1);
      pass +=str.charAt(char);
    }
    setPassword(pass)
  }
 useEffect(()=>{
  passwordGenrator()

 },[length,numberAllowed,symbolAllowed])

  return (
    <>
      <div id='Container'>
        <h1>Password generator</h1>
        <div>
          <input className='display' type="text" readOnly value={password} ref={passref} />
          <button onClick={copyClipboard}>Copy</button>
        </div>
        <div className='option'>
          <input type="range" min={6} max={20} value={length} onChange={(e)=> setLength(e.target.value)}  />
          <label htmlFor="">Length: {length}</label>

          <input type="checkbox" value={numberAllowed} onChange={()=> setnumberAllowed(prev=>!prev)} />
          <label htmlFor="">Number</label>
          <input type="checkbox" value={symbolAllowed} onChange={()=> setSymbolAllowed(prev=>!prev)} />
          <label htmlFor="">Symbol</label>

        </div>
      </div>

    </>
  )
}

export default App
