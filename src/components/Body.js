import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants){
  const filterData= restaurants.filter((restaurant)=> restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
  return filterData;
}

const Body = () =>{
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

        console.log(allRestaurants);
    }
    
    return (allRestaurants?.length===0)?<Shimmer/>:(
        <>
            <div className="search-container">
                 <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search" 
                  value={searchText}
                  onChange={(e)=>{
                    setSearchText(e.target.value)
                  }}
                 />
                 <button className="search-btn" onClick={()=>{
                     const data= filterData(searchText,allRestaurants);
                     setFilteredRestaurants(data);
                 }}>
                    Search</button>
            </div>
            {(filteredRestaurants?.length===0)?<h1>No Restaurant matches your Search</h1>:
             <div className="restraunt-list">
             { filteredRestaurants.map((restraunt)=>{
                 return <RestaurantCard {...restraunt.info} key={restraunt?.info?.id}/>
             })}
            </div>
            }
        </>
    )
}

export default Body;