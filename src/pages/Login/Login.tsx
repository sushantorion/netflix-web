import React from 'react'


function Login() {
  return (
   <section className='section'> 
   <div className=" main row justify-content-center">
   <div className='left col-3'>
     <img src= { require('../../assets/instaimag.jpeg')} />
    </div>
    <div className='right col-3'>
        <div className='login'>
        
          <form className='form'>
                <input  type="text"  placeholder='username or email'/>
                <input  type="password" placeholder='password'/>
                <button type="button"  className="btn btn-info">login</button>
              
          </form>
        </div>
     </div>
   </div>
   
   </section>
  )
}

export default Login
