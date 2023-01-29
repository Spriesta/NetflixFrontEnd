import React from 'react'
import { Outlet } from 'react-router-dom';
import Login from '../pages/Login'
import Register from '../pages/Register'
import axios, { Axios } from "axios";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";

function TestLayout() {
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
    <div>                  
        <Outlet/>   
    </div>
  )
}

export default TestLayout