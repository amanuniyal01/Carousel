import { useState } from "react";

const Carousel = () => {
  const data = [
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1506671753197-8d137cc5d53c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      {/* Previous Button */}
      <button
        onClick={previousSlide}
        className="px-4 py-2 bg-gray-800 text-white rounded-full"
      >
        ◀️
      </button>

      {/* Fixed-size box */}
      <div className="w-126 h-94 overflow-hidden rounded-lg shadow-lg flex items-center justify-center bg-black">
        <img
          src={data[current]}
          alt={`slide-${current}`}
          className="w-full h-full object-cover transition duration-500"
        />
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="px-4 py-2 bg-gray-800 text-white rounded-full"
      >
        ▶️
      </button>
    </div>
  );
};

export default Carousel;
