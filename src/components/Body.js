import RestaurantCard from "./RestaurantCard";
import {restrauntList} from "./config";
import {useState} from "react";

function filterData(searchText, restaurants){
  const filterData= restaurants.filter((restaurant)=> restaurant.info.name.includes(searchText));
  return filterData;
}

const Body = () =>{

    const [restaurants,setRestaurants] = useState(restrauntList);
    const [searchText,setSearchText] = useState("");
    
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