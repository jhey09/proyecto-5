
import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import "./signup.css"

const Loginuser = () => {
  const [userData, setUserData] = useState({})

  const url = 'http://localhost:4000/api/v1/auth/login'
  const url2 = 'http://localhost:4000/api/v1/users/me'
  const navigation = useNavigate()

    const handleSubmit = ()=>{
     console.log(userData)

     axios.post( url, userData)
     .then(res=>{
        console.log(res.data)
        return(
            axios.get(url2,{
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    Authorization : `Bearer ${res.data.token}`
                }
            }).then( response =>{
                console.log(response.data)
                setUserData(response.data)
                navigation('/profile')
            })
        )
     })
    }

    const handleChange = (e) =>{
       const {name, value} = e.target
      setUserData({
        ...userData,
        [name]: value
       }) 
       console.log(userData)
    }

  

  return (
    <div className='bodyform'>
      <div className="containerform">
        <div className="login">
        <form action="" className='form'> <h2> LOGIN</h2>
          <div className="input-box">
            <span className='icon'><i className='bx bxl-gmail'></i></span>
            <input type="email" name="email" onChange={handleChange}/> <label> Email</label>
          </div>
          <div className="input-box">
            <span className='icon'><i className='bx bxs-lock' ></i></span>
            <input type="password" name="password" onChange={handleChange}/> <label> password</label>
          </div>
          <button type='submit'  className='boton' onClick={()=> handleSubmit()}>Sign up</button>
        </form>
        
        </div>
      </div>
    </div>
  )
}

export default Loginuser
