import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);

  const [showItems, setShowItems] = useState(true);
  console.log(showItems);

  

  const { name, city, cuisines } = menu?.cards?.[2].card?.card?.info || {};
  //const {itemCards} = menu?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.[2].card?.card || {};

  const category =
    menu?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (items) =>
        items?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(category)

  return (
    <>
      <div  className="text-center">
        <h1>{name}</h1>
        <p>{city}</p>
        <p>{cuisines?.join(",")}</p>
        {category?.map((categories, index) => (
          <RestaurantCategory
            key={index}
            data={categories?.card?.card}
            showItems={showItems === index? true:false}
            setShowItems={() => setShowItems(index)}
          />
        ))}
      </div>
    </>
  );
}

export default RestaurantMenu;
