import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout';
import DashboardLayout from '../layout/DashboardLayout';
import { Link } from 'react-router-dom';

function AddressBook() {
    const [addres, setAddress] = useState();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('user'));
      if (!addres) {
        axios
          .get("user/getaddress", {
            headers: {
                Authorization: `Bearer ${token?.token}`,
            },
          })
          .then((responsive) => {
            
            setAddress(responsive?.data?.addressBooks);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, [addres]);
    console.log(addres)
    const deleteAddress = (addressId) => {
        const token = JSON.parse(localStorage.getItem('user'));
      axios
        .delete("user/deleteAddress/" + addressId, {
          headers: {
            Authorization: `Bearer ${token?.token}`,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      setAddress(null);
    };
    const setDefaultAddress = (addressId) => {
        const token = JSON.parse(localStorage.getItem('user'));
      axios
        .put(
          "user/updateAddress/" + addressId,
          {},
          {
            headers: {
                Authorization: `Bearer ${token?.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          setAddress(null);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  return (
    <Layout>
        <DashboardLayout>
        <h3 className="fw-bold text-xl">Address Book</h3>
        <Link to={"/user/addaddress"} className="hover:underline">
          <span className="text-2xl addplus font-black">+ </span>Add new address
        </Link>
        <div className="bg-white p-2">
          {addres?.length > 0 ? (
            addres.map((address, index) => {
              console.log(address._id);
              return (
                <>
                  <div
                    key={index}
                    className="address_div mt-5 h-min border rounded "
                  >
                    <div className="grid sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 h-full p-8 saveAddDiv">
                      <div className="col-span-3 p-1 nameAdd">
                        <p className="">{address.name}</p>
                        <p>{address.phone}</p>
                        <p>{address.email}</p>
                      </div>
                      <div className="col-span-4  p-1 areaAdd">
                        <p>{address.address}</p>
                        <h5 className="mt-2 ">
                          <b>
                            {address.isDefault ? (
                              <small className="bg-gray-800 text-white text-sm p-1 rounded-md">
                                Default Address
                              </small>
                            ) : (
                              <button
                                className="site_btn_secondary w-[1rem] hover:underline"
                                onClick={() => setDefaultAddress(address.id)}
                              >
                                Make This Default
                              </button>
                            )}
                          </b>
                        </h5>
                      </div>
                      <div className="col-span-3 p-1 parmADD">
                        <p>{address.city && address.city}</p>

                        <p>{address.zip && address.zip}</p>
                      </div>
                      <div className="col-span-2  text-end p-1 address_btn">
                        <button
                          className="edit_btn inline hover:underline"
                          // onClick={() => {setEditAddressID(address.id); setEditAddressModal(true)}}
                        >
                          <Link to={"/user/updateaddress/" + address.id}>
                            {" "}
                            <span>Edit Address&nbsp;</span>{" "}
                          </Link>
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                        <button
                          className="mt-5 delete_btn inline hover:underline"
                          onClick={(e) => deleteAddress(address.id)}
                        >
                          <span>Delete&nbsp;</span>
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <div>
                <div class="address_div mt-5 h-min border rounded ">
                  <div class=" p-8 h-min">
                    <div className="w-full p-4 bg-gray-300 rounded-lg border border-slate-400 flex">
                      <h3>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class=" ml-2"
                          viewBox="0 0 16 16"
                          role="img"
                          aria-label="Info:"
                        >
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                        </svg>
                      </h3>
                      <h2 className="ml-2">
                        You did not added any address yet! Please add a address
                      </h2>
                    </div>
                    <h3
                      className="text-xl mt-4 cursor-pointer text-gray-600 addNewAdd"
                      // onClick={() => setShowRequestModal(true)}
                    >
                      <Link to={"/user/addaddress"} className="hover:underline">
                        <span className="text-2xl addplus font-black">+ </span>
                        Add new address
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        </DashboardLayout>
    </Layout>
  )
}

export default AddressBook