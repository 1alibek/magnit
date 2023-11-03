import { createContext, useState, useEffect } from "react";

export const LikedContext = createContext('');

const LikedProvider = ({ children }) => {
  const storage = localStorage.getItem("liked");
  const [liked, setLiked] = useState(JSON.parse(storage) || []);

  const setProductToStoragee = (data) => {
    setLiked([...liked, data]);
  };
  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(liked));
  }, []);

  return (
    <LikedContext.Provider value={{setProductToStoragee, liked ,setLiked}}>
      {children}
    </LikedContext.Provider>
  );
};

export default LikedProvider;