import React, { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import DashboardLayout from '../../layout/DashboardLayout'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateProduct() {  
    const {id} = useParams()
   
  
    
  const [name, setName] = useState("");
  const [itemData,setItemData] = useState([])
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImagess] = useState("");
 
  const [type, setType] = useState('');
 
  const [variations, setVariations] = useState([]);
 
  const imagSub = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setImagess(file);
    }
  }; 
  console.log(id)
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
    axios.get('items/singleItems/' + id)
    .then((response) => { 
        console.log(response.data) 
        if(response.data.success){
          setName(response.data?.item?.name) 
          setDescription(response.data?.item?.description)
          setCategory(response.data?.item?.category) 
          setPrice(response.data?.item?.price) 
          setImagess(response.data?.item?.image) 
          setType(response.data?.item?.attributeType)
          setVariations(response.data?.item?.attributes)
          setItemData(response.data.item)
          
        
        }
        console.log(response.data?.item) 
        
        
        
        
    },) 
    .catch(error => {
        console.log(error)
    })
  },[])  
console.log(name)
  const updatesProduct = (e) => { 
    e.preventDefault();
    const token = localStorage.getItem('token') 
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("image", image);
     
    const newdat = {
         
          name: name,
          description: description, 
          category: category,
          price: price,
          image: image,
          attributeType : type,
          attributes: variations,
    }
      
    axios.patch(`items/updateItems/${id}`, newdat, { 
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    
    
    

  };
  console.log(variations)
  console.log(type)
//   useEffect(() => {
//     setVariations(response.data?.item?.attributes)
//   }, [response.data?.item?.attributes])
  return (
    <>
            <Layout>
                <DashboardLayout> 
                <h1>Update Product</h1>
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
              <input
                type="text"
                className="border h-8 rounded-lg border-gray-900"
                name="category"
                value={category}
                id="category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
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
              <input type="file" id="" onChange={imagSub} />
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
                </DashboardLayout>
            </Layout>
    </>
  )
}

export default UpdateProduct