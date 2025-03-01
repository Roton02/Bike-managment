type BikeDatatype = {
  bike: BikeData
}

import BikeData from '@/interface/bikedata'
import PrimaryBtn from './PrimaryBtn'
import { Link } from 'react-router-dom'

const BikeCard = ({ bike }: BikeDatatype) => {
  // console.log(bike)

  return (
    <Link to={`/product/${bike?._id}`}>
      <div className=' hover:border-primary border-2'>
        <div className=' bg-gray-200 p-4 relative'>
          <div className=' overflow-hidden h-40 flex justify-center items-center'>
            <img className='h-full  ' src={bike?.image} alt='bike photo' />
          </div>

          <div className=' absolute top-4 left-4 flex  flex-col gap-3 bg-white border  rounded-b-full justify-start items-center p-1 '>
            {bike?.colorOptions?.map((item: string, index: number) => {
              return (
                <div
                  key={index}
                  className='w-4 h-4 rounded-full'
                  style={{
                    backgroundColor: item.toLowerCase().replace(' ', ''),
                  }}
                ></div>
              )
            })}
          </div>
        </div>
        <div className=' p-5 py-8 text-start'>
          <h1 className='  font-semibold text-xl text-black text-start '>
            {bike?.name}
          </h1>
          <p className=' text-xl text-primary font-bold my-4'>
            {bike?.price} TK
          </p>
          <div className=' flex justify-between items-center'>
            <button type='button' onClick={(e) => e.stopPropagation()}>
              <PrimaryBtn title={'Buy Now'} />
            </button>
            <p className=' text-primary'>Sold 1.5k</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BikeCard
