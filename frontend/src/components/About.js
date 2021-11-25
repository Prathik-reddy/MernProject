import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const About = () => {

    let navigate = useNavigate();
    const callAbout = async () => {
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",

                }, credentials: "include"
            });
            const data = await res.json();
            console.log(data);
            if (!res.status === 200) {
                const error = new Error(res.error.message);
                throw error;
            }
        } catch (error) {
            console.log(error);
            navigate("/SignIn");

        }
    }

    useEffect(() => {
        callAbout();
    }, [])
    return (
        <div>
            <div className="container mt-3 p-3 text-center w-75">
                <h1 className="text-primary">Prathik Reddy</h1>
                <p className="font-monospace fst-italic lh-lg ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ratione velit cupiditate. Sequi aliquid provident non perferendis eius iste corrupti natus quo placeat, dolores error, delectus rerum vel voluptatum nihil.</p>
                <hr className="text-primary" />
            </div>
            <div className="container w-75">
                <div className="row p-3 ">
                    <div className="col-md-6 text-center d-flex align-items-center bg-light">
                        <p className="lh-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos excepturi dolore quisquam fuga cupiditate qui sunt fugit commodi deserunt officiis eius, accusantium hic debitis nulla pariatur, id consectetur. Reprehenderit, porro impedit quo dolore omnis beatae minima tempore dolor sed praesentium. Rem mollitia cupiditate quos magnam officiis velit unde expedita laboriosam!</p>
                    </div>
                    <div className="col-md-6">
                        <img className="rounded mx-auto d-block" src="https://en.pimg.jp/040/422/893/1/40422893.jpg" alt="img" />
                    </div>
                </div>
                <hr className="text-primary" />
            </div>
            <div className="container w-75">
                <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">About</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Timeline</button>
                </li>
            </ul>
                <div className="row">
                    <div className="col-md-6 py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <p>Link 1 : </p>
                            </div>
                            <div className="col-md-6">
                                <a href="http://google.com" target="_blank" rel="noreferrer">Google</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p>Link 2 : </p>
                            </div>
                            <div className="col-md-6">
                                <a href="http://google.com" target="_blank" rel="noreferrer">Google</a>
                            </div>
                        </div><div className="row">
                            <div className="col-md-6">
                                <p>Link 3 : </p>
                            </div>
                            <div className="col-md-6">
                                <a href="http://google.com" target="_blank" rel="noreferrer">Google</a>
                            </div>
                        </div><div className="row">
                            <div className="col-md-6">
                                <p>Link 4 : </p>
                            </div>
                            <div className="col-md-6">
                                <a href="http://google.com" target="_blank" rel="noreferrer">Google</a>
                            </div>
                        </div><div className="row">
                            <div className="col-md-6">
                                <p>Link 5 : </p>
                            </div>
                            <div className="col-md-6">
                                <a href="http://google.com" target="_blank" rel="noreferrer">Google</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 py-5">
                        <div className="tab-content" id="tabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>UserId : </p>
                                    </div>
                                    <div className="col-md-6 text-primary">
                                        <p>1234567</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Name : </p>
                                    </div>
                                    <div className="col-md-6 text-primary">
                                        <p>Prathik Reddy</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Email : </p>
                                    </div>
                                    <div className="col-md-6 text-primary">
                                        <p>prathik@gmail.com</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Phone : </p>
                                    </div>
                                    <div className="col-md-6 text-primary">
                                        <p>9876543210</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Work : </p>
                                    </div>
                                    <div className="col-md-6 text-primary">
                                        <p>Student</p>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Experience : </p>
                                    </div>
                                    <div className="col-md-6 text-primary">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Hourly Prices : </p>
                                    </div>
                                    <div className="col-md-6 text-primary">
                                        <p>1000/- Rs</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Total Projects : </p>
                                    </div>
                                    <div className="col-md-6 text-primary">
                                        <p>500</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Coustomer Rating: </p>
                                    </div>
                                    <div className="col-md-6 text-primary">
                                        <p>5/5</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Work : </p>
                                    </div>
                                    <div className="col-md-6 text-primary">
                                        <p>Web Developer</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
