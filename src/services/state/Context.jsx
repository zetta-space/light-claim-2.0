import { useState, createContext } from "react";

export const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [image, setImage] = useState([]);

  const updateImage = (uri) => {
    setImage((current) => [...current, { uri }]);
  };

  return (
    <ImageContext.Provider value={{ image, updateImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
