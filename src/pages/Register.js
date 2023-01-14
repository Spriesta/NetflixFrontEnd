import React from 'react'
import './Register.css';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import {useNavigate} from "react-router-dom"

function Register () {
  const navigate = useNavigate();
  return (
        <div>
           <div id='form'>
                <div id='textForm2'>
                   <div>
                       <h3>Kayıt Ol</h3>
                    </div>                       
                </div>

                <div id='inputs'>                    
                    <input className='input' type="" name="" defaultValue = "" placeholder='E-Posta'/>
                    <input className='input' type="" name="" defaultValue = "" placeholder = 'Parola'/>
              </div>
                    
                <div id='buttons'>
                    <button className='button' id='registerButton' type="">Kayıt Ol</button>
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