import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext('') 
const UserProvider = ({children}) => {
    // State to hold user data
    const [userData,setUserData] = useState();
    const [isLoggedIn,setIsLoggedIn] = useState()
  // Effect to run when the component mounts to check for user data
    useEffect(() => {
         // Function to check the user token and update the state
       const checkToken = async () => {
        try{
             // Retrieve the stored token from local storage
            if(localStorage.getItem('token')){
              

        
                const token_decode = jwtDecode(localStorage.getItem('token'))
                if(token_decode.exp * 1000 < Date.now()){
                      // If the token is expired, clear local storage and reset user data
                    localStorage.clear()
                    setUserData(null)
                } else{
                    // If the token is valid, update the user data in the state
                    setUserData(token_decode)
                    setIsLoggedIn(localStorage.getItem('token'))
                }
            }
           } 
           catch(error){
            // Handle any errors that may occur during token decoding
            
            setUserData(null);
           }
       }
       checkToken()
    },[])
    const updateUserData = newData => {
        setUserData(newData);
      };
       // Provide the user data and setter function through the context
    return (
        <UserContext.Provider value={{userData,setUserData,updateUserData,isLoggedIn,setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    )
} 
export default UserProvider