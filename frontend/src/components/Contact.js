import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="w-100  text-center">
            <div className="container">
                <h1 className="p-5">Contact Us</h1>
                <form>
                    <div class="row justify-content-center">
                        <div class="col-md-6 m-2">
                            <input type="text" class="form-control" placeholder="Name" />
                        </div>
                        <div class="col-md-6 m-2">
                            <input type="email" class="form-control" placeholder="Email" />
                        </div>
                        <div class="col-md-6 m-2">
                            <input type="text" class="form-control" placeholder="Your Message" />
                        </div>
                        <div class="col-md-6 m-2">
                            <input type="submit" class="form-control bg-primary" value="Contact Us" />
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Contact
