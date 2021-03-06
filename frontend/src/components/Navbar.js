import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { UserContext } from "../App";
const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
    console.log(state);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><h3>@Pra<span className="text-primary">thik</span></h3> </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home  </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/Contact">Contact</NavLink>
                            </li>

                            {!state ? <>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/SignIn">SignIn</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/SignUp">SignUp</NavLink>
                                </li>
                            </>:<>
                                <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/SignOut">SignOut</NavLink>
                                </li>
                            </>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
