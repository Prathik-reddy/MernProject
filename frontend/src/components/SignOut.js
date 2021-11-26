import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
    let navigate = useNavigate();
    useEffect(() => {
        fetch("/signOut",{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
            },credentials:"include"
        }).then((res) => {
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
