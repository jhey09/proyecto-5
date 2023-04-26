
import React, { useState } from 'react'
import axios from 'axios'
import "./signup.css"

const FormUser = () => {
     const [userData,setData] = useState()

     const saveUser = async() =>{
      const url = 'http://localhost:4000/api/v1/register'
      const result = await axios.post(url, userData)
      console.log(result)
     }
    
     const handleChange = (e) =>{
      const {name, value} = e.target
      setData({
        ...userData,
        [name]: value
      })
      console.log(setData)
     }


  return (
      <body className='bodyform'>
      <div className="container">
        <div className="content"> <h2>¡BIENVENIDOS!</h2>
        <i className='bx bxl-github'></i>
        </div>
        
        <div className="login">
        <form action="" className='form'> <h2> Registrate</h2>
          <div className="input-box">
            <span className='icon'><i className='bx bx-user-circle' ></i></span>
            <input type="text"  name='name' onChange={handleChange}/> <label> Nombre</label>
          </div>
          <div className="input-box">
            <span className='icon'><i className='bx bx-user-circle' ></i></span>
            <input type="text" placeholder='Apellido' name='lastname' onChange={handleChange}/> <label> Apellido</label>
          </div>
          <div className="input-box">
            <span className='icon'><i className='bx bx-user' ></i></span>
            <input type="text"  name='username' onChange={handleChange}/> <label> Usuario</label>
          </div>
          <div className="input-box">
            <span className='icon'><i className='bx bxl-gmail'></i></span>
            <input type="email"  name='email' onChange={handleChange}/> <label> Email</label>
          </div>
          <div className="input-box">
            <span className='icon'><i className='bx bxs-lock' ></i></span>
            <input type="password"  name='password' onChange={handleChange}/> <label> password</label>
          </div>
          <button className='boton' onClick={()=> saveUser()}>Enviar</button>
        </form>
        
        </div>
      </div>
    </body>
  )
}

export default FormUser


