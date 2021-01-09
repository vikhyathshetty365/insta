import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                    <a className="insta-title" href="/" class="brand-logo">Instantgram</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/profile" >Profile</Link></li>
                        <li><Link to="/Signin" >Signin</Link></li>
                        <li><Link to="/Signup">Signup</Link></li>
                        <li><Link to="/createpost">Create Post</Link></li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Nav
