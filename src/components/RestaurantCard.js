import {CDN_URL} from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData.info?.sla;

  return (
    <div
      className="m-2 p-2 w-[300] h-[400] rounded-lg bg-gray-100 hover:bg-gray-300"
    >
      <img className="h-[200] w-[300] rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};


export const withTopRatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Top Rated</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
};

