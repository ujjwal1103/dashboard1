import React,{useState,useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'

// import profile from '../assets/profile.jpg'
// import {HomeOutlined,OndemandVideoOutlined,StorefrontOutlined,PeopleOutlineOutlined,WidgetsOutlined,SearchOutlined,AddOutlined,MessageRounded,NotificationsActiveRounded,ArrowDropDown} from '@mui/icons-material';
import './navbar.css'
import { MyContext } from '../App';

const Navbar = () => {



  const {loginBtn, profileDiv ,setLoginBtn ,setProfileDiv,setNavBar} = useContext(MyContext)
  const naviagte = useNavigate()
  

  let logout = ()=>{ 
    localStorage.clear()
    // props.login("Login")
    setLoginBtn(true)
    setProfileDiv(false)
    setNavBar(false)
    naviagte('/login')
  }
  
  
 
  return (
    <div className='navbar'>
         <div className="navbarLeft">
            <h2>Techno<span>Crads</span></h2>
         </div>
          <ul className="navbarList">
            <li className='navbarItem'><Link to="/" className='link'>Dashboard</Link></li>
            {loginBtn && <li className='navbarItem'><Link to="/login" className='link'>CEO Login</Link></li>}
          </ul>
            {profileDiv && <div className="navbarProfile">
                
                <span className='navbarProfileName'>Ujjwal</span>
                <span className="showLogout"><button onClick={logout}>Logout</button></span>
            </div>}
    </div>
  )
}

export default Navbar
