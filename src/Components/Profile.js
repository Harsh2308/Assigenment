import React, { useEffect, useState } from 'react'

function Profile(props) {
    const [user, setUser] = useState({})
    useEffect(()=>{
        props.data1.map((item)=>{
            if(item.email === props.email){
                let obj = {}
                obj.name = item.name
                obj.email = item.email
                obj.dob = item.dob
                obj.pnumber = item.pnumber
                setUser(obj)
            }
        })
    },[])
  return (
    <div style={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
        <img src={user && user.image} alt="Not Found"></img>
        <label>Name:</label>
        {user && user.name}
        <label>Mobile No:  </label>
        {user && user.pnumber}
        <label>Email:  </label>
        {user && user.email}
        <label>DOB:  </label>
        {user && user.dob}

    </div>
  )
}

export default Profile