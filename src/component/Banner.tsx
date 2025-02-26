/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react'
import { Button } from '@/components/ui/button' // ShadCN UI Button
import Slider, { Settings } from 'react-slick' // React Slick for Slider
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import banner1 from '../assets/banner1.png'
// import banner2 from '../assets/banner2.png'
// import banner3 from '../assets/banner3.png'
// import banner4 from '../assets/banner4.png'

const images = [banner1, banner1, banner1, banner1]

const BikeBikeBanner: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  // Explicitly type the sliderRef to include the slickGoTo method
  const sliderRef = useRef<Slider | null>(null)

  const handleThumbnailClick = (index: number) => {
    setActiveSlide(index)
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index) // Ensure slickGoTo is called only if sliderRef is not null
    }
  }

  const settings: Settings = {
    beforeChange: (current, next) => setActiveSlide(next),
  }

  return (
    <div className='relative w-full bg-white'>
      {/* Bike Image and Slider */}
      <div className='relative flex flex-col md:flex-row-reverse items-center justify-center overflow-hidden'>
        <div className='w-full md:w-1/2 flex justify-center p-4'>
          <Slider ref={sliderRef} className='w-full max-w-md'>
            {images.map((img, index) => (
              <div key={index} className='flex justify-center w-full'>
                <img
                  src={img}
                  alt={`Bike ${index + 1}`}
                  className='object-contain w-full rounded-lg transition-transform duration-300 hover:scale-105'
                />
              </div>
            ))}
          </Slider>

          {/* Thumbnail Navigation */}
        </div>

        {/* Text and Call-to-Action */}
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start p-6 md:p-12 space-y-4'>
          <h1 className='text-3xl text-start  text-black uppercase tracking-tight'>
            LET'S RIDE! <br />{' '}
            <span className='text-6xl font-poppins text-start font-extrabold'>
              BIKE-BIKE
            </span>
          </h1>
          <p className='text-lg md:text-xl text-gray-600'>
            Simple and sleek design with users in mind.
          </p>
          <div className='flex justify-center mt-4 space-x-2 py-6'>
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`cursor-pointer rounded-lg overflow-hidden transition-transform duration-300  ${
                  activeSlide === index
                    ? 'border-2  border-primary'
                    : 'border-2 border-red-200 '
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-14 h-14 p-1 object-cover ${
                    activeSlide === index ? 'scale-110' : ''
                  }`}
                />
              </div>
            ))}
          </div>
          <Button
            {...settings}
            className='bg-primary rounded-none  text-white px-6 py-3  text-lg transition-all duration-300 transform hover:scale-105'
          >
            Buy Now
          </Button>
        </div>
      </div>

      {/* Spec Cards */}
      <div className='w-full p-6 grid grid-cols-2 md:grid-cols-6 gap-4 mx-auto max-w-6xl'>
        {[
          { title: '105 lbs', desc: 'Net Weight' },
          { title: '26 mph', desc: 'Top Speed' },
          { title: '42 miles', desc: 'Max Range' },
          { title: '89 nm', desc: 'Max Torque' },
          { title: '22% slope', desc: 'Incline Support' },
          { title: '2x', desc: 'Hydraulic Disc Brakes' },
        ].map((spec, index) => (
          <div
            key={index}
            className='bg-white p-4 rounded-lg shadow-xl text-center transition-all duration-300 hover:shadow-2xl hover:scale-105'
          >
            <span className='text-xl font-bold text-black'>{spec.title}</span>
            <p className='text-gray-600'>{spec.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BikeBikeBanner
