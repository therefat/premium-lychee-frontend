import React, { useContext, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { CartContext } from "../contex/CartContext";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { OrderContext } from "../contex/OrderContext";

function CheckOut() {
  const { cartData } = useContext(CartContext);
  const { updateOrderData } = useContext(OrderContext);
  const [defaultAddress, setDefaultAddress] = useState();
  
  const [orderNote, setOrdernote] = useState("");
  const [paymentMethod,setPaymentMethod] = useState()
  const [accountNo,setAccountNo] = useState()
  const token = localStorage.getItem("token"); 
  const [transactionid,setTransactionID] = useState('')
  console.log(token);
  const userInfo = jwtDecode(token);
  console.log(cartData);
  useEffect(() => {
    axios
      .get("address/defultaddress", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setDefaultAddress(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(cartData);
  const checkoutOrder = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    let orderData = {};
    
    axios
      .post(
        "order/newoders",
        {
          user: {
            name: userInfo.data.name,
            email: userInfo.data.email,
          },
          shippingDetails: defaultAddress,
          orderItems: cartData?.items,
          orderNote: orderNote,
          subTottal: cartData?.bill,
          shippingCost: 120,
          bill: Number(cartData?.bill) + Number(120),
          
          paymentInfo : {
            paymentMethod : paymentMethod,
            transactionid : transactionid,
            accountNo : accountNo,
          }
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        updateOrderData(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(paymentMethod)
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1>Shiping information</h1>

            <form method="post" onSubmit={(e) => checkoutOrder(e)}>
              {defaultAddress ? (
                <div className="bg-white address_div mt-5 h-min border rounded ">
                  <div className="grid sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 h-full p-8 saveAddDiv">
                    <div className="col-span-4 p-1 nameAdd">
                      <p className="">{defaultAddress.name}</p>
                      <p>{defaultAddress.phone}</p>
                      <p>{defaultAddress.email}</p>
                    </div>
                    <div className="col-span-4  p-1 areaAdd">
                      <p>{defaultAddress.address}</p>
                      <h5 className="mt-2 ">
                        <b>
                          <small className="bg-gray-800 text-white text-sm p-1 rounded-md">
                            Default Address
                          </small>
                        </b>
                      </h5>
                    </div>
                    <div className="col-span-4 p-1 parmADD">
                      <p>{defaultAddress.area && defaultAddress.area}</p>
                      <p>
                        {defaultAddress.shipping_id === "1"
                          ? "Inside Dhaka"
                          : "Outside Dhaka"}
                      </p>
                      <p>{defaultAddress.zip && defaultAddress.zip}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <input
                      className="border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                      required
                      placeholder="Full Name"
                      type="text"
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
                      />
                    </div>
                    <div>
                      <label htmlFor="phon"></label>
                      <input
                        className="border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                        placeholder="Phone"
                        type="text"
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
                      />
                    </div>
                    <div>
                      <label htmlFor="phon"></label>
                      <input
                        className="border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                        type="text"
                        placeholder="Upzila"
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
                        placeholder="Address"
                      />
                    </div>
                    <div>
                      <label htmlFor="phon"></label>
                      <input
                        className="border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                        type="text"
                        name="zip"
                        placeholder="Zip"
                      />
                    </div>
                  </div>
                </>
              )}
              <div>
                <textarea
                  rows="4"
                  cols="50"
                  className="border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                  type="text"
                  name="note"
                  placeholder="Order Note"
                  value={orderNote}
                  onChange={(e) => setOrdernote(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
          <div>
            <div>
              <div className="products">
                <div className="flex flex-col justify-between mb-2 border-2">
                  {cartData?.items?.map((product, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between mb-2 border-2"
                      >
                        <div className="w-[30%]">
                          <img
                            src={product.image}
                            className="border-2"
                            width={80}
                          />
                        </div>
                        <div className="w-[50%]">
                          <span>{product.name}</span>
                          <br />
                          <span>x{product.quantity}</span>
                        </div>
                        <div className="w-[20%]">
                          {(
                            Number(product.quantity) * Number(product.price)
                          ).toFixed(2)}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div>
                  <div className="flex flex-col mr-7 ">
                    <div className="my-4">
                      <h1 className="text-xl">Payment Method : </h1>
                      <div>
                        
                        <input
                          className="border  border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                          type="radio"
                          name="payment" 
                          value={'bkash'} 
                          onClick={(e) => setPaymentMethod(e.target.value)}
                          
                        /> 
                        <label htmlFor="bkash">Bkash</label>
                        
                      </div> 
                      <div>
                      <input
                          className="border  border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                          type="radio"
                          name="payment" 
                          value={'nogod'} 
                          onClick={(e) => setPaymentMethod(e.target.value)}
                          
                        /> 
                        <label htmlFor="nogod">Nogod</label>
                      
                      </div> 
                      <div> 
                      <input
                          className="border  border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                          type="radio"
                          name="payment"
                          placeholder="Zip"
                          value={'rocket'} 
                          onClick={(e) => setPaymentMethod(e.target.value)}
                        /> 
                        <label htmlFor="rocket">Rocket</label>
                      </div> 
                      <div className="flex flex-col w-48">
                      <label htmlFor="transactionid">Account No :</label>
                      <input
                        className="border  border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                        type="text"
                        name="accountno" 
                        value={accountNo}
                        onChange={(e) => setAccountNo(e.target.value)}
                        placeholder="Account No"
                      />
                    </div>
                      <div className="flex flex-col w-48">
                      <label htmlFor="transactionid">Transaction Id:</label>
                      <input
                        className="border  border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4"
                        type="text"
                        name="transactionid" 
                        value={transactionid}
                        onChange={(e) => setTransactionID(e.target.value)}
                        placeholder="Transaction Id"
                      />
                    </div>

                    </div>

                    <div className="my-4 ">
                      <p>Subtotal: {cartData?.bill}</p> <br />
                      <p>Shipping Charge: 120</p>
                      <p>Total: {Number(cartData?.bill) + Number(120)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CheckOut;
