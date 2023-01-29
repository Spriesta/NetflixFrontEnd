import React from 'react'
import './Login.css';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import {useNavigate} from "react-router-dom"
import axios, { Axios } from "axios";
import { useState } from "react";
import Test from '../pages/Test';

function Login() {
    const navigate = useNavigate();

    const [form, setFormElements] = useState({email:"", password: ""});
    const handleChanges = (e) => {
        setFormElements({...form, [e.target.name]: e.target.value})
    }

    async function ActLogin() {
        let res = await axios.post(
            'https://localhost:44361/api/Login/ActLogin',
            {
                email: form.email,
                password: form.password
            }            
        );

        if (res.data.success === false) {
            alert(res.data.data)
            return;
        }
        else{
            navigate("/Test");

            //yeni sayfaya navigate et
        }
    }

  return (
        <div>
           <div id='form'>
                <div id='textForm'>
                   <div>
                       <h3>Oturum Aç</h3>
                    </div>                       
                </div>

                <div id='inputs'>                    
                    <input className='input' type="" name="email" placeholder='E-Posta' onChange={handleChanges}/>
                    <input className='input' type="" name="password" placeholder = 'Parola' onChange={handleChanges}/>
              </div>
                    
                <div id='buttons'>
                    <button onClick={ActLogin} className='button' id='loginButton' type="">Oturum Aç</button>                    
                    <a onClick={()=> navigate("/Register")}><button className='button' id='registerButton' type="">Kayıt Ol</button></a>

                </div>

                <div className="social">                    
                    <div className="go"> <FaGoogle id='google'/> Google</div>
                    <div className="fb"><FaFacebookSquare id='face'/> Facebook</div>
                </div>
            </div>
        </div>
    )
}

export default Login