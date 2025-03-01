import BikeData from '@/interface/bikedata'
import img from '../assets/bike.png'

import { MoveRight, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
interface PropsType {
  bike: BikeData
}

const BikeDetailsBanner = ({ bike }: PropsType) => {
  return (
    <div className=' relative min-h-[80vh] py-4 '>
      <div className='bg-white in-h-[40vh] text-end  max-w space-y-4 p-6 '>
        <h5 className='text-gray-700 uppercase text-lg'>{bike?.name}</h5>
        <h1 className='lg:text-5xl md:text-3xl text-xl font-extrabold '>
          {' '}
          {bike?.name}{' '}
        </h1>
        <h5 className='text-gray-900 uppercase text-lg font-bold'>
          waterproof
        </h5>

        <p className='text-xl  font-bold text-primary'>{bike?.price} TK</p>
      </div>
      <div className='bg-[#B33951] min-h-[60vh] p-6 py-10 relative'>
        <div className=' max-w flex flex-col  justify-between  h-full'>
          <div className=' flex justify-end gap-4 flex-1'>
            <Link to={`/checkout/${bike._id}`}>
              <button className='  flex items-center gap-3 bg-white px-4  py-1 rounded-sm'>
                Book Now <MoveRight></MoveRight>
              </button>
            </Link>
            <button className='  flex items-center gap-3 bg-white px-4  py-1 rounded-sm'>
              Add To Cart <ShoppingCart />
            </button>
          </div>
          <div className=' absolute bottom-0  w-full mx-auto  left-0'>
            <div className=' bg-black bg-opacity-50 lg:w-8/12 md:w-10/12 w-full mx-auto min-h-9 p-8  grid lg:grid-cols-4  grid-cols-2 justify-center  gap-4 '>
              <div className='border-r-2 border-white text-white text-center  p-2'>
                <h1>Max Speed</h1>
                <p className=' text-xl font-semibold'>360KM</p>
              </div>
              <div className='border-r-2 border-white text-white text-center  p-2'>
                <h1>Min Speed</h1>
                <p className=' text-xl font-semibold'>10KM</p>
              </div>
              <div className='border-r-2 border-white text-white text-center  p-3'>
                <h1>Oil Saving</h1>
                <p className=' text-xl font-semibold'>per KL 0.1L</p>
              </div>
              <div className='border-r-2 border-white text-white text-center  p-3'>
                <h1>Engine</h1>
                <p className=' text-xl font-semibold'>Metal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' absolute left-[10%] top-[1%] w-5/12 overflow-hidden'>
        <img className=' w-full' src={img} alt='' />
      </div>
    </div>
  )
}

export default BikeDetailsBanner
