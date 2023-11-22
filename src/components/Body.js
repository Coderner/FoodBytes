import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
import {FaSearch} from "react-icons/fa";

const Body = ({user}) =>{
    const [allRestaurants,setAllRestaurants] =  useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
         getRestaurants();
    },[]);

    async function getRestaurants(){
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const online=useOnline();
    if(!online) return <h1>🔴 Offline!! Check your Internet connection</h1>
    
    return (allRestaurants?.length===0)?(<Shimmer/>):(
        <>
            <div className="search-container p-5 my-4 flex">
                 <input 
                  type="text" 
                  className="py-1 px-3 rounded-md border-2 w-1/4 focus:bg-green-50" 
                  placeholder="Search" 
                  value={searchText}
                  onChange={(e)=>{
                    setSearchText(e.target.value)
                  }}
                 />
                 <button 
                     className="mx-4 px-6 py-1 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md flex" 
                     onClick={()=>{
                     const data= filterData(searchText,allRestaurants);
                     setFilteredRestaurants(data);
                 }}>
                    <FaSearch className="mt-1 mx-1"/>Search</button>
            </div>
            
            
             <div className="flex flex-wrap px-2">
             { filteredRestaurants?.map((restraunt)=>{
                 return (
                 <Link to={"/restaurant/"+ restraunt?.info?.id} key={restraunt?.info?.id}>
                    <RestaurantCard {...restraunt.info}/>
                 </Link>
                 )
             })}

            </div>
            
        </>
    )
}

export default Body;