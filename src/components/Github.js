import React from 'react'

export default function Github() {
    return (
        <div className="container bg-light text-dark mb-4">
            <h1 className="pt-4 pb-2 mt-4 mb-2 ml-2 border-bottom">Portfolio</h1>
            <div className="row m-8" style={{ height: "250px" }}>
                <a className="col-4" href="https://github.com/Alexander-Happe/Project_2">
                    <img src="./images/walkin.png" className="img-fluid" alt="Walk" id="card" />
                    <h3 className="text-center bg-dark text-white">What's in the Walk in'</h3>
                </a>
                <a className="col-4" href="https://github.com/HoomieJanell/project_1">
                    <img src="./images/whatdo.JPG" className="img-fluid" alt="WhatDo" id="card" />
                    <h3 className="text-center bg-dark text-white">WhatDo</h3>
                </a>
                <a className="col-4" href="https://github.com/jpellow/Quiz" id="card">
                    <img src="./images/Quiz.JPG" className="img-fluid" alt="Quiz" id="card" />
                    <h3 className="text-center bg-dark text-white">Quiz</h3>
                </a>
            </div>
            <div className="row mt-4" style={{ height: "350px" }}>
                <a className="col-4 mb-4" href="https://github.com/jpellow/planner">
                    <img src="./images/planner.JPG" className="img-fluid" alt="Work day Planner" id="card" />
                    <h3 className="text-center bg-dark text-white">Work day Planner</h3>
                </a>
                <a className="col-4 mb-4" href="https://github.com/jpellow/password">
                    <img src="./images/password.JPG" className="img-fluid" alt="Password" id="card" />
                    <h3 className="text-center bg-dark text-white">Password Generator</h3>
                </a>
                <a className="col-4 mb-4" href="https://github.com/jpellow/Note">
                    <img src="./images/note.JPG" className="img-fluid" alt="Note" id="card" />
                    <h3 className="text-center bg-dark text-white">Note Taker</h3>
                </a>

            </div>
        </div>

    )
}