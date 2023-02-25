import React from 'react'
import { Outlet } from 'react-router-dom';
import Login from '../pages/Login'
import Register from '../pages/Register'
import axios, { Axios, isCancel } from "axios";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
import { FaSearch, FaUserCircle} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/netflix-icon.png';
import './HomeLayout.css';

function HomeLayout() {
    const navigate = useNavigate();

    useEffect(() => {  
        return async () => {
    
          let res = await axios.post(
            'https://localhost:44361/api/Auth/getAuth'
        );
    
        if (res.data === true) {
          navigate("/Test");
        }
        else{
          alert("yetkisiz giriş..!")
          navigate("/Register");

        }
      }
    }, [])

  return (
    <div className='container-fluid' id='homeBody'>

      <div className='row' id='navbar'>
          <div className='col text-center'>
            <img id='navbarLogo' src={logo} alt = '?'/>
          </div>
          <div className='col text-center'>Ana Sayfa</div>
          <div className='col text-center'>Filmler</div>
          <div className='col text-center'>Diziler</div>
          <div className='col text-center'>Yapım Yılı</div>
          <div className='col-3 text-end' id='navbarSearch'>
          <input id='navbarSearchText' type="text" name="searching" placeholder='Film veya Dizi ara..'/>
            <div id='navbarSearchIcon'><FaSearch id='navbarSearchBtn'/></div>
          </div>
          <div className='col-2 text-center'>
            <FaUserCircle style={{margin : "0px 8px 5px 0px", fontSize: "25px"}}/>
            Merhaba Ahmet !
          </div>
      </div>


    </div>
  )
}

export default HomeLayout