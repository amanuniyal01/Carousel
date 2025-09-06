import { useState } from "react";

const Carousel = () => {
  const data = [
    { id: 1, url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", alt: "Mountain Landscape" },
    { id: 2, url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d", alt: "Beach Sunset" },
    { id: 3, url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", alt: "Ocean Waves" },
    { id: 4, url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c", alt: "Forest Path" },
    { id: 5, url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664", alt: "City Skyline" },
    { id: 6, url: "https://images.unsplash.com/photo-1465101162946-4377e57745c3", alt: "Desert Dunes" },
    { id: 7, url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", alt: "Snowy Mountains" },
    { id: 8, url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", alt: "Green Hills" },
    { id: 9, url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", alt: "Lakeside View" },
    { id: 10, url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429", alt: "Starry Night Sky" },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full px-4">
      {/* Image and Buttons */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
        {/* Previous Button */}
        <button
          onClick={previousSlide}
          className="px-2 py-1 sm:px-3 sm:py-2 bg-gray-800 text-white rounded-full"
        >
          ◀️
        </button>

        {/* Image Box */}
        <div className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[500px] lg:max-w-[700px] aspect-video overflow-hidden rounded-lg shadow-lg flex items-center justify-center bg-black">
          <img
            src={data[current].url}
            alt={data[current].alt}
            className="w-full h-full object-cover transition duration-500"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="px-2 py-1 sm:px-3 sm:py-2 bg-gray-800 text-white rounded-full"
        >
          ▶️
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-2 mt-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${
              current === index ? "bg-gray-800 scale-110" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
