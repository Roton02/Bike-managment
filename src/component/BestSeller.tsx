import BikeCard from '@/components/BikeCard'
import PageHeading from '@/components/PageHeading'
import BikeData from '@/interface/bikedata'
import { useGetAllBikesQuery } from '@/Redux/featured/bikes/bikesApi'

const BestSeller = () => {
  const { data } = useGetAllBikesQuery(undefined)

  // const filteredData = data?.filter((item:IBike) => item.bestSeller === true)

  const filteredData = data?.data.slice(0, 6)

  return (
    <div className=' max-w m-top '>
      <PageHeading title='Best Seller'></PageHeading>
      <div className=' grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center'>
        {filteredData?.map((item: BikeData) => {
          return (
            <div key={item._id} className='flex flex-col items-center m-5'>
              <BikeCard bike={item}></BikeCard>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BestSeller
