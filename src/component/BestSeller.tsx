
import BikeCard from "@/components/bikeCard";
import PageHeading from "@/components/PageHeading";
import { BikeData } from "@/interface/bikedata";
import { useQuery } from "@tanstack/react-query";


const BestSeller = () => {

  const {data}= useQuery({
    queryKey: ['bestSeller'],
    queryFn: async () => {
      const response = await fetch('bike.json')
      const data = await response.json()
      return data
    }
  }

  )

  // const filteredData = data?.filter((item:BikeData) => item.bestSeller === true)

  const filteredData = data?.slice(0,4)

  console.log(data);

  return (
    <div className=" max-w m-top ">

      <PageHeading title="Best Seller"></PageHeading>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center">
        {
          filteredData?.map((item: BikeData) => {
            return (
              <div key={item.id} className="flex flex-col items-center m-5">
               <BikeCard bike={item}></BikeCard>
              </div>
            )
          })
        }


      </div>
    </div>
  );
};

export default BestSeller;