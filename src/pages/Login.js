import { useEffect ,useContext} from "react"
import { useNavigate } from "react-router-dom"
import React from "react"
import './login.css'
import { MyContext } from '../App';
const Login = () => {
    
    
    const {loginBtn, profileDiv ,setLoginBtn ,setProfileDiv,setNavBar} = useContext(MyContext)

    const navigate = useNavigate()
    const login=()=>{
        localStorage.setItem('login',true)
        navigate('/')
        setLoginBtn(false)
        setProfileDiv(true)
        setNavBar(true)
    }
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(login === "true") navigate('/')
    })
  return (
    <div className="login">
        <h1>Welcome!!</h1>
        <h1 className="title">Techno<span>Crats</span></h1>
        <h3 className="dashboardName">Dashboard</h3>  
        <button onClick={login} className="loginBtn">CEO Login</button>
    </div>
  )
}

export default Login