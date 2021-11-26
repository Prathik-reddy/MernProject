import React, { useState , useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {UserContext} from "../App";
const SignIn = () => {

    const {state,dispatch} = useContext(UserContext);


    const navigate = useNavigate();
    const [cred, setcred] = useState({
        email: "",
        password: "",
    });

    const SignInUser = async (e)=>{
        e.preventDefault();
        const { email, password } = cred;
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
            window.alert("Invalid credentials");
        } else {
            dispatch({type:"USER",payload:true})
            window.alert("Login successful");
            navigate("/");
         }
    }
    const onChange = async (e) => {
        setcred({ ...cred, [e.target.name]: e.target.value })

    }

    return (
        <div>
            <div className="w-100  text-center">
                <div className="container">
                    <h1 className="p-5">SignIn here</h1>
                    <form>
                        <div className="row justify-content-center">
                            <div className="col-md-6 m-2">
                                <input type="email" className="form-control" placeholder="Email" name="email" onChange={onChange} />
                            </div>
                            <div className="col-md-6 m-2">
                                <input type="password" className="form-control" placeholder="Password" name="password" onChange={onChange} />
                            </div>
                            <div className="col-md-6 m-2 ">
                                <input type="submit" className="form-control bg-primary" value="SignIn" onClick={SignInUser} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
