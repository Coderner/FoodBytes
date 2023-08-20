import { useState } from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/img/Logo.png";
import { useSelector } from "react-redux/es/hooks/useSelector";


const Title = () => (
       <img className="h-24 px-3 py-2" alt="logo" src={Logo}/>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const cartItems = useSelector(store => store.cart.items);
    
    return(
       <div className="flex justify-between shadow-md w-full">
        <Title/>
        <div className="nav-items">
          <ul className="flex py-10">
            <Link to="/"><li className="px-2 hover:text-red-600 font-semibold">Home</li></Link>
            <Link to="/about"><li className="px-2  hover:text-red-600 font-semibold">About</li></Link>
            <Link to="/contact"><li className="px-2  hover:text-red-600 font-semibold">Contact</li></Link>
            <Link to="/cart"><li className="px-2  hover:text-red-600 font-semibold">Cart-{cartItems.length} items</li></Link>
          </ul>
        </div>
        {
          isLoggedIn?<button 
                    className="my-8 mx-6 py-1 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md"
                     onClick={() => setIsLoggedIn(false)}>Logout</button>: 
                     <button 
                     className="my-8 mx-6 py-1 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md"
                     onClick={() => setIsLoggedIn(true)}>Login</button>
        }
       </div>
    )
};

export default Header;