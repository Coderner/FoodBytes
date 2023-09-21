import { IMG_CDN_URL } from "./config";
import {FaStar} from "react-icons/fa";

const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    locality,
    avgRating
}) =>{
    return(
       <div className="w-60 p-2 m-3 h-80 shadow-md bg-red-50">
           <img className="h-44 w-56 my-2" src={IMG_CDN_URL+cloudinaryImageId}/>
           <h3 className="font-semibold text-l">{name}</h3>
           <h3 className="font-semibold text-sm">{locality}</h3>
           <h6 className="text-sm">{cuisines.join(", ")}</h6 >
           <h6 className="flex text-sm">{avgRating} <FaStar className="text-yellow-600 mt-1 mx-1"/></h6 >
       </div>
    )
}

export default RestaurantCard;