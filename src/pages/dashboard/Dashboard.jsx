import React, { useContext } from 'react'
import Layout from '../../layout/Layout'
import { Tabs } from 'react-daisyui'
import { UserContext } from '../../contex/UserContext';
import DashboardLayout from '../../layout/DashboardLayout';
import axios from 'axios';


function Dashboard() {
  const { userData } = useContext(UserContext); 
  

  

  return (
    <Layout>
         
                    
                    <DashboardLayout>
                    <div>
                       <h3>Hello, {userData?.data.name}</h3>
                      <p>Email: {userData?.data.email}</p>
                      <p>Phone: {userData?.data.phone}</p>  
                    </div>
                    </DashboardLayout>
  
        
        
    </Layout>
  )
}

export default Dashboard