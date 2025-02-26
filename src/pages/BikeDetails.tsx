import BikeDetailsBanner from '@/components/BikeDetailsBanner'
import DetailsContent from '@/components/DetailsContent'
import { useGetBikeQuery } from '@/Redux/featured/bikes/bikesApi'
import { useParams } from 'react-router-dom'

const BikeDetails = () => {
  const { id } = useParams() // id is a string

  const { data: bike, isLoading, error } = useGetBikeQuery(`/${id}`)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading data!</p>

  // const bike = bikes?.find((bike:BikeData) => bike?.id === Number(id));

  if (!bike) {
    return <p>Bike not found!</p>
  }

  return (
    <div className='   my-10'>
      <BikeDetailsBanner bike={bike}></BikeDetailsBanner>
      <DetailsContent bike={bike}></DetailsContent>
    </div>
  )
}

export default BikeDetails
