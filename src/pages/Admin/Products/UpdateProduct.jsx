import React, { useEffect, useState } from 'react'
import AdminDashboardLayout from '../../layout/AdminDashboardLayout'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function UpdateProduct() {
    const {id} = useParams()
    const [name, setName] = useState("");
    const [itemData,setItemData] = useState([])
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [allCategory,setAllCategory] = useState()
    const [price, setPrice] = useState("");
    const [image, setImagess] = useState("");
   
    const [type, setType] = useState('');
   
    const [variations, setVariations] = useState([]);
   
    const imagSub = (e) => {
        console.log('work work')
      if (e.target.files[0]) {
        const file = e.target.files[0];
       
        setImagess(file);
      }
    }; 
    console.log(image)
    const addVariation = () => {
      setVariations([...variations, { attribute_quantity: "", attribute_price: 0 }]);
      
    };
    const handleVariationChange = (index, variationType, variationQuantity) => {
      const updatedVariations = [...variations];
      updatedVariations[index] = {
        attribute_quantity: variationType,
        attribute_price: variationQuantity,
        attribute_type: type
      };
      setVariations(updatedVariations);
    };  
    
    useEffect(() => {
      axios.get('item/getProduct/' + id)
      .then((response) => { 
          console.log(response?.data?.product.name) 
          if(response.data.success){
            setName(response.data?.product?.name) 
            setDescription(response.data?.product?.description)
            setCategory(response.data?.product?.category_id) 
            setPrice(response.data?.product?.price) 
            setImagess(response.data?.product?.image) 
            setType(response.data?.product?.attributeType)
            setVariations(response.data?.product?.attributes)
            setItemData(response.data)
            
          
          }
          console.log(response.data?.item) 
          
          
          
          
      },) 
      .catch(error => {
          console.log(error)
      })
      axios.get('/admin/categories') 
      .then((response) => {
        console.log(response.data) 
        setAllCategory(response.data)
        // setProductData(response.data)
      })
     .catch(error => {
      console.log(error)
     })
    },[])  
  console.log(category)
    const updatesProduct = (e) => { 
      e.preventDefault();
     
      const token = JSON.parse(localStorage.getItem('user'));
    
       
      const newdat = {
           
            name: name,
            description: description, 
            category_id: category,
            price: price,
            image: image,
            attributeType : type,
            attributes: variations,
      }
      const formData = new FormData();
      formData.append('name', "1bvbvbvv");
      formData.append('description', description);
      formData.append('category_id', category);
      formData.append('price', price);
    console.log(name)
      // Append the image only if it has been changed/selected
      if (image) {
        formData.append('image', image);
      }
    
      formData.append('attributeType', type);
      console.log(formData)
        
  
    axios.patch(`item/updateProduct/${id}`,
    {
        name : name,
        description : description,
        price : price,
        category_id : category,
        image : image,
        attributeType : type,
        attributes : variations
    }, {
            headers: {
              Authorization: `Bearer ${token?.token}`,
            //   'Content-Type': 'multipart/form-data',
              // Do not manually set 'Content-Type', Axios will automatically set it to 'multipart/form-data'
            },
            withCredentials: true,
          } )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      
      
      
  
    };
    console.log(itemData)
    console.log(name)
  return (
    <AdminDashboardLayout>
        <div>
            <h1>Update Product {id}</h1>
            <div>
            <div className="relative p-6 flex-auto">
                    <div className="product-add flex flex-col  m-auto  p-5 justify-items-center">
          <form
            method="post"
            encType="multipart/form-data"
            onSubmit={(e) => updatesProduct(e) }
          >
            <div className="mb-3 flex flex-col gap-1">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="border h-8 rounded-lg border-gray-900"
                name="name"
                value={name}
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="border h-8 rounded-lg border-gray-900"
                name="description"
                value={description}
                id="description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label htmlFor="category">Category</label>
              <select
              id="status"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
             
             
              {
                allCategory?.map((item) => {
                  return (
                    <option selected={item?.id == category} value={item?.id}>{item?.name}</option>
                  )
                })
              }
             
            </select>
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="border h-8 rounded-lg border-gray-900"
                name="price"
                value={price}
                id="price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label htmlFor="proImage">Uplode Image</label>
              <input name='image' type="file" id="" onChange={imagSub} />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label htmlFor="">Qunt</label>
               <select value={type} onChange={(e) => setType(e.target.value)}>
               <option value="">Select Option</option>
          <option value="kg">KG</option>
          <option value="pieces">Pieces</option>
        </select> 
        <br /> 

        {type === "kg" ? (
                  <div>
                    <h3>Kilogram Variations</h3>
                    {variations.map((variation, index) => (
                      <div key={index} className="mb-3 mr-2">
                        <label>{` Variation ${index + 1}: `}</label>
                        <div className="mb-3 flex flex-col gap-1"> 
                        <label htmlFor="">Quantity</label>
                        <input
                          type="text"
                          placeholder="Enter Quantity"
                          className="border h-8 rounded-lg border-gray-900"
                          value={variation.attribute_quantity}
                          onChange={(e) =>
                            handleVariationChange(
                              index,
                              e.target.value,
                              variation.attribute_price
                            )
                          }
                        /> 
                        </div>
                        <div className="mb-3 flex flex-col gap-1"> 
                        <label htmlFor="">Quantity</label>
                        <input
                          type="number"
                          className="border h-8 rounded-lg border-gray-900"
                          value={variation.attribute_price}
                          onChange={(e) =>
                            handleVariationChange(
                              index,
                              variation.attribute_quantity,
                              e.target.value
                            )
                          }
                        /> 
                        </div>
                      </div>
                    ))}
                    <p className="bg-primary p-3 inline-block text-white rounded" onClick={addVariation}>Add varient</p>
                  </div>
                ) : (
                  <div>
                    <h3>Pices Variations</h3>
                    {variations.map((variation, index) => (
                      <div key={index} className="mb-3 mr-2">
                        <label>{`Variation ${index + 1}: `}</label>
                        <div className="mb-3 flex flex-col gap-1"> 
                        <label htmlFor="">Quantity</label>
                        <input
                          type="text"
                          placeholder="Enter Quantity"
                          className="border h-8 rounded-lg border-gray-900"
                          value={variation.attribute_quantity}
                          onChange={(e) =>
                            handleVariationChange(
                              index,
                              e.target.value,
                              variation.attribute_price
                            )
                          }
                        /> 
                        </div>
                        <div className="mb-3 flex flex-col gap-1"> 
                        <label htmlFor="">Quantity</label>
                        <input
                          type="number"
                          className="border h-8 rounded-lg border-gray-900"
                          value={variation.attribute_price}
                          onChange={(e) =>
                            handleVariationChange(
                              index,
                              variation.attribute_quantity,
                              e.target.value
                            )
                          }
                        /> 
                        </div>
                      </div>
                    ))}
                    <p className="bg-primary p-3 inline-block text-white rounded" onClick={addVariation}>Add varient</p>
                  </div>
                )}
          <br />
            
            </div> 
            

            <button type="submit" className="bg-gray-900 p-3  text-white rounded">
              Update
            </button>
          </form>
        </div>  
        </div>
            </div>
        </div>
    </AdminDashboardLayout>
  )
}

export default UpdateProduct