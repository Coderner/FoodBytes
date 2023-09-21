import { useSelector } from "react-redux/es/hooks/useSelector";
import {RES_IMG} from "../components/config";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import {FaRegTrashAlt} from "react-icons/fa";

const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
          dispatch(clearCart());
    }
    return(
        <div className="m-5">
            <h1 className="font-semibold text-4xl text-red-500 my-3">Cart-Items </h1>
            <div className="shadow-md bg-red-50 m-8 p-6">
                  <h1 className="font-semibold text-2xl text-green-600 my-3">Cart Summary:</h1>
                  <div className="flex my-2">
                          <h1 className="text-xl">Total items in cart: {cartItems.length}</h1>
                          <button 
                              className=" mx-6 py-1 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md flex"
                              onClick={()=>handleClearCart()}>
                              Clear Cart <FaRegTrashAlt className="mt-1 mx-2"/>
                          </button>
                  </div>
                  <div className="flex">
                  {cartItems.map((item)=>
                      <div key={item?.card?.info?.id} className="flex p-2 w-96 m-2">
                          <img className="h-16 m-1"
                          src={RES_IMG+item?.card?.info?.imageId}/>
                          <div>
                           <h1 className="font-semibold px-2 py-1">{item?.card?.info?.name}</h1>
                           <p className="px-2 font-medium">Rs. {(item?.card?.info?.price)/100}</p>
                          </div>
                      </div>
                  )}
                  </div>
            </div>
        </div>
    )
}

export default Cart;