import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import {RES_IMG} from "../components/config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import {FaPlus} from "react-icons/fa";
import Swal from "sweetalert2";

const RestaurantMenu = () =>{
    const {resId} = useParams();
   
    const restaurant = useRestaurant(resId);

    const dispatch = useDispatch();

    const addFoodItem = (item) =>{
          dispatch(addItem(item));
          Swal.fire({
            title: 'Added successfully!',
            text: 'Item added to the cart successfully!!',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
    }

    return (!restaurant)?<Shimmer/>:(
        <div className="flex">
          <div className="w-3/6 p-8 m-10 h-96 shadow-md bg-red-50 flex">
            <img src={RES_IMG+restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}
                 alt="Restaurant Image"
                 className="h-80"/>
            <div className="mx-16">
             <h1 className="font-semibold text-4xl my-1">{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h1>
             <h4 >{restaurant?.data?.cards[0]?.card?.card?.info?.areaName+" , "+
                 restaurant?.data?.cards[0]?.card?.card?.info?.city}</h4>
             <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.cuisines?.join(", ")}</h3>
             <h3 className="text-md font-semibold">{restaurant?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            </div>
          </div>
           <div className="my-10 mx-4">
             <h1 className="text-xl font-semibold">Menu</h1>
             <ul className="my-4">
               {restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
                (item)=><li key={item?.card?.info?.id} 
                  className="flex justify-between font-medium p-2 my-1 border border-black" >
                  <div className="flex">
                  <img className="h-10 mx-1"
                    src={RES_IMG+item?.card?.info?.imageId}/>
                  {item?.card?.info?.name}
                  </div>
                  <button className="py-1 px-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md flex"
                   onClick={()=>addFoodItem(item)}>Add<FaPlus className="mt-1 mx-1"/></button>
                </li>)}
             </ul>
           </div>
        </div>
        
    )
}

export default RestaurantMenu;