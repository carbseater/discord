import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth,provider} from './firebase'

function Login() {
    const SignIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))
    }
    
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://cdn.worldvectorlogo.com/logos/discord-logo-color-wordmark-1.svg" alt=""/>
            </div>

            <Button onClick={SignIn}>Sign In</Button>
        </div>
    )
}

export default Login
