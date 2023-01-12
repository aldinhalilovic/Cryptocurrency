import { createContext, useState } from "react";
import Toast from "react-native-toast-message";

const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const [currentPlace, setCurrentPlace] = useState("All");
  const [dataLimit, setDataLimit] = useState("10");

  function addToFavourites(element) {
    if (favourites.find((el) => el.uuid === element.uuid)) {
      setFavourites((prev) => prev.filter((el) => el.uuid !== element.uuid));
      removedFromFavourites();
    } else {
      setFavourites((prev) => [...prev, element]);
      addedToFavourites();
    }
  }

  function addedToFavourites() {
    Toast.show({
      text1: "You have added coin to favourite page",
      position: "bottom",
      visibilityTime: 2500,
    });
  }

  function removedFromFavourites() {
    Toast.show({
      type: "error",
      text1: "You have removed coin from favourite page",
      position: "bottom",
      visibilityTime: 2500,
    });
  }

  const values = {
    favourites,
    addToFavourites,
    setCurrentPlace,
    currentPlace,
    dataLimit,
    setDataLimit,
  };

  return <CoinContext.Provider value={values}>{children}</CoinContext.Provider>;
};

export { CoinContext, CoinContextProvider };
