import React from 'react'
import Login from '../pages/Login'
import Register from '../pages/Register'
import './LoginLayout.css';
import logo from '../assets/netflix-icon.png';
import { Outlet } from 'react-router-dom';
import axios, { Axios } from "axios";
import {useNavigate} from "react-router-dom"

import { useEffect } from "react";

function LoginLayout() {
  const navigate = useNavigate();

  return (
    <div>
        <div id='mainContainer'>
            <div id='header'>
                <img id='logo' src={logo} alt = '?'/>
            </div>
            
            <div id='body'>
              <Outlet/>
            </div>

            <div id='footer'>
                <div id='desc'>
                  <div id='descTelNo'>
                        <h4>Sorularınız mı var? 0850-390-7444 numaralı telefonu arayın</h4> 
                  </div>
                  <div id='SSS'>
                    <h6>SSS</h6>
                    <h6>SSS</h6>
                    <h6>SSS</h6>
                    <h6>SSS</h6>
                  </div>
                </div>                  
            </div>
        </div>
    </div>
  )
}

export default LoginLayout