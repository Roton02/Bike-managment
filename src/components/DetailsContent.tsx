import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import img from '../assets/bike.png'
import PrimaryBtn from './PrimaryBtn'
import BikeData from '@/interface/bikedata'

interface PropsType {
  bike: BikeData
}

const DetailsContent = ({ bike }: PropsType) => {
  const [openSection, setOpenSection] = useState<string | null>('dimensions')

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className='max-w-screen-lg mx-auto p-6'>
      <div className=' flex lg:flex-row md:flex-row flex-col gap-3'>
        <div className=''>
          {/* Bike Name & Price Section */}
          <h2 className='text-gray-700 uppercase text-lg tracking-widest'>
            EXTEND FREEDOM - EXPAND EXPERIENCE
          </h2>
          <h1 className='text-5xl font-extrabold mt-2'>{bike?.name}</h1>
          <p className='text-green-600 text-2xl font-bold mt-4 mb-5'>
            {bike?.price} VND
          </p>
          <PrimaryBtn title='Buy Now '></PrimaryBtn>
          <p className='text-sm text-gray-600 mt-2'>
            (Price includes VAT, 01 400W charger and does not include battery)
          </p>
        </div>

        {/* Bike Image */}
        <div className='flex justify-center mt-6'>
          <img src={img} alt='Bike Photo' className='w-8/12' />
        </div>
      </div>

      {/* Color Options */}
      <div className='flex justify-center gap-3 mt-4'>
        {['red', 'white', 'blue'].map((color, index) => (
          <div
            key={index}
            className='w-6 h-6 rounded-full border border-gray-300 '
            title={color}
          />
        ))}
      </div>

      {/* Collapsible Sections */}
      <div className='mt-6'>
        {/* DIMENSIONS, WEIGHT */}
        <div className='border-t border-gray-300'>
          <button
            onClick={() => toggleSection('dimensions')}
            className='w-full flex justify-between items-center p-4 font-bold text-lg'
          >
            DIMENSIONS, WEIGHT {bike?.name}
            {openSection === 'dimensions' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSection === 'dimensions' && (
            <div className='space-y-4'>
              <p className='text-lg font-semibold text-gray-700'>
                Dimensions:{' '}
                <span className='text-blue-500'>1234 x 567 x 890 mm</span>
              </p>
              <p className='text-lg font-semibold text-gray-700'>
                Screen: <span className='text-blue-500'>6.5 inches</span>
              </p>
              <p className='text-lg font-semibold text-gray-700'>
                Ground Clearance: <span className='text-blue-500'>160 mm</span>
              </p>
              <p className='text-lg font-semibold text-gray-700'>
                Seat Height: <span className='text-blue-500'>800 mm</span>
              </p>
              <p className='text-lg font-semibold text-gray-700'>
                Vehicle Weight: <span className='text-blue-500'>180 kg</span>
              </p>
              <p className='text-lg font-semibold text-gray-700'>
                Permissible Weight:{' '}
                <span className='text-blue-500'>200 kg</span>
              </p>
              <p className='text-lg font-semibold text-gray-700'>
                Color Options:{' '}
                <span className='text-blue-500'>Red, Blue, Black</span>
              </p>
            </div>
          )}
        </div>

        {/* ENGINE */}
        <div className='border-t border-gray-300'>
          <button
            onClick={() => toggleSection('engine')}
            className='w-full flex justify-between items-center p-4 font-bold text-lg'
          >
            ENGINE {bike?.name}
            {openSection === 'engine' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSection === 'engine' && (
            <div className='p-4 bg-gray-100'>
              <p className='text-lg font-semibold text-gray-700'>
                Rated Power: <span className='text-blue-500'>1000 W</span>
              </p>
              <p className='text-lg font-semibold text-gray-700'>
                Max Speed: <span className='text-blue-500'>120 km/h</span>
              </p>
            </div>
          )}
        </div>

        {/* BATTERY SERVICE */}
        <div className='border-t border-gray-300'>
          <button
            onClick={() => toggleSection('battery')}
            className='w-full flex justify-between items-center p-4 font-bold text-lg'
          >
            BATTERY SERVICE {bike?.name}
            {openSection === 'battery' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSection === 'battery' && (
            <div className='p-4 bg-gray-100'>
              <p className='text-lg font-semibold text-gray-700'>
                Travel Distance: <span className='text-blue-500'>150 km</span>
              </p>
              <p className='text-lg font-semibold text-gray-700'>
                Charging Time: <span className='text-blue-500'>4 hours</span>
              </p>
            </div>
          )}
        </div>

        {/* OTHER SPECIFICATIONS */}
        <div className='border-t border-b border-gray-300'>
          <button
            onClick={() => toggleSection('other')}
            className='w-full flex justify-between items-center p-4 font-bold text-lg'
          >
            OTHER SPECIFICATIONS {bike?.name}
            {openSection === 'other' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSection === 'other' && (
            <div className='p-4 bg-gray-100'>
              <p className='text-lg font-semibold text-gray-700'>
                Trunk Width: <span className='text-blue-500'>110 cm</span>
              </p>
              <p className='text-lg font-semibold text-gray-700'>
                Waterproof: <span className='text-green-500'>Yes</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DetailsContent
