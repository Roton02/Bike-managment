import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    img: "https://i.postimg.cc/59nKF3kL/img-History.png",
    title: "Bike-Bike officially listed on Nasdaq Global Select Market",
    date: "15.08.2023",
  },
  {
    img: "https://i.postimg.cc/59nKF3kL/img-History.png",
    title: "Bike-Bike officially delivers VF5 Plus cars to customers",
    date: "21.06.2023",
  },
  {
    img: "https://i.postimg.cc/59nKF3kL/img-History.png",
    title: "VinFast officially delivers VF8 cars to customers",
    date: "27.03.2023",
  },
  {
    img: "https://i.postimg.cc/59nKF3kL/img-History.png",
    title: "VinFast launches its new generation electric motorbike models using LFP batteries.",
    date: "26.04.2022",
  },
  {
    img: "https://i.postimg.cc/59nKF3kL/img-History.png",
    title: "Conquering Sa Vi - the northeasternmost point of the country, honored with the record 'The first electric caravan in Vietnam'.",
    date: "07.04.2022",
  },
];

export default function BrandHistoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">BRAND HISTORY</h2>
      
      <div className="relative flex items-center overflow-hidden">
        <div className="flex gap-4 overflow-hidden w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`relative transition-transform duration-500 ease-in-out transform ${
                index === currentIndex ? "scale-100" : "scale-90 opacity-50"
              } flex-shrink-0 w-1/5`}
              style={{ minWidth: "20%" }}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white rounded-lg">
                <p className="text-sm mb-8">{slide.title}</p>
                <p className="text-gray-300 text-xs mt-1">{slide.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
        <div className="flex justify-center gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
        <div className="w-24 h-0.5 bg-gray-400 mt-2"></div>
        <div className="flex justify-between w-full max-w-5xl mt-4">
          <button
            onClick={prevSlide}
            className="p-2 bg-white shadow-md rounded-full"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-white shadow-md rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
