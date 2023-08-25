import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  //Local State Variable i.e Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText , setSearchText] = useState("");

  //Whenever the state variable update, react triggers a reconciliation cycle(re-render the component)
  console.log("Body Rendered");

  //Using useEffect 
  useEffect(()=>{
    fetchData();
  } , []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2837754&lng=83.1155672&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonedData = await data.json();
    console.log(jsonedData); //For Self Analysis
    // console.log(jsonedData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants); //For Self Analysis
    // setListOfRestaurant(jsonedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredRestaurant(jsonedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // Below is also known as Conditional Rendering:-- i.e if you have a condition and then you render according to the given condition then this is known as Conditional Rendering
  // if(listOfRestaurants.length === 0) {
  //   return <Shimmer />
  // }
  //Now ab isi Conditional Rendering ko niche diye hue return me ternary operation k sath fit kar de rahe. This is an industry standard. Actualy dono to return hi kar rahe the isliye eksath club kiye inko.


  return listOfRestaurants.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}></input>
          <button onClick={()=>{
            // console.log(searchText); For Self Analysis
            const filteredRestaurantList = listOfRestaurants.filter((restaurant)=>{
              return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setFilteredRestaurant(filteredRestaurantList);
          }}>Search</button>
        </div>

        <button className="filter-btn" onClick={()=>{
          const filteredList = listOfRestaurants.filter((restaurant) => {
            return restaurant.info.avgRating > 3.5 
          });
          setListOfRestaurant(filteredList);
          // console.log(filteredList);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
