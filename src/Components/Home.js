import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.jpg";
import "../Style/Navbar.css";


function Home({ setAuth,data1,email }) {
  const navigate = useNavigate();
  const [user,setUser] = useState({})
  const changeUrl = ()=>{
    navigate("/profile")
  }
  const handleSingout = () => {
    setAuth(false);
    setTimeout(() => {
      navigate("/home");
    });
  };
  useEffect(()=>{
    data1.map((item)=>{
        if(item.email == email){
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
    <div>
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "40px", marginTop: "28px" }}>
          <img style={{ width: "100%", height: "55%" }} src={logo}></img>
        </div>
        <div>
          <h3 className="logotext">LOGo</h3>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img style={{ width: "20%", height: "20%" }} src={user.img}></img>
          <button
            onClick={() => {
              handleSingout();
            }}
          >
            Singout
          </button>
          <button onClick={changeUrl}>My Profile</button>
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default Home;
