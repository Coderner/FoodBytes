import RestaurantCard from "./RestaurantCard";
import {restrauntList} from "./config";

const Body = () =>{
    return(
        <div className="restraunt-list">
           { restrauntList.map((restraunt)=>{
            return <RestaurantCard {...restraunt.info} key={restraunt.info.id}/>
           })}
        </div>
    )
}

export default Body;