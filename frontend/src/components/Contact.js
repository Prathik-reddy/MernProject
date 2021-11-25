import React, { useEffect ,useState} from "react";

const Contact = () => {

    const [userData, setuserData] = useState("");
    // Authenticating user
    const callAbout = async () => {
        try {
            const res = await fetch("/getData", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            setuserData({...userData,name: data.name,email: data.email,phone: data.phone,msg: data.msg});
            if (!res.status === 200) {
                const error = new Error(res.error.message);
                throw error;
            }
        } catch (error) {
            console.log(error);
        }
    }
    const onChange = (e) => {
        setuserData({...userData,[e.target.name]: e.target.value})
    }
    // sending data to backend
    const contactForm = async(e) => {
        e.preventDefault();
        const {name, email, phone, msg}= userData;
        const res = await fetch("/contact", {
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,email,phone,msg
            })
        });
        const data = await res.json();
        console.log(data);
        if(!data){
            alert("Failed to send message");
            console.log('msg not sent');
        }else{
            alert("Message sent successfully");
            setuserData({...userData,msg:""});
            console.log("msg sent");

        }
    }

    useEffect(() => {
        callAbout();
    }, [])
    return (
        <div>
            <div className="w-100  text-center">
            <div className="container">
                <h1 className="p-5">Contact Us</h1>
                <form method="POST">
                    <div className="row justify-content-center">
                        <div className="col-md-6 m-2">
                            <input type="text" className="form-control" onChange = {onChange} name = "name" placeholder="Name" value= {userData.name}/>
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="email" className="form-control" onChange = {onChange} name = "email" placeholder="Email" value= {userData.email} />
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="number" className="form-control" onChange = {onChange} name = "phone" placeholder="PhoneNo" value= {userData.phone} />
                        </div>
                        <div className="col-md-6 m-2">
                            <textarea className="form-control" id="exampleFormControlTextarea1"  onChange = {onChange} name = "msg" placeholder="Your Message" rows="3"></textarea>
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="submit" className="form-control bg-primary" value="Send Message" rows="3" onClick={contactForm}/>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Contact
