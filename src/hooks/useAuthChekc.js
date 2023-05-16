import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../fetures/usersApi/userSlice";

export default function useAuthCheck (){
    const [authCheck,setAuthCheck] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        const localAuth = localStorage?.getItem("user");
        if(localAuth){
            const auth = JSON.parse(localAuth)
            if(auth?.email){
                dispatch(addUser(auth))
            }
        }
        setAuthCheck(true)
    },[dispatch])
   
    return authCheck;
}