import { useState } from "react";

const Title = () => (
       <h1>FoodByte</h1>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
       <div className="header">
        <Title/>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
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