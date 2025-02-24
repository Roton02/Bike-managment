import Consultation from "@/component/Consultation";
import BikeCard from "@/components/bikeCard";
import { BikeData } from "@/interface/bikedata";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MoveLeft, MoveRight, Search } from "lucide-react";
import { useState, useMemo } from "react";
import bg from "../assets/img_Contact.png";

const Bikes = () => {
  // State for pagination and search
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const bikesPerPage = 8;

  // Fetch bike data
  const { data: bikes, isLoading, error } = useQuery({
    queryKey: ["all-bike"],
    queryFn: async () => {
      const res = await axios.get("/bike.json");
      return res.data;
    },
  });

  // Filter bikes based on search term
  const filteredBikes = useMemo(() => {
    if (!searchTerm) return bikes || [];
    return bikes?.filter((bike: BikeData) =>
      bike.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [bikes, searchTerm]);

  // Pagination logic
  const paginatedBikes = useMemo(() => {
    const startIndex = (currentPage - 1) * bikesPerPage;
    return filteredBikes?.slice(startIndex, startIndex + bikesPerPage);
  }, [filteredBikes, currentPage]);

  const totalPages = Math.ceil((filteredBikes?.length || 0) / bikesPerPage);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Failed to load data!</p>;

  return (
    <div className="mt-7">
      {/* Banner */}
      <div className="relative min-h-60 bg-cover bg-center shadow-sm shadow-black mb-8 flex flex-col justify-center items-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-4xl text-center text-white z-10">All Products</h1>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search for bikes..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Bikes Grid */}
      <div className="max-w grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {paginatedBikes?.map((bike: BikeData) => (
          <div key={bike.id} className="border p-2 rounded-lg shadow-lg">
            <BikeCard bike={bike} />
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6 mb-10">
        <button
          className="p-2 border-2 border-primary text-primary rounded-full disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <MoveLeft />
        </button>
        <span className="font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="p-2 border-2 border-primary text-primary rounded-full disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <MoveRight />
        </button>
      </div>

      <Consultation />
    </div>
  );
};

export default Bikes;
