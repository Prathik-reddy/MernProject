import React, {useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import {UserContext} from "../App";

const SignOut = () => {
    const {state,dispatch} = useContext(UserContext);
    let navigate = useNavigate();
    useEffect(() => {
        fetch("/signOut",{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
            },credentials:"include"
        }).then((res) => {
            dispatch({type:"USER",payload:false})
            if(res.status != 200 ){
                const err = new Error(res.error);
                throw err;
            }
            navigate("/SignIn",{replace:true});
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div>
        </div>
    )
}

export default SignOut
