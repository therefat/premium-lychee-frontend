import React, { useState } from 'react'
import Layout from './layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignUp() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState()
    const [Cpassword,setCPassword] = useState()
    const [newUsers,setUsers] = useState()
    const [error, setError] = useState(null);
    const hisotoyr = useNavigate()
    const submitForm = (e) => {
        e.preventDefault(e);
        axios.post('register',{
            name: name,
            email: email,
            password: password,
            c_password : Cpassword,
        })
        .then(response => {
            setUsers(response)
            // hisotoyr('/login')
            console.log(response)

        })
        .catch((error) => {
           
            setError(error.response.data.errors)
            console.log(error)
            
        })
    }
  return (
    <Layout>
         <div>
        <div>SignUp</div>
        <div className="relative flex  flex-col  justify-center  overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700">SignUp</h1>
            <form className="space-y-4" method="post" onSubmit={(e) => submitForm(e)}>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Name</span>
                    </label>
                    <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full input input-bordered input-primary" />
                    {error && <p className="text-red-700">{error.name}</p>}
                </div>
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
                    <label className="label">
                        <span className="text-base label-text">Confirm Password</span>
                    </label>
                    <input type="password" value={Cpassword} name="Confirmpassword" onChange={(e) => setCPassword(e.target.value)}  placeholder="Enter Password"
                        className="w-full input input-bordered input-primary" />
                        {error && <p className="text-red-700">{error.password}</p>}
                </div>
                
                <div>
                    <button className="btn btn-block btn-primary">Sign Up</button>
                </div>
                
                <span>Already have an account ?
                    <Link to={'/login'} href="#" className="text-blue-600 hover:text-blue-800 ">Login</Link></span>
            </form>
        </div>
    </div>
      </div>
    </Layout>
  )
}

export default SignUp