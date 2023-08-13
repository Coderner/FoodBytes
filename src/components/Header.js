import { useState } from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/img/Logo.png";

const Title = () => (
       <img className="h-24 px-3 py-2" alt="logo" src={Logo}/>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return(
       <div className="flex justify-between shadow-md">
        <Title/>
        <div className="nav-items">
          <ul className="flex py-10">
            <Link to="/"><li className="px-2 hover:text-red-600 font-semibold">Home</li></Link>
            <Link to="/about"><li className="px-2  hover:text-red-600 font-semibold">About</li></Link>
            <Link to="/contact"><li className="px-2  hover:text-red-600 font-semibold">Contact</li></Link>
            <li className="px-2  hover:text-red-600 font-semibold">Cart</li>
          </ul>
        </div>
        {
          isLoggedIn?<button className="px-6" onClick={() => setIsLoggedIn(false)}>Logout</button>: 
                     <button className="px-6" onClick={() => setIsLoggedIn(true)}>Login</button>
        }
       </div>
    )
};

export default Header;