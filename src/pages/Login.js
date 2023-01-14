import React from 'react'
import './Login.css';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import {useNavigate} from "react-router-dom"

function Login() {
    const navigate = useNavigate();

  return (
        <div>
           <div id='form'>
                <div id='textForm'>
                   <div>
                       <h3>Oturum Aç</h3>
                    </div>                       
                </div>

                <div id='inputs'>                    
                    <input className='input' type="" name="" defaultValue = "" placeholder='E-Posta'/>
                    <input className='input' type="" name="" defaultValue = "" placeholder = 'Parola'/>
              </div>
                    
                <div id='buttons'>
                    <button className='button' id='loginButton' type="">Oturum Aç</button>                    
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