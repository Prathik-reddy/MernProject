import React from "react";

const SignIn = () => {
  return (
    <div>
      <div className="w-100  text-center">
            <div className="container">
                <h1 className="p-5">SignIn here</h1>
                <form>
                    <div className="row justify-content-center">
                        <div className="col-md-6 m-2">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="col-md-6 m-2">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="col-md-6 m-2 ">
                            <input type="submit" className="form-control bg-primary" value="SignIn" />
                        </div>
                    </div>
                </form>
            </div>
            </div>
    </div>
  );
};

export default SignIn;
