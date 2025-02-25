import BikeDetailsBanner from "@/components/BikeDetailsBanner";
import DetailsContent from "@/components/DetailsContent";
import { BikeData } from "@/interface/bikedata";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const BikeDetails = () => {
  const { id } = useParams(); // id is a string

  // Fetch bike data
  const { data: bikes, isLoading, error } = useQuery({
    queryKey: ["all-bike"],
    queryFn: async () => {
      const res = await axios.get("/bike.json"); // Ensure the file is accessible
      return res.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  const bike = bikes?.find((bike:BikeData) => bike?.id === Number(id));

  if (!bike) {
    return <p>Bike not found!</p>;
  }

  return (
    <div className="   my-10">
      <BikeDetailsBanner  bike={bike}></BikeDetailsBanner>
      <DetailsContent bike={bike} ></DetailsContent>
    </div>
  );
};

export default BikeDetails;
