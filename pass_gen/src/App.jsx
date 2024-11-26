import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

function App() {
  const [pass, setpass] = useState('')
  const [length, setlenght] = useState(5)
  const [specials, setspecials] = useState(false)
  const [nums, setnums] = useState(false)

  let pass_generator=useCallback(()=>{
    let pasw=""
    let sec="ABCDEFGHTIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(nums)sec+="1234567890"
    if(specials)sec+="~`!@#$%^&*()";

    for(let i=0;i<length;i++){
      pasw+=sec[Math.floor(Math.random()*sec.length)];
    }
    setpass(pasw);
    





  },[length,specials,nums,setpass])

  useEffect(()=>
    pass_generator(),
  [length,specials,nums,setpass])





  return (
    <div style={{
      display:"flex",
      // backgroundColor:"#000",
      
      justifyContent:"center",
      height:"80vh",
      width:"80vw",
      position:"absolute",
    }}>
      <div style={{
        height: 'fit-content',
        width:"30vw",
        borderRadius:"20px",
        padding:"2vh",
        background: 'linear-gradient(135deg, #2c3e50, #4ca1af)',
        boxShadow: "0 13px 13px rgba(0, 0, 0, 0.4)",
        position:"relative",
        top:"10rem"
        // left:"10rem"

      }}>
        <h1 style={{
          fontSize:"3vh",
          color:"pink",
          marginLeft:'9rem'
        }}>Pass generator</h1>

        <input type="text" placeholder='passinng....'
        value={pass}
       
        style={{
          borderRadius:"20px",
          // boxShadow:"50px",
          height:"4vh",
          width:"80%",
          fontSize:"2.6vh",
          padding:".5vh"

        }} />
        <br />

        <input type="checkbox" 
        value={specials}
         style={{
          width: "15px",
          height: "15px",
          margin: "10px"
        }} 
        
        id='numbers'
        onChange={()=>setnums(pre=>!pre)}
         />
         <label htmlFor="numbers" style={{ marginLeft: "5px",fontSize:'2.5vh', color:"orange"    }}>Numbers...</label>

         <input type="checkbox"
         checked={specials} 
         style={{
          width: "15px",
          height: "15px",
          margin: "10px",
          marginLeft:'1.5vh'
        }} 
        
        id='specials'
        onChange={()=>setspecials(pre=>!pre)}
         />
         <label htmlFor="specials" style={{ marginLeft: "5px", fontSize:'2.5vh', color:"orange"  }}>specialss..</label>
         <br />

         <label htmlFor="length" style={{ marginLeft: "5px", fontSize:'4vh'  }}>Length :{Math.floor(length)}</label>
      <input type="range" 
       min='5'
       max='30'
       value={length}
       step='01'
       onChange={(e)=>setlenght(Number(e.target.value))}
       style={{
        width:'80%'
       }}
      id="length" />
      


      </div>

      
    </div>
  )
}

export default App
