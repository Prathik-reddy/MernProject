import React, { useEffect ,useState} from "react";

const Contact = () => {

    const [userData, setuserData] = useState("");
    const callAbout = async () => {
        try {
            const res = await fetch("/getData", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            setuserData(data);
            if (!res.status === 200) {
                const error = new Error(res.error.message);
                throw error;
            }
        } catch (error) {
            console.log(error);
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
                <form>
                    <div className="row justify-content-center">
                        <div className="col-md-6 m-2">
                            <input type="text" className="form-control" placeholder="Name" value= {userData.name}/>
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="email" className="form-control" placeholder="Email" value= {userData.email} />
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="number" className="form-control" placeholder="PhoneNo" value= {userData.phone} />
                        </div>
                        <div className="col-md-6 m-2">
                            <textarea class="form-control" id="exampleFormControlTextarea1"  placeholder="Your Message" rows="3"></textarea>
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="submit" className="form-control bg-primary" value="Send Message" rows="3"/>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Contact
