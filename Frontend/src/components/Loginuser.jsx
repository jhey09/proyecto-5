
import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import "./signup.css"

const Loginuser = () => {
  const [loginUser, setLoginUser] = useState()
  const { userData, setUserData } = useContext(UserContext)

  const url = 'http://localhost:4002/api/v1/auth/login'
  const url2 = 'http://localhost:4002/api/v1/user/me'
  const navigation = useNavigate()

  const handleSubmit = async () => {
    console.log(loginUser)
    axios.post(url, loginUser)
      .then(res => {
        console.log(res.data)
        return (
          axios.get(url2, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${res.data.token}`
            }
          }).then(response => {
            console.log(response.data)
            setUserData(response.data)
            navigation('/profile')
          })
        )
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginUser({
      ...loginUser,
      [name]: value
    })
    console.log(loginUser)
  }

  useEffect(() => {
    if (Object.keys(userData).length !== 0) {
      navigation('/profile')
    }
  }, []);

  return (
    <body className='bodyform'>
      <div className="containerform">
        <div className="login">
        <form action="" className='form'> <h2> LOGIN</h2>
          <div className="input-box">
            <span className='icon'><i className='bx bxl-gmail'></i></span>
            <input type="email" onChange={handleChange}/> <label> Email</label>
          </div>
          <div className="input-box">
            <span className='icon'><i className='bx bxs-lock' ></i></span>
            <input type="password" onChange={handleChange}/> <label> password</label>
          </div>
          <button type='submit'  className='boton' onClick={()=> handleSubmit()}>Sign up</button>
        </form>
        
        </div>
      </div>
    </body>
  )
}

export default Loginuser
