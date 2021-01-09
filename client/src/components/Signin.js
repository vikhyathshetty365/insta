import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'

function Signin() {


    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const history = useHistory()

    const postdata = () => {

        fetch('/signin', {
            method: "post",

            body: JSON.stringify
                ({
                    email: email,
                    password: password
                }),

            headers:
            {
                "Content-Type": "application/json"
            }

        }).then(res => res.json()).then(data => {
            if (data.err) {
                console.log(data)
                M.toast({ html: 'Sign up  failed!!', classes: '#d32f2f red darken-2' })
            }
            else {
                M.toast({ html: 'Sign in Sucessfull', classes: '#4caf50 green' })
                history.push('/')
            }
        })




    }
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}

                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}

                />
                <button onClick={() => postdata()} className="btn waves-effect waves-light #64b5f6 blue darken-1"

                >
                    Login
            </button>



                <h5>
                    <Link to="/signup">Dont have an account ?</Link>
                </h5>
                <h6>
                    <Link to="/reset">Forgot password ?</Link>
                </h6>

            </div>
        </div>
    )
}

export default Signin
