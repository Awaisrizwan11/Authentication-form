import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './login.css'
import swal from 'sweetalert'
function Login()
{

    const[username,setusername]= useState('')
    const[password,setpassword]= useState('')

function validate(event){
    event.preventDefault();
    if (username === 'awais' && password === '123') {
        swal('login successfilly','congratulations you are successfully Login','success')
    }
    else{
        swal('Error in login ','Retry again','error')
    }
}
    return <div>

     <div className = 'row justify-content-center'>
    
         <div className = 'col-md-4'>
         <h1>Authentication App</h1>
             <form onSubmit={validate}>
                 <input type='text' placeholder='Username' className='form-control' value ={username} 
                 onChange={(e)=>{setusername(e.target.value)}}/>

                 <input type='text' placeholder='password' className='form-control' value={password}
                 onChange={(e)=>{setpassword(e.target.value)}}/>
                 <br/>
                 <br/>
                 <button className ='btn btn-primary'>submit</button>
             </form>

         </div>

     </div>

        
        </div>
}
export default Login;

