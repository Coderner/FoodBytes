import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../components/config";

const useRestaurant = (resId) =>{
    const [restaurant,setRestaurant] = useState(null);

    useEffect(()=>{
       getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch(FETCH_MENU_URL+resId);
        const json = await data.json();
        console.log(json);
        setRestaurant(json);
    }

    return restaurant;
}

export default useRestaurant;