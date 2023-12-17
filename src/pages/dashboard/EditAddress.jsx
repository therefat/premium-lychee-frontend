import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import DashboardLayout from "../../layout/DashboardLayout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditAddress() { 
    const {id} = useParams() 
    const navigate = useNavigate()
    const [name,setName] = useState('') 
    const [email,setEmail] = useState('') 
    const [phone,setPhone] = useState('') 
    const [city,setCity] = useState('') 
    const [upzila,setUpzila] = useState('') 
    let [defaultValue, setDefault] = useState(false);
    const [address,setAddress] = useState('') 
    const [zip,setZip] = useState('')
    
    const [singleAddress,setSingleAddress] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('address/getsingleAddress/'+id,{
            headers : {
                Authorization: token
            }
        })
        .then(response => {
            console.log(response?.data?.name) 
            setName(response?.data?.name) 
            setEmail(response?.data?.email) 
            setPhone(response?.data?.phone) 
            setCity(response?.data?.city) 
            setUpzila(response?.data?.upzila) 
            console.log(response?.data?.defaultValue)
            setDefault(response?.data?.isDefault) 
            setAddress(response?.data?.address) 
            setZip(response?.data?.zip) 
           
            
        }) 
        .catch(error => {
            console.log(error)
        })
    },[])
    console.log(defaultValue) 
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
    const updateAddress = (e) => {
      e.preventDefault(); 
      const token = localStorage.getItem('token')
      axios.put('address/updateaddress/' + id,addObj,{
        headers : {
          Authorization : token
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
        <form method="post" onSubmit={(e) => updateAddress(e)}>
          <div className="mb-4">
            <input
              className="border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
              required
              placeholder="Full Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-3">
            <div>
              <input
                className="border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                placeholder="example@email.com"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phon"></label>
              <input
                className="border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                placeholder="Phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phon"
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-3">
            <div>
              <input
                className="border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                type="text"
                placeholder="City"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phon"></label>
              <input
                className="border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                type="text"
                placeholder="Upzila"
                value={upzila}
                onChange={(e) => setUpzila(e.target.value)}
                name="upzila"
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-3">
            <div className="">
              <input
                className="border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>
            <div>
              <label htmlFor="phon"></label>
              <input
                className="border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                type="text"
                name="zip"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="Zip"
              />
            </div>
            
          </div>

          <div className=" mb-4">
            <div className="">
              <input
                type="checkbox"
                name="is_default"
                checked={defaultValue == true}
                
                value={true}
                id="is_default"
                onClick={(e) => setDefault(!defaultValue)}
                className="form-check-input"
              />{" "}
              <label htmlFor="is_default" className="">
                <span>Use this address as default.</span>
              </label>
            </div>
          </div>
          <button type="submit"  className="bg-gray-900 p-3  text-white rounded">
            Update Address
          </button>
        </form>
      </DashboardLayout>
    </Layout>
  );
}

export default EditAddress;
