import React from "react";
import { IMG_URL } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
function ItemList({ dishList }) {
 const dispatch= useDispatch(dishList)
  const handleClick = (dishList) =>{
        dispatch(addItems(dishList))
  }
  return (
    <>
      <div className="flex justify-between border-b-slate-400 border-b-2 items-center p-4 rounded ">
        <div className="relative w-2/12">
          <img
            src={IMG_URL + dishList?.card?.info?.imageId}
            className="  object-cover  rounded"
            alt="image-list"
          />
          <div className=" px-4 absolute -bottom-3 left-12 bg-white text-green-500 rounded font-bold text-lg">
            <button onClick={() => handleClick(dishList)}>ADD</button>
          </div>
        </div>
        <div className=" text-lg w-8/12 ">
          <span className="font-bold">{dishList?.card?.info?.name}</span>
          <span>{dishList?.card?.info?.price / 100}</span>
          <p>{dishList?.card?.info?.description}</p>
        </div>
      </div>
    </>
  );
}

export default ItemList;
