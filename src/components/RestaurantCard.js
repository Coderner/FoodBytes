import { IMG_CDN_URL } from "./config";
const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    locality
}) =>{
    return(
       <div className="w-60 p-2 m-3 h-96 shadow-md bg-red-50">
           <img className="h-64 my-2" src={IMG_CDN_URL+cloudinaryImageId}/>
           <h2 className="font-semibold text-l">{name}</h2>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{locality}</h4>
       </div>
    )
}

export default RestaurantCard;