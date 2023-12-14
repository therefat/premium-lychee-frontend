import React, { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import DashboardLayout from '../../layout/DashboardLayout'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProductList() { 
  
  const [productData,setProductData] = useState([])
  useEffect(() => {
    axios.get('items/allItems') 
    .then((response) => {
      // console.log(data) 
      setProductData(response.data)
    })
   .catch(error => {
    console.log(error)
   })
  },[productData] ) 
  console.log(productData) 


    const handleDelet = (item) => {
      const token = localStorage.getItem("token");
      axios.delete(`http://localhost:8080/items/deletItem/${item._id}`, {
        headers: {
          Authorization: token,
          
        },
      })
        .then((response) => {
          console.log(response); 
          setProductData([])
        })
        .catch((err) => {
          console.log(err);
        }); 
       
  
    }
  
  return (
    <Layout>
      <DashboardLayout>
          Product List 
          <div>
          <div className="mt-7">
            <table className=" min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-base-300 dark:bg-base-300">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white-700 uppercase dark:text-black"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white-700 uppercase dark:text-black"
                  >
                    category
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white-700 uppercase dark:text-black"
                  >
                    description
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white-700 uppercase dark:text-black"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white-700 uppercase dark:text-black"
                  >
                    Edit
                  </th> 
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white-700 uppercase dark:text-black"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-base-300 dark:divide-gray-700">
                {productData &&
                  productData.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.name}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.category}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.description}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.price}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                          <Link to={'/item/' + item._id} 
                            
                            class="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </Link>
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                          <button onClick={() => {handleDelet(item)}}
                            
                            class="text-red-600 dark:text-red-500 hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          </div>
      </DashboardLayout>
    </Layout>
  )
}

export default ProductList