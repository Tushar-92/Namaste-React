import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  //Local State Variable i.e Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          const filteredList = listOfRestaurants.filter((restaurant) => {
            return restaurant.info.avgRating > 3.5 
          });
          setListOfRestaurant(filteredList);
          // console.log(filteredList);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
