import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/Login";
import SingUp from "./Components/SingUp";
import image1 from "./Images/profile.jpg"
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Components/Profile";

function App() {
  const navigate = useNavigate();
  const [image,setImage]=useState(`${image1}`)
  const [auth,setAuth] = useState(false)
  const [email,setEmail] = useState(" ")
    const [data1 , setData1] = useState([])
    const imageHandler = (e)=>{
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    const handleSubmitlogin = (event,emailDulicate,passwordDulicate,setEmailDuplicate,setPasswordDuplicate) =>{
      console.log(emailDulicate,passwordDulicate)
      event.preventDefault()
      data1.map((item,index)=>{
        if(item.email == emailDulicate){
          if(item.password == passwordDulicate){
            setAuth(true)
            setEmail(item.email)
            setTimeout(() => {
              navigate("/home")
            }, );
          }else{
            alert("user Not Found")
        }
          }else{
            alert("user Not Found")
        }
      })
    
      setTimeout(() => {
        setEmailDuplicate('')
        setPasswordDuplicate('')
      });
    }

    const handleSubmit = (event,data,setData)=>{
        event.preventDefault()
        let data2 = [...data1]
        let obj = data
        data2.push(obj)
        setData1(data2)
        alert("User Added")
        setTimeout(() => {
          setData({
            name: '',
            email: '',
            password: '',
            pnumber: '',
            dob: ''
        })
        });
        
    }
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Login />}></Route>
      <Route path="/singUp" element={<SingUp image={image} imageHandler={imageHandler} handleSubmit={handleSubmit}/>}></Route>
      <Route path="/login" element={<Login data1={data1} setAuth={setAuth} email={email} handleSubmitlogin={handleSubmitlogin} />}></Route>
      <Route path='/home' element={<PrivateRoute setAuth={setAuth} auth={auth} email={email} data1={data1}/>}/>
      <Route path="/profile" element={<Profile data1={data1} email={email} />}/>
     </Routes>
    </div>
  );
}

export default App;
