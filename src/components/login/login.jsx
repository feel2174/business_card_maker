import React from 'react';
import styles from './login.module.css'

const Login = (props) => {
    const loginGoogle = () => {
        console.log('google');
    }
    const loginGithub =() => {
        console.log('github');
    }
    return (
        <div>
        <h1>Login</h1>
        <button className={styles.button} onClick={loginGoogle}>Google</button>
        <button className={styles.button} onClick={loginGithub}>Github</button>
        </div>
    )
}

export default Login;