import  { useEffect, useState } from 'react';
import { MENU_URL } from '../utils/Constants';
function useRestaurantMenu(resId) {

    const[menu,setMenu]= useState("null")
    //console.log(menu)

useEffect(()=>{
    resMenu();
  },[])

  const resMenu = async () =>{
        const output = await fetch(MENU_URL+resId)
        const final = await output.json()
        //console.log(final);
        setMenu(final.data);
        
  }

  return menu;


}

export default useRestaurantMenu;