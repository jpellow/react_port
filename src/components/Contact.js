import React from 'react'

export default function Contact() {
    return (
        <div className="container bg-light text-dark mb-4">
            <h1 className="pt-4 pb-2 mt-4 mb-2 ml-2 border-bottom">Contact</h1>
            <div className="row mt-4">
                <div className="col-12">
                    <form>
                        <label for="exampleFormControlInput1">Name</label>
                        <input className="form-control" type="text" placeholder="Name" />
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}