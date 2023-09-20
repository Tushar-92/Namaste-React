import {RestaurantCard , withTopRatedLabel} from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {

  //Local State Variable i.e Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText , setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantWithTopRatedLabel = withTopRatedLabel(RestaurantCard);

  //Whenever the state variable update, react triggers a reconciliation cycle(re-render the component)
  console.log("Body Rendered");

  //Using useEffect 
  useEffect(()=>{
    fetchData();
  } , []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonedData = await data.json(); // Await bcz this method also returns Promise. 
    console.log(jsonedData); //For Self Analysis
    console.log(jsonedData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants); //For Self Analysis
    setListOfRestaurant(jsonedData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(jsonedData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  if(onlineStatus === false) return <h1>Look's Like You Are Offline!! Please Check Your Internet Connection</h1>

  // Below is also known as Conditional Rendering:-- i.e if you have a condition and then you render according to the given condition then this is known as Conditional Rendering
  // if(listOfRestaurants.length === 0) {
  //   return <Shimmer />
  // }
  //Now ab isi Conditional Rendering ko niche diye hue return me ternary operation k sath fit kar de rahe. This is an industry standard. Actualy dono to return hi kar rahe the isliye eksath club kiye inko.


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-3 py-1 bg-green-100 rounded-lg"
            onClick={() => {
              // console.log(searchText); For Self Analysis
              const filteredRestaurantList = listOfRestaurants.filter(
                (restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setFilteredRestaurant(filteredRestaurantList);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-4 p-4">
          <button
            className="filter-btn px-1 py-1 bg-slate-400 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((restaurant) => {
                return restaurant.info.avgRating > 4;
              });
              setListOfRestaurant(filteredList);
              // console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating >= 4.5 ? (
              <RestaurantWithTopRatedLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
