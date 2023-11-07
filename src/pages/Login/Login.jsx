import React, { useContext } from 'react'
import '../Login/index.css'
import { useLocation } from 'react-router-dom'
import Btn from '../../components/Btn';
import { MyContext } from '../../context/AppContext';

const Login = ({ setShowNav }) => {
    const { counter } = useContext(MyContext)
    const location = useLocation();
    if (location.pathname == "/Login") {
        setShowNav(false)
    }
    return (
        <>

            <div className="hero">
                <div className="form">
                    <div className="titleLogin">
                        <h1 className='titleSteam2'>STEAM MEDICAL</h1>
                        <p>Welcome back! Enter your details.</p>
                    </div>
                    <div className="information">
                        <label htmlFor="email">Email {counter}</label>
                        <input id='email' type="text" placeholder='Enter your email' />

                        <label htmlFor="password">Password</label>
                        <input id='password' type="password" placeholder='**********' />
                    </div>

                    <div className="remember">
                        <div className="reminder">
                            <input type="checkbox" name="" id="checkbox" />
                            <label className='rememberLabel' htmlFor="checkbox">Remember me</label>
                        </div>
                        <div className="forgotpasw">
                            <a href="">Forgot password</a>
                        </div>
                    </div>

                    <div className="botonesLogin">
                        <button className='btnSignIn'>Sign in</button>
                        <button className='btnSignGoogle'><img src="../public/iconGo.png" alt="" />Sign in with Google</button>
                        <Btn />
                    </div>

                    <div className="linkSignUp">
                        <p>Don't have an account? <a href="#">Sign up for free!</a> </p>
                    </div>

                </div>
                <div className="imgTeam">
                    <div className="containerImgDrs">
                        <img src="../public/drs.png" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login

