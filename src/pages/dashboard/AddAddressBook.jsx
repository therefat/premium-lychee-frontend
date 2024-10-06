import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import DashboardLayout from '../layout/DashboardLayout'

function AddAddressBook() {
    const navigate = useNavigate()
    const [name,setName] = useState('') 
    const [email,setEmail] = useState('') 
    const [phone,setPhone] = useState('') 
    const [city,setCity] = useState('') 
    const [upzila,setUpzila] = useState('') 
    let [defaultValue, setDefault] = useState(false);
    const [address,setAddress] = useState('') 
    const [zip,setZip] = useState('')
    const [orderNote,setOrderNote] = useState('')  
    const addObj = {
      name : name,
      email : email,
      phone : phone,
      city : city,
      upzila: upzila,
      address : address,
      zip : zip,
      
      isDefault: defaultValue
    }
    const sumbitAddress = (e) => { 
        const token = JSON.parse(localStorage.getItem('user'));
        console.log(addObj)
        e.preventDefault(); 
        axios.post('user/addAddress',addObj,{
          headers : {
            Authorization: `Bearer ${token?.token}`, // Ensure your token is properly set here
           
          }
        }) 
        .then(response => {
          console.log(response)
  
        }) 
        .catch(error => {
          console.log(error)
        }) 
        navigate('/user/addressbook')
      }
  return (
    <Layout>
        <DashboardLayout>
        <h1>This is Add To Address Page</h1>
            <form method='post' onSubmit={(e) => sumbitAddress(e)}>
                    <div className='mb-4'>
                    
                    <input className='border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4' required placeholder='Full Name' type="text" value={name} onChange={(e) => setName(e.target.value)} name='name' />
                    </div>
                    <div className='mb-4 grid grid-cols-2 gap-3'>
                    <div>
                   
                    <input className='border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4'placeholder='example@email.com' type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                    <label htmlFor="phon"></label>
                    <input className='border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4' placeholder='Phone' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} name='phon' />
                    </div>
                    </div>
                    <div className='mb-4 grid grid-cols-2 gap-3'>
                    <div>
                    
                    <input className='border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4' type="text" placeholder='City' name='city' value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div>
                    <label htmlFor="phon"></label>
                    <input className='border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4' type="text" placeholder='Upzila' value={upzila} onChange={(e) => setUpzila(e.target.value)} name='upzila' />
                    </div>
                    </div>
                    <div className='mb-4 grid grid-cols-2 gap-3'>
                    <div className=''>
                    
                    <input className='border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4' type="text" name='address' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address'/>
                    </div>
                    <div>
                    <label htmlFor="phon"></label>
                    <input className='border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4' type="text" name='zip' value={zip} onChange={(e) => setZip(e.target.value)} placeholder='Zip' />
                    </div> 
                   
                    
                    </div> 
                    
                    <div className=" mb-4">
                                <div className="">
                                    <input type="checkbox" name="is_default" value={false} id="is_default" onClick={(e) => setDefault(!defaultValue)} className="form-check-input" />{" "}
                                    <label htmlFor="is_default" className="">
                                        <span>Use this address as default.</span>
                                    </label>
                                </div>
                            </div>
                    <button
                type="submit"
                className="bg-gray-900 p-3  text-white rounded"
              >
                Add Address
              </button>

                </form> 
        </DashboardLayout>
    </Layout>
  )
}

export default AddAddressBook