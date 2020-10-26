import React from 'react';
import styles from './login.module.css'


const Login = () => {
    return (
        <div>
        <h1>Login</h1>
        <button className={styles.button} >Google</button>
        <button className={styles.button} >Github</button>
        </div>
    )
}

export default Login;