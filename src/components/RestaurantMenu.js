import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import {RES_IMG} from "../components/config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const [restaurant,setRestaurant] = useState(null);

    useEffect(()=>{
       getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId="+
        resId
        );
        const json = await data.json();
        console.log(json);
        setRestaurant(json);
    }

    return (!restaurant)?<Shimmer/>:(
        <div className="restaurant-info">
          <div className="card">
            <h1>Restaurant Id: {resId}</h1>
            <img src={RES_IMG+restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}
                 alt="Restaurant Image"/>
            <h1>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h1>
            <h4>{restaurant?.data?.cards[0]?.card?.card?.info?.areaName+" , "+
                 restaurant?.data?.cards[0]?.card?.card?.info?.city}</h4>
            <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.cuisines?.join(", ")}</h3>
            <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>

           </div>
           <div>
             <h1>Menu</h1>
             <ul>
               {restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
                (item)=><li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)}
             </ul>
           </div>
        </div>
        
    )
}

export default RestaurantMenu;