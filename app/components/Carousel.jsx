"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  let imageKeys = [];
  let visibleImages = [];
  let imagesLength = 0;

  if (images && typeof images === "object") {
    imageKeys = Object.keys(images);
    visibleImages = imageKeys.slice(0, 4);
    imagesLength = imageKeys.length;
  }

  const openCarousel = () => {
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        goToPreviousImage();
      } else if (event.key === "ArrowRight") {
        goToNextImage();
      } else if (event.key === "Escape") {
        closeCarousel();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageKeys.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageKeys.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mb-12 mt-6 flex justify-center">
      <div className="carousel-trigger" onClick={openCarousel}>
        <div className="thumbnail-container grid grid-cols-2 grid-rows-2 cursor-pointer">
          {visibleImages.map((key, index) => (
            <div
              key={index}
              className={`thumbnail ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="carousel-thumbnail flex">
                <Image
                  src={images[key]}
                  alt={`Image ${index + 1}`}
                  width={175}
                  height={175}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black opacity-75 z-10 bg-white h-10 py-12 px-8 drop-shadow-2xl flex">
            <div className="flex items-center">
              Visualiser les {imagesLength} images
            </div>
          </div>
        </div>
      </div>
      {isCarouselOpen && (
        <div className="carousel-overlay">
          <div className="carousel-container">
            <div className="image-container relative">
              <Image
                src={images[imageKeys[currentIndex]]}
                alt={`Image ${currentIndex + 1}`}
                width={1000}
                height={1000}
                style={{ objectFit: "cover" }}
                className="carousel-container-image"
              />
              <button
                className="flex items-center absolute top-1/2 left-8 transform -translate-y-1/2 -translate-x-2 text-white h-10 py-2 px-2 drop-shadow-2xl cursor-pointer"
                onClick={goToPreviousImage}
              >
                <ArrowBackIcon style={{ fontSize: "4rem" }} />
              </button>
              <button
                className="flex items-center absolute top-1/2 right-8 transform -translate-y-1/2 translate-x-2 text-white py-2 px-2 drop-shadow-2xl cursor-pointer"
                onClick={goToNextImage}
              >
                <ArrowForwardIcon style={{ fontSize: "4rem" }} />
              </button>
              <button
                className="flex items-center absolute top-8 right-8 transform translate-y-2 translate-x-2 text-white h-10 py-2 px-2 drop-shadow-2xl cursor-pointer"
                onClick={closeCarousel}
              >
                <CloseIcon style={{ fontSize: "4rem" }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
