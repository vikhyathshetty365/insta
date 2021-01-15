import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { Usercontext } from '../App'
import M from 'materialize-css'
const Nav = () => {

    const { state, dispatch } = useContext(Usercontext)
    const history = useHistory()
    const router = () => {


        console.log(state)

        if (state) {
            return [

                <li key="1"><Link to="/profile" >Profile</Link></li>,
                <li key="2"><Link to="/createpost">Create Post</Link></li>,
                <li key="5"><button className="btn #c62828 red darken-3" onClick={() => {
                    localStorage.clear()
                    dispatch({ type: 'CLEAR' })
                    history.push('/signin')

                }}>

                    Logout

                </button></li>
            ]
        }
        else {
            return [
                <li key="3"><Link to="/Signin" >Signin</Link></li>,
                <li key="4"><Link to="/Signup">Signup</Link></li>

            ]
        }
    }

    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                    <Link className="insta-title" to={state ? '/' : '/signin'}>Instagram</Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">

                        {router()}

                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Nav
