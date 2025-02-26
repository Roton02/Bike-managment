/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import PageHeading from '@/components/PageHeading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useEffect, useRef, useState } from 'react'
import { MoveLeft, MoveRight } from 'lucide-react'
import NewsCard from '@/components/NewsCard'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import axios from 'axios'

export type NewsArticle = {
  title: string
  content: string
  urlToImage: string
  publishedAt: string
  source: {
    name: string
  }
  articles: string[]
}

const HotNews: React.FC = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const API_Key = 'e0af391e9ef34d2bbf631ae4299f7dd7'
  const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_Key}`

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(url)
        setData(response.data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [url])

  const swiperRef = useRef<any>(null) // Create a reference for Swiper

  return (
    <div className='p-6'>
      <PageHeading title='Hot News' />
      <div className='relative max-w'>
        {' '}
        {/* Wrapper to keep navigation inside */}
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]} // Include Navigation module
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='my-6'
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign Swiper instance to ref
        >
          {data?.articles?.map((news: NewsArticle, index: number) => (
            <SwiperSlide
              key={index}
              className='p-4 border rounded-lg shadow-lg mb-16 h-full'
            >
              <NewsCard news={news} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
        <div className='relative flex items-center justify-center gap-52 -mt-14 z-40 top-0'>
          {/* Prev Button - Left Side */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className=' text-black rounded-full border border-black p-2 hover:bg-gray-100'
          >
            <MoveLeft size={24} />
          </button>

          {/* Next Button - Right Side */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className=' text-black rounded-full border border-black p-2 hover:bg-gray-100'
          >
            <MoveRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HotNews
