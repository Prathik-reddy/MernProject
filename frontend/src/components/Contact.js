import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="w-100  text-center">
            <div className="container">
                <h1 className="p-5">Contact Us</h1>
                <form>
                    <div className="row justify-content-center">
                        <div className="col-md-6 m-2">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="text" className="form-control" placeholder="Your Message" />
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="submit" className="form-control bg-primary" value="Contact Us"/>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Contact
