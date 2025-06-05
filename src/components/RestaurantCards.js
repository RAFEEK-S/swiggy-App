import { useEffect, useState } from "react";
import { IMG_URL } from "../utils/Constants";
 import React, { useContext } from "react";
 import userContext from "../utils/userContext";
import { RES_URL } from "../utils/Constants";
function RestaurantCards({ resList }) {
  // const {logginUser} = useContext(userContext);
// console.log(resList)
  //console.log(resList.info.name)
  return (
    <>
      <div data-testid="resGroup" className=" border mx-3 my-4 w-[300px]     ">
        <div>
          <img
            src={IMG_URL + resList.info.cloudinaryImageId}
            className="rounded-lg h-[200px] w-[300px] object-cover"
            alt="cardImages"
          />
        </div>
        <div className=" ">
          <ul className="px-1 py-3 text-wrap">
            <li className="">{resList.info.name}</li>
            <li className="">{resList.info.costForTwo}</li>
            <li className="">{resList.info.cuisines.join(",")}</li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default RestaurantCards;
export const EnhancedRestaurants = (WrappedComponent) => {
  const EnhancedComponent = () => {
    const [swiggy, setSwiggy] = useState([]);
    console.log(swiggy);
    //console.log(swiggy)

    

    const resInfo = async () => {
      const result = await fetch(RES_URL);
      const json = await result.json();
      //console.log(json)

      const restaurant1 =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
          console.log(restaurant1)
      const restaurant2 =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
          console.log(restaurant2)
      const merged = [...(restaurant1 || []), ...(restaurant2 || [])];
      setSwiggy(merged);
    };
    
    useEffect(() => {
      resInfo();
    }, []);
    return <WrappedComponent restaurants={swiggy} />;
  };
  return EnhancedComponent;
};
