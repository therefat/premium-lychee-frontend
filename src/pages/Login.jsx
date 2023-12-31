import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { UserContext } from '../contex/UserContext';

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [newUsers,setUsers] = useState()

  const [error, setError] = useState(null);
  const {setUserData,setIsLoggedIn} = useContext(UserContext)
  const hisotoyr = useNavigate()
  const submitForm = (e) => {
    e.preventDefault(e);
    axios.post('http://localhost:8080/auth/login',{
        email : email,
        password : password
    })
    .then(response => {
        console.log(response)
        const token_decode = jwtDecode(response.data.token) 
        setUserData(token_decode)
        setIsLoggedIn(response.data.LoggedIn)
        hisotoyr('/')
      localStorage.setItem('token',response.data.token)
    //   axios.defaults.headers.common= 'Bearer' + response.data.token 
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
    })
    .catch(error => {
        
        console.log(error.response)
        if(error.response.status == 422){
            setError(error.response.data.errors)
        }
        else{
            setError(error.response.data)
        }
        
    })
  }
  
  return (
    <Layout>
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
                        {error && <p className="text-red-700">{error.password}</p>}
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
    </Layout>
  )
}

export default Login