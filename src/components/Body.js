import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";

function filterData(searchText, restaurants){
  const filterData= restaurants.filter((restaurant)=> restaurant.info.name.includes(searchText));
  return filterData;
}

const Body = () =>{

    const [restaurants,setRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
         getRestaurants();
    },[]);

    async function getRestaurants(){
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json);
        setRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(restaurants);
    }
    
    return(
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
                     const data= filterData(searchText,restaurants);
                     setRestaurants(data);
                 }}>
                    Search</button>
            </div>
            <div className="restraunt-list">
             { restaurants.map((restraunt)=>{
                 return <RestaurantCard {...restraunt.info} key={restraunt.info.id}/>
             })}
            </div>

        </>
    )
}

export default Body;