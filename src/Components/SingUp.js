import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Homepage.css";



function SingUp(props) {
    const [data , setData] = useState({
        name: '',
        email: '',
        password: '',
        pnumber: '',
        dob: '',
        image: ''
    })
    const handleChange = (event)=>{
        let data1 = {...data}
        data1[event.target["name"]]= event.target.value
        // console.log(data1)
        setData(data1)
    }
        // console.log(data)
        useEffect(()=>{
            setData({
                name: '',
                email: '',
                password: '',
                pnumber: '',
                dob: ''
            })
        },[])
  return (
    <div className="cointainer">
      <div className="image">

      </div>
      <div className="Singup">
        <h1 className="CreateHeading">Create New Profile</h1>
        <form onSubmit={(event)=>(props.handleSubmit(event,data,setData))}>
            <div className="profile-pic">
                <img src={props.image} alt="No Image Found" ></img>
                <input type="file" id="file" onChange={props.imageHandler}></input>
                <label htmlFor="file" id="btn">Profile Photo</label>
            </div>
          <div>
            <label className="Name">Name</label>
            <br />
            <input
            required
              className="Namefield"
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={(event)=>{handleChange(event)}}
            ></input>
            <br />
          </div>
          <div>
            <label className="Email">Email</label>
            <br />
            <input
            required
              className="Emailfield"
              type="text"
              id="email"
              name="email"
              value={data.email}
              onChange={(event)=>{handleChange(event)}}
            ></input>
            <br />
          </div>
          <div>
            <label className="Password">Password</label>
            <br />
            <input
            required
              className="Passwordfield"
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={(event)=>{handleChange(event)}}
            ></input>
            <br />
          </div>
          <div>
            <label className="pnumber">Phone Number</label>
            <br />
            <input
            required
              className="pnumberfield"
              type="number"
              id="pnumber"
              name="pnumber"
              value={data.pnumber}
              onChange={(event)=>{handleChange(event)}}
            ></input>
            <br />
          </div>
          <div>
            <label className="dob">DOB</label>
            <br />
            <input required className="dobfield" type="date" id="dob" name="dob" value={data.dob} onChange={(event)=>{handleChange(event)}}></input>
            <br />
          </div>

          <div>
            <button className="Submit" type="submit">Submit</button>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/login" style={{ marginTop: "40px" }}>
            Already Register Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SingUp;
