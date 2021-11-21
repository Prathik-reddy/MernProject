import React from 'react'

const SignUp = () => {
    return (
        <>
        <div className="w-100  text-center">
            <div className="container">
                <h1 className="ps-3">SignUp here</h1>
                <form>
                    <div class="row justify-content-center">
                        <div class="col-md-6 m-2">
                            <input type="text" class="form-control" placeholder="First name" />
                        </div>
                        <div class="col-md-6 m-2">
                            <input type="email" class="form-control" placeholder="Email" />
                        </div>
                        <div class="col-md-6 m-2">
                            <input type="number" class="form-control" placeholder="PhoneNo" />
                        </div>
                        <div class="col-md-6 m-2">
                            <input type="text" class="form-control" placeholder="Work" />
                        </div>
                        <div class="col-md-6 m-2">
                            <input type="password" class="form-control" placeholder="Password" />
                        </div>
                        <div class="col-md-6 m-2">
                            <input type="password" class="form-control" placeholder="Confirm Password" />
                        </div>
                        <div class="col-md-6 m-2">
                            <input type="submit" class="form-control bg-primary" placeholder="Submit" />
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default SignUp
