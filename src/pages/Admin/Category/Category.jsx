import React, { useEffect, useState } from 'react'
import AdminDashboardLayout from '../../layout/AdminDashboardLayout'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Category() {
    const [productData,setProductData] = useState([])
  useEffect(() => {
    axios.get('/admin/categories') 
    .then((response) => {
      // console.log(data) 
      setProductData(response.data)
    })
   .catch(error => {
    console.log(error)
   })
  },[] ) 

  const handleDelete = (id) =>{
    const token = JSON.parse(localStorage.getItem('user'));
    axios.delete(`/admin/categories/${id}`,{
      headers : {
        Authorization: token?.token
      }
    })
    .then((response) => {
      console.log(response); 
      // setProductData([])
    })
    .catch((err) => {
      console.log(err);
    }); 

  }
  return (
    <AdminDashboardLayout>
        <div>
            <div className='flex justify-between '>
                <div><h1>Category</h1></div>
                <div>
                    <Link to="/admin/addcategory">Add Category</Link>
                </div>
            </div>
            <div>
            <table class="table-fixed border-collapse border border-slate-400 ">
  <thead>
    <tr>
      <th className='border-collapse border border-slate-400 '>ID</th>
      <th className='border-collapse border border-slate-400 '>Name</th>
      <th className='border-collapse border border-slate-400 '>Description</th>
      <th className='border-collapse border border-slate-400 '>Status</th>
      <th className='border-collapse border border-slate-400 '>Action</th>
    </tr>
  </thead>
  <tbody>
   {
    productData && 
    productData.map((item,index) =>{
        return(
            <tr>
            <td className='border-collapse border border-slate-400  px-6 text-sm'>{item.id}</td>
            <td className='border-collapse border border-slate-400  px-6 text-sm'>{item.name}</td>
            <td className='border-collapse border border-slate-400  px-6 text-sm'>{item.description}</td>
            <td className='border-collapse border border-slate-400  px-6 text-sm'>{item.status}</td>
            <td className='border-collapse border border-slate-400  px-6 text-sm'>
            <button onClick={() =>{handleDelete(item?.id)}} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Delete</button>

            </td>
          </tr>
        )
    })
   }
   
    
  </tbody>
</table>
            </div>
        </div>
    </AdminDashboardLayout>
  )
}

export default Category