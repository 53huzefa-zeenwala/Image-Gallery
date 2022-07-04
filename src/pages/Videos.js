import React, { useEffect, useState } from "react";
import BottomNavbar from "../components/BottomNavbar";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";

const Videos = () => {
  const [Videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("nature");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://pixabay.com/api/videos/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.hits);
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <>
    <BottomNavbar searchText={(text) => setTerm(text)} />
      <div className="container mx-auto flex justify-center flex-col items-center mt-24">
        {!isLoading && Videos.length === 0 && (
          <h1 className="text-6xl text-center mx-auto mt-10">NOT FOUND</h1>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid px-4 grid-cols-1 md:grid-cols-3 gap-4">
            {Videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Videos;
