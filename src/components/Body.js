// import { useEffect, useState } from "react";
import RestaurantCards from "../components/RestaurantCards";
 import { RES_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import React, { useContext } from "react";
import { EnhancedRestaurants } from "../components/RestaurantCards";
const Body = ({ restaurants }) => {
  const { logginUser, setUserName } = useContext(userContext);

  // const [swiggy, setSwiggy] = useState([]);
  // //console.log(swiggy)

  // useEffect(() => {
  //   resInfo();
  // }, []);

  // const resInfo = async () => {
  //   const result = await fetch(RES_URL);
  //   const json = await result.json();
  //   //console.log(json)
  //   setSwiggy(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>YOU ARE OFFlINE IT SEEMS ...</h1>;
  }
  return (
    <>
      <label htmlFor="rafeeek">NAME:</label>
      <input
        className="border-b-2 border-none outline-none bg-slate-100 p-2"
        type="text"
        value={logginUser}
        placeholder="search"
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <div  className="md:flex flex-wrap justify-center">
        {restaurants.map((resList, index) => {
          return (
            <Link key={index} to={"/restaurants/" + resList.info.id}>
              <RestaurantCards resList={resList} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default EnhancedRestaurants(Body);
