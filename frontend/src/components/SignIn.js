import React from "react";

const SignIn = () => {
  return (
    <div>
      <div className="w-100  text-center">
            <div className="container">
                <h1 className="p-5">SignIn here</h1>
                <form>
                    <div class="row justify-content-center">
                        <div class="col-md-6 m-2">
                            <input type="email" class="form-control" placeholder="Email" />
                        </div>
                        <div class="col-md-6 m-2">
                            <input type="password" class="form-control" placeholder="Password" />
                        </div>
                        <div class="col-md-6 m-2 ">
                            <input type="submit" class="form-control bg-primary" value="SignIn" />
                        </div>
                    </div>
                </form>
            </div>
            </div>
    </div>
  );
};

export default SignIn;
