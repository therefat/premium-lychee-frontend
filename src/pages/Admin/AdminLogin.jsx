import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/context/UserContext';

function AdminLogin() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState(null);
    const {userData,setUserData,updateUserData,setIsLoggedIn} = useContext(UserContext)
    console.log(error)
    const hisotoyr = useNavigate()
    const submitForm = (e) => {
      e.preventDefault(e);
      axios.post('admin/login',{
          email : email,
          password : password
      })
      .then(response => {
          console.log(response.data)
        //   const token_decode = jwtDecode(response.data.token) 
       
         
          localStorage.setItem('user', JSON.stringify(response.data));
          console.log(localStorage.getItem('token'));
          updateUserData(response.data)
        // hisotoyr('/')
      //   axios.defaults.headers.common= 'Bearer' + response.data.token 
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
      })
      .catch(error => {
        //   console.log(error)
         
         
              setError(error.response?.data.message)
          
          
      })
    }
  return (
    <>
         <div>
        <div className="relative flex  flex-col  justify-center pt-5 overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700">Login</h1>
            <form className="space-y-4" method="post" onSubmit={(e) => submitForm(e)}>
                
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="text" value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full input input-bordered input-primary" />
                    {error && <p className="text-red-700">{error.email}</p>}
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)}  placeholder="Enter Password"
                        className="w-full input input-bordered input-primary" />
                        {error && <p className="text-red-700">{error}</p>}
                </div>
                
                <div>
                    <button className="btn btn-block btn-primary">Login</button>
                    {error?.errors && <p className="text-red-700">{error?.errors}</p>}
                </div>
                <span>Don't have an account? ?
                    <Link href="#" to={'/signup'} className="text-blue-600 hover:text-blue-800 ">Create one</Link></span>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default AdminLogin