import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="name"
                />

                <input
                    type="text"
                    placeholder="email"
                />

                <input
                    type="password"
                    placeholder="password"
                />

                <div className="file-field input-field">


                </div>
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"

                >
                    SignUP
            </button>
                <h5>
                    <Link to="/signin">Already have an account ?</Link>
                </h5>





            </div>
        </div>
    )
}


export default Signup
