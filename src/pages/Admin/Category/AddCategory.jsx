import React, { useEffect, useState } from "react";
import AdminDashboardLayout from "../../layout/AdminDashboardLayout";
import axios from "axios";

function AddCategory() {
    const [status,setStatus] = useState();
    const [name,setName] = useState()
    const [description,setDescription] = useState()
    const token = JSON.parse(localStorage.getItem('user'));
    console.log(token?.token)
    const submitCategory = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/categories/add', {
            name: name,
            description: description,
            status: status
        }, {
            headers: {
                Authorization: `Bearer ${token?.token}` // Ensure your token is properly set here
            },
            withCredentials: true  // Set this only if you're using cookies or similar credentials
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);  // Log the full error response for debugging
        });
    }
    
    
  return (
    <AdminDashboardLayout>
      <div>
        <h1>Add Category</h1>

        <form action="" method="post" onSubmit={(e) => submitCategory(e)} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter Category name"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              type="description"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              id="name"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter description"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="status"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="active">Active</option>
              <option value="disable">Disable</option>
             
            </select>
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Category</button>

        </form>
      </div>
      <div>\
        <h1>dkfjdkfjd</h1>
       
      </div>
    </AdminDashboardLayout>
  );
}

export default AddCategory;
