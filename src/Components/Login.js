import React, { useEffect, useState } from 'react'
import { Link  } from 'react-router-dom'
import "../Style/Homepage.css"

function Login(props) {
  const [emailDulicate,setEmailDuplicate] = useState("")
  const [passwordDulicate,setPasswordDuplicate] = useState("")


//   useEffect(()=>{
//     setEmailDuplicate('')
// },[])
// useEffect(()=>{
//   setPasswordDuplicate('')
// },[])



  
  return (
    <div className='cointainer'>
    <div className='image'>

    </div>
    <div className='Login'>
        <p className='subHeading'>Welcome back</p>
        <h2 className='Heading'>Login to your account</h2>
          <form onSubmit={(event)=>{
            props.handleSubmitlogin(event,emailDulicate,passwordDulicate,setEmailDuplicate,setPasswordDuplicate)
          }}>
          <div>
            <label className='Email'>Email</label><br />
            <input required className='Emailfield' type="text" id="email" name="email" onChange={(e)=>{
              setEmailDuplicate(e.target.value)
            }}></input><br />
          </div>
          <div>
            <label className='Password'>Password</label><br />
            <input required className='Passwordfield' type="password" id="password" name="password" onChange={(e)=>{
              setPasswordDuplicate(e.target.value)
            }}></input><br />
          </div>
          <div>
            <button className='Submit' type='submit'>Submit</button>
          </div>
          <div style={{display:"flex",alignItems:"center"}}>
          <Link to="/singUp" style={{marginTop:"40px"}}>Dont have an account? Register</Link>
          </div>
          </form>
        
        

    </div>
    </div>
  )
}

export default Login