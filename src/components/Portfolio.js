import React from 'react'

export default function Portfolio() {
    return (
        <div className="container bg-light text-dark mb-4">
            <h1 className="pt-4 pb-2 mt-4 mb-2 ml-2 border-bottom">Portfolio</h1>
            <div className="row m-8" style={{ height: "250px" }}>
                <a className="col-4" href="https://enigmatic-coast-21560.herokuapp.com/">
                    <img src="src\images\walkin.png" alt="walkin" className="img-fluid" id="card" />
                    <h3 className="text-center bg-dark text-white">What's in the Walk in'</h3>
                </a>
                <a className="col-4" href="https://hoomiejanell.github.io/project_1/">
                    <img src="./images/whatdo.JPG" className="img-fluid" alt="whatdo" id="card" />
                    <h3 className="text-center bg-dark text-white">WhatDo</h3>
                </a>
                <a className="col-4" href="https://jpellow.github.io/Quiz/" id="card">
                    <img src="./images/Quiz.JPG" className="img-fluid" alt="quiz" id="card" />
                    <h3 className="text-center bg-dark text-white">Quiz</h3>
                </a>
            </div>
            <div className="row mt-4" style={{ height: "350px" }}>
                <a className="col-4 mb-4" href="https://jpellow.github.io/planner/">
                    <img src="./images/planner.JPG" className="img-fluid" alt="planner" id="card" />
                    <h3 className="text-center bg-dark text-white">Work day Planner</h3>
                </a>
                <a className="col-4 mb-4" href="https://jpellow.github.io/password/">
                    <img src="./images/password.JPG" className="img-fluid" alt="password" id="card" />
                    <h3 className="text-center bg-dark text-white">Password Generator</h3>
                </a>
                <a className="col-4 mb-4" href="https://whispering-scrubland-39807.herokuapp.com/">
                    <img src="./images/note.JPG" className="img-fluid" alt="note" id="card" />
                    <h3 className="text-center bg-dark text-white">Note Taker</h3>
                </a>

            </div>
        </div>

    )
}