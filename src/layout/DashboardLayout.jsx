import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../contex/UserContext';
import axios from 'axios';

function DashboardLayout({ children }) {


    const { userData,isLoggedIn } = useContext(UserContext);
    console.log(isLoggedIn)
    const navigate = useNavigate();
        console.log(userData)
    let isLoaded = 0;
    
    useEffect(()=>{

        if(isLoggedIn){

        if(isLoaded==0 && !userData){
          
            navigate('/login')
        }
        else{
            console.log('dd')
            const token = localStorage.getItem('token')

            axios.defaults.headers.common["Authorization"] = `Bearer ${isLoggedIn}`;
        }

        isLoaded=1;
        }

    },[userData])
  return (
    <>
    <div className="grid grid-cols-6">

    <div className="col-span-2 p-6">
        {/* <Link to={'/user/dashboard'} className={`mx-4 p-2 ${window.location.pathname === '/user/dashboard' ? 'bg-blue-800 text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Dashboard</Link>
        <Link to={'/user/profile'} className={`mx-4 p-2 ${window.location.pathname === '/user/profile' ? 'bg-blue-800 text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Profile</Link> */}
    </div>

    <div className="col-span-4 p-6">
        {children}
    </div>


</div>
</>
  )
}

export default DashboardLayout