import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";



export const UserContext = createContext('');
const UserProvider = ({children}) => {
    //hold user data 
    const [userData,setUserData] = useState('');
    const [isLoggedIn,setIsLoggedIn] = useState();
    useEffect(() => {
        const checkToken = async () => {
            try{
                if(localStorage.getItem('user')){
                    // const userdata = JSON.parse(localStorage.getItem('user'));
                    setUserData(JSON.parse(localStorage.getItem('user')))
                }
            }
            catch(error){
                setUserData(null)
            }
        }
        checkToken()
       
    },[])
    const updateUserData = newData => {
        setUserData(newData)
    }
    return (
        <UserContext.Provider value={{userData,setUserData,updateUserData,isLoggedIn,setIsLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider