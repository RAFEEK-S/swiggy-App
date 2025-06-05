import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

function Header() {
  const { logginUser } = useContext(userContext);
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)
  // const userName = logginUser?.name || "Guest";
  return (
    <>
      <div className="flex justify-around mt-3 bg-blue-400 h-20 items-center ">
        <div>logo</div>
        <div>
          <ul className="flex mx-4">
            <Link to="./">
              <li className="px-4">Home</li>
            </Link>
            <Link to="/about">
              <li className="px-4">About Us</li>
            </Link>
            <li className="">Contact</li>
            <Link to="./grocery">
              <li className="px-4">Grocery</li>
            </Link>
            <li className="px-4">Login</li>
            <li className="px-4">cart: {cartItems.length} items</li>
            <li className="px-4">{logginUser}</li>
            {/* {logginUser?.map((user) => {
              return (
                
                <ul key={user.name}>
                  <li className="px-4">{user?.name}</li>
                  <li className="px-4">{user?.age}</li>
                  <li className="px-4"></li>
                </ul>
              
              );
            })} */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
