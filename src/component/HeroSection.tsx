
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-end"
      style={{ backgroundImage: "url('https://i.postimg.cc/hvr6QGB8/bg-Vision.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Text Content */}
      <div className="container mx-auto px-6 relative z-10 text-white text-center mb-auto mt-10">
        <div className="flex justify-between">
          {/* Left Text Section */}
          <div className="max-w-sm text-left">
            <h2 className="text-2xl font-bold">Vision</h2>
            <p className="mt-2 text-sm">To become a smart electric vehicle brand that strongly promotes the global electric vehicle revolution.</p>
          </div>
          
          {/* Right Text Section */}
          <div className="max-w-sm text-right">
            <h2 className="text-2xl font-bold">Brand Philosophy</h2>
            <p className="mt-2 text-sm">Putting customers at the center, VinFast constantly innovates to create high-class products and excellent experiences for everyone.</p>
          </div>
        </div>
      </div>
      
      {/* Scooter Images */}
      <div className="relative z-10 flex justify-center items-center gap-6 mt-10 mb-10">
        <img src="https://i.postimg.cc/R0kjj8dt/img-Bike.png" alt="Blue Scooter" className="w-60 md:w-72 lg:w-80" />
        <img src="https://i.postimg.cc/7ZWvNbTm/Bike-3.png" alt="Red Scooter" className="w-60 md:w-72 lg:w-80" />
      </div>
    </div>
  );
};

export default HeroSection;