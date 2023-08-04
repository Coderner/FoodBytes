import { useState } from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/img/Logo.png";

const Title = () => (
       <img
        className="logo" 
        alt="logo"
        src={Logo}/>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
       <div className="header">
        <Title/>
        <div className="nav-items">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <li>Cart</li>
          </ul>
        </div>
        {
          isLoggedIn?<button onClick={() => setIsLoggedIn(false)}>Logout</button>: 
                     <button onClick={() => setIsLoggedIn(true)}>Login</button>
        }
       </div>
    )
};

export default Header;