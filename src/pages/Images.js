import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ImageCard from "../components/ImageCard";
import BottomNavbar from "../components/BottomNavbar.js";

const Images = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("nature");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <>
      <BottomNavbar searchText={(text) => setTerm(text)} />
      <div className="container mx-auto flex justify-center flex-col items-center mt-24">
        {!isLoading && images.length === 0 && (
          <h1 className="text-6xl text-center mx-auto mt-10">NOT FOUND</h1>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid px-4 grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Images;
