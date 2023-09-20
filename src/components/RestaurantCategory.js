import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {

    const [showItem , setShowItem] = useState(false);
    
    const handleClick = () => {
      setShowItem(!showItem);
    }

    let {data} = props;
    // console.log(data); for self analysis

    return (
      <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
          {/* Below is for Accordion header */}
          <div className="flex justify-between font-bold" onClick={handleClick}>
            <span>
              {data?.title} ({data?.itemCards.length})
            </span>
            <span>⬇️</span>
          </div>

          {/* Below is for Accordion body which contains the list of food items in a particular category*/}
          {showItem && <ItemList items={data?.itemCards} />}
        </div>
      </div>
    );
    
}

export default RestaurantCategory;