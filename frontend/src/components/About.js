import React from "react";

const About = () => {
    return (
        <div>
            <div className="container mt-3 p-3 text-center w-75">
               <h1 className="text-primary">Prathik Reddy</h1>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ratione velit cupiditate. Sequi aliquid provident non perferendis eius iste corrupti natus quo placeat, dolores error, delectus rerum vel voluptatum nihil.</p>
            <hr className="text-primary" />
            </div>
            <div className="container w-75">
                <div className="row p-3 pb-5">
                    <div className="col-md-6 text-center d-flex align-items-center bg-light">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos excepturi dolore quisquam fuga cupiditate qui sunt fugit commodi deserunt officiis eius, accusantium hic debitis nulla pariatur, id consectetur. Reprehenderit, porro impedit quo dolore omnis beatae minima tempore dolor sed praesentium. Rem mollitia cupiditate quos magnam officiis velit unde expedita laboriosam!</p>
                    </div>
                    <div className="col-md-6">
                        <img className="rounded mx-auto d-block" src="https://en.pimg.jp/040/422/893/1/40422893.jpg" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
