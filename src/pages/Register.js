import React from 'react'
import './Register.css';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import axios, { Axios } from "axios";
import {json, useNavigate} from "react-router-dom"
import { useState } from "react";

function Register () {
    const navigate = useNavigate();

    const [form, setFormElements] = useState({email:"", password: ""});
    const handleChanges = (e) => {
        setFormElements({...form, [e.target.name]: e.target.value})
    }

    async function ActRegister() {
        let res = await axios.post(
            'https://localhost:44361/api/Register/ActRegister',
            {
                email: form.email,
                password: form.password
            }            
        );
        
        if (res == null || res.data.success === false) {
            alert("Başarısız..!")
        }
        else{
            alert("Başarılı..!")
        }
    } 

  return (
        <div>
           <div id='form'>
                <div id='textForm2'>
                   <div>
                       <h3>Kayıt Ol</h3>
                    </div>                       
                </div>

                <div id='inputs'>                    
                    <input className='input' type="" name="email"  placeholder='E-Posta' onChange={handleChanges}/>
                    <input className='input' type="password" name="password"  placeholder = 'Parola' onChange={handleChanges}/>
              </div>
                    
                <div id='buttons'>
                    <button className='button' id='registerButton' type="" onClick={ActRegister} >Kayıt Ol</button>
                </div>

                <div className="social">                    
                    <div className="go"> <FaGoogle id='google'/> Google</div>
                    <div className="fb"><FaFacebookSquare id='face'/> Facebook</div>
                </div>

                <div id='returnLogin'>
                    <div id='returnTexts'>
                       <h6>Zaten Hesabınız Var mı ?</h6>
                        <h4 id='returnEntry' onClick={() => navigate("/")}>Şimdi Giriş Yap.</h4>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Register