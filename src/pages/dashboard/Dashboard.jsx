import React, { useContext } from 'react'
import Layout from '../../layout/Layout'
import { Tabs } from 'react-daisyui'
import { UserContext } from '../../contex/UserContext';
import DashboardLayout from '../../layout/DashboardLayout';
import axios from 'axios';


function Dashboard() {
  // const { userData } = useContext(UserContext); 

  const token = localStorage.getItem('token')

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return (
    <Layout>
         
                    
                    <div>
                      {/* <h3>Hello, {userData?.name}</h3>
                      <p>Email: {userData?.email}</p>
                      <p>Phone: {userData?.phone}</p> */} gghg
                    </div>
  
        
        
    </Layout>
  )
}

export default Dashboard