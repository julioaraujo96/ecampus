import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss'
import axios from 'axios';
import Helmet from 'react-helmet'


function Login() {

  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  const handleSubmit = async e => {

    e.preventDefault();
    setLoading(true)
    //console.log(email , password);

    axios.post('http://127.0.0.1:8080/login', {
      email: email,
      password: password
    })
    .then(function (res) {
      setLoading(false)
      if (res.data.Code === 200) {
        localStorage.setItem('Token', res.data.Token);
        localStorage.setItem('isAuthenticated', true);
        navigate('/')
      }
    })
    .catch(function (error) {
      setLoading(false)
      console.log(error);
    });
  }

  return (
    <div className={styles.Login}>
         <Helmet>
                <meta name="description" content="E-campus"/>
                <title>E-campus - Login</title>
            </Helmet>
      <div className="w-full max-w-xs">
      <div className={styles.ISMAIlogo}></div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email" v-model="form.email" type="email" required autofocus placeholder="Introduzir email" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Senha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="password" v-model="form.password" required type="password" placeholder="Introduzir palavra-passe" value={password} onChange={e => setPassword(e.target.value)} />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-between">
            {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Esqueceu-se da Password?
            </a> */}
            <button
              className="bg-terciary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Login
            </button>
            {isLoading ? <div className='bg-loading bg-cover bg-no-repeat bg-center w-[40px] h-[40px]'></div> : ''}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login