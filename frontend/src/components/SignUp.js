import React,{useState} from 'react';
import { useNavigate} from 'react-router-dom';

const SignUp = () => {
    const [credentials, setCredentials] = useState({name:"",email:"",phone:"",work:"", password:"",cpassword:""})
    let navigate = useNavigate();

    const PostData = async(e)=>{
        e.preventDefault();
        const {name,email,phone,work,password,cpassword}=credentials;
        const res= await fetch("/register",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                name:name,email,phone,work,password,cpassword
            })

        });
        const data = await res.json();
        console.log("data:" + data);
        if(res.status===422 || !data){
            window.alert("SignUp failed")
        }else{
            window.alert("SignUp succeeded");
            navigate('/SignIn');
        }
        // alert(name+" "+email+" "+phone+" "+work+" "+password+" "+cpassword);
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
        <div className="w-100  text-center">
            <div className="container">
                <h1 className="ps-3">SignUp here</h1>
                <form method = "POST">
                    <div className="row justify-content-center">
                        <div className="col-md-6 m-2">
                            <input type="text" className="form-control" onChange={onChange}
                            name="name" placeholder="First name" />
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="email" className="form-control" onChange={onChange}
                            name="email" placeholder="Email" />
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="number" className="form-control" onChange={onChange}
                            name="phone" placeholder="PhoneNo" />
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="text" className="form-control" onChange={onChange}
                            name="work" placeholder="Work" />
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="password" className="form-control" onChange={onChange}
                            name="password" placeholder="Password" />
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="password" className="form-control" onChange={onChange}
                            name="cpassword" placeholder="Confirm Password" />
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="submit" className="form-control bg-primary" value="SignUp" onClick={PostData}/>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default SignUp
