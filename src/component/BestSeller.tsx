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
    <div className=" max-w m-top bb">

      <PageHeading title="Best Seller"></PageHeading>
      <div className=" grid grid-cols-4 justify-center">
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