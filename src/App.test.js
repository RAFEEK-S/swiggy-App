import { fireEvent, getAllByTestId, render, screen } from "@testing-library/react";
import App from "./App";
import Grocery from "./components/Grocery";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { BrowserRouter } from "react-router-dom";
//import MOCK_DATA from "./components/mocks/resCardMocks.json";
import RestaurantCards from "./components/RestaurantCards";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
 //import MOCKSS_DATA from "./components/mocks/resGroupMocks.json";
import { act } from "react";
import { EnhancedRestaurants } from "./components/RestaurantCards";
import MOCK_DATA_NAME from "./components/mocks/resMockMenu.json";
import RestaurantCategory from "./components/RestaurantCategory";
 
// // import ItemList from "./components/ItemList";
// test("renders learn react link", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />;
//       </Provider>
//     </BrowserRouter>
//   );
//   // const divs = screen.getByText(/grocery page/i);
//   // expect(divs).toBeInTheDocument();
// });
// test("renders item with cart items", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />;
//       </Provider>
//     </BrowserRouter>
//   );
//   const cartItems = screen.getByText("cart: 0 items");
//   expect(cartItems).toBeInTheDocument();
// });
// test("renders item with random cart items", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />;
//       </Provider>
//     </BrowserRouter>
//   );
//   const cartItems = screen.getByText(/cart/);
//   expect(cartItems).toBeInTheDocument();
// });
// test("renders item with random resData", () => {
//   render(<RestaurantCards resList={MOCK_DATA} />);
//   const resInfo = screen.getByText("Theobroma");
//   expect(resInfo).toBeInTheDocument();
// });
// const EnhancedBody = EnhancedRestaurants(Body);
// beforeEach(() => {
//   global.fetch = jest.fn(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(MOCKSS_DATA),
//     })
//   );
// });

// afterEach(() => {
//   jest.resetAllMocks();
// });
// test("renders enhancebody component", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <EnhancedBody />
//       </BrowserRouter>
//     )
//   );

//   const cards = screen.getAllByTestId("resGroup");
//   expect(cards.length).toBe(28);
// });


beforeEach(() => {
  // Reset fetch mock before each test
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA_NAME),
    })
  );
});

test("renders resmenu component and expands Recommended category", async () => {
  // Your render logic
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Korean Spicy Fest(Limited Time Only) (20)")

 
})

  

 

 
