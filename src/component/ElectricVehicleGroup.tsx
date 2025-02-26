export default function ElectricVehicleGroup() {
    return (
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 lg:px-16 py-10 bg-white">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold text-black">
            THE WORLD'S LEADING ELECTRIC VEHICLE GROUP
          </h1>
          <p className="text-gray-700 mt-4">
            Founded in 2001, with over 23 years of experience in the industry, 
            Bike-Bike is proud to be the No. 1 global brand in sales for 7 
            consecutive years, specializing in distributing electric motorbikes, 
            electric bicycles, and scooters.
          </p>
  
          <div className="mt-6 space-y-3">
            <p className="text-black font-semibold">
              Bike-Bike is present in <span className="text-blue-600">100+</span> Countries & regions
            </p>
            <p className="text-black font-semibold">
              Supplying <span className="text-blue-600">80+ million</span> Users
            </p>
            <p className="text-black font-semibold">
              Network: <span className="text-blue-600">40,000+</span> Stores worldwide
            </p>
          </div>
  
          <p className="mt-6 text-gray-700">
            With the mission of <span className="text-green-600">"Green Future, New Speed"</span>, Bike-Bike focuses & 
            innovates advanced technology to provide users with green mobility solutions, 
            creating a sustainable future.
          </p>
        </div>
  
        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <img
            src="https://i.postimg.cc/8kBHS3wS/Bike-2.png"
            alt="Electric Scooter"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    );
  }
  