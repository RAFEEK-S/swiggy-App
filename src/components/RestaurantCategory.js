import ItemList from "./ItemList";

function RestaurantCategory({ data, showItems, setShowItems }) {
  //console.log(data)

  const handleClick = () => {
    setShowItems();
  };
  return (
    <>
      <div className="w-6/12 m-auto bg-gray-100 my-6 ">
        <div
         
          className=" flex justify-between p-4 font-bold items-center shadow-md cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {data?.itemCards?.map(
          (dishList, index) =>
            showItems && <ItemList key={index} dishList={dishList} />
        )}
      </div>
    </>
  );
}

export default RestaurantCategory;
