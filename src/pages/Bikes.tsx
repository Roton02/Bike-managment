import Consultation from "@/component/Consultation";
import BikeCard from "@/components/bikeCard";
import PageHeading from "@/components/PageHeading";
import { BikeData } from "@/interface/bikedata";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MoveLeft, MoveRight } from "lucide-react";
import { useState, useMemo } from "react";

const Bikes = () => {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const bikesPerPage = 8;

  // Fetch bike data
  const { data: bikes, isLoading, error } = useQuery({
    queryKey: ["all-bike"],
    queryFn: async () => {
      const res = await axios.get("/bike.json");
      return res.data;
    },
  });


  // Pagination logic using useMemo
  const paginatedBikes = useMemo(() => {
    const startIndex = (currentPage - 1) * bikesPerPage;
    return bikes?.slice(startIndex, startIndex + bikesPerPage);
  }, [bikes, currentPage]);

  const totalPages = Math.ceil((bikes?.length || 0) / bikesPerPage);


  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Failed to load data!</p>;

  return (
    <div className="mt-7 max-w mx-auto">
      <PageHeading title="All Products" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {paginatedBikes?.map((bike: BikeData) => (
          <div key={bike.id} className="border p-2 rounded-lg shadow-lg">
            <BikeCard bike={bike} />
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6 mb-10">
        <button
            className="p-2 border-2 border-primary text-primary  rounded-full disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
           <MoveLeft></MoveLeft>
        </button>
        <span className="font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="p-2 border-2 border-primary text-primary  rounded-full disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
         
         <MoveRight></MoveRight>
        </button>
      </div>
      <Consultation></Consultation>
    </div>
  );
};

export default Bikes;
