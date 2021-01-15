import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'

function Signup() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const history = useHistory()

    const postdata = () => {

        fetch('/Signup', {
            method: "post",
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
            headers:
            {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json())
            .then((data) => {
                if (data.err) {
                    M.toast({ html: 'Sign up  failed!!', classes: '#d32f2f red darken-2' })
                }
                else {
                    history.push('/Signin')
                    M.toast({ html: 'Signed Up Sucessfully', classes: '#4caf50 green' })
                }
            }).catch(err => {
                console.log(err)
            })





    }



    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="name"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}


                />

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

                <div className="file-field input-field">


                </div>
                <button onClick={() => postdata()} className="btn waves-effect waves-light #64b5f6 blue darken-1">


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
