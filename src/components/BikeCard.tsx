type BikeDatatype = {
  bike: BikeData
}

import BikeData from '@/interface/bikedata'
import bikePhoto from '../assets/bike@2x.png'
import PrimaryBtn from './PrimaryBtn'
import { useNavigate } from 'react-router-dom'

const BikeCard = ({ bike }: BikeDatatype) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/product/${bike?._id}`)}
      className=' hover:border-primary border-2'
    >
      <div className=' bg-gray-200 p-4 relative'>
        <h1 className='lg:text-lg md:text-lg    text-primary  font-semibold  uppercase text-end'>
          Youthful - Stylish
        </h1>
        <div className=' overflow-hidden h-40 flex justify-center items-center'>
          <img className='h-full  ' src={bikePhoto} alt='bike photo' />
        </div>

        <div className=' absolute top-4 left-4 flex  flex-col gap-3 bg-white border  rounded-b-full justify-start items-center p-1 '>
          {bike?.colorOptions?.map((item: string, index: number) => {
            return (
              <div
                key={index}
                className='w-4 h-4 rounded-full'
                style={{ backgroundColor: item.toLowerCase().replace(' ', '') }}
              ></div>
            )
          })}
        </div>
      </div>
      <div className=' p-5 py-8 text-start'>
        <h1 className='  font-semibold text-xl text-black text-start '>
          {bike?.name}
        </h1>
        <p className=' text-xl text-primary font-bold my-4'>{bike?.price} TK</p>
        <div className=' flex justify-between items-center'>
          <button type='button' onClick={(e) => e.stopPropagation()}>
            <PrimaryBtn title={'Buy Now'} />
          </button>
          <p className=' text-primary'>Sold 1.5k</p>
        </div>
      </div>
    </div>
  )
}

export default BikeCard
