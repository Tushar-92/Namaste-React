import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
  

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const jsonedData = await data.json();
    console.log(jsonedData); // For Self Analysis
    setResInfo(jsonedData.data);
  };

  /* Below is the Correct Way to destructure the property from fetch object but pata nahi kyn ye insab data ko destructure nahi kar pa raha isliye niche directly value nikal rahe ek ek kar k.
  const { name, costForTwoMessage, cuisines } = resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; //this will give the array of objects so that we can iterate now through dishes one by one.
  console.log(itemCards); //For Self Analysis
  */

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu">
      <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
      <h3>{resInfo?.cards[0]?.card?.card?.info.cuisines.join(",")}</h3>
      <h3>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards.map(
          (item) => (
            <li key={item.card.info.id} /*NOTE:- Never Forget to provide "key" to the element when using Array.map method.*/>  
              {item.card.info.name} - Rs.{item.card.info.price / 100}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;