import React,{useState,useEffect,createContext} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import  Login  from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import './App.css'


const MyContext = createContext();


function App() {
  const [loginBtn, setLoginBtn] = useState(true)
  const [profileDiv , setProfileDiv] = useState(false)
  const [navBar , setNavBar] = useState(false)

  useEffect(() => {
    return () => {
      window.onload = ()=>{
        localStorage.removeItem("login")
      }
    };
  }, [])
  const states = {
    loginBtn : loginBtn,
    setLoginBtn:setLoginBtn,
    profileDiv:profileDiv,
    setProfileDiv:setProfileDiv,
    setNavBar:setNavBar
  }
  return (
    <div className="App">
        <Router>
             <MyContext.Provider value={states}>
                {navBar && <Navbar/>} 
                {/* <Navbar/> */}
             </MyContext.Provider>
             
             
             
             <Routes>  
                 <Route path="/" element={<Protected Component = {Dashboard}/>}></Route>

                 <Route path='/login' element={<MyContext.Provider value={states}><Login/></MyContext.Provider>}></Route>
            </Routes>
            {/* <Dashboard/>   */}
        </Router>
    </div>
  );
} 

export default App;

export {MyContext}