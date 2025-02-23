import BikeBanner from '@/component/Banner'
import BestSeller from '@/component/BestSeller'
import NewProduct from '@/component/NewProduct'
import Specifications from '@/component/Specifications'
import WhyChooseUs from '@/component/WhyChooseUs'

export default function Home() {
  return (
    <div>
      <BikeBanner />
      <BestSeller></BestSeller>
      <NewProduct></NewProduct>
      <Specifications></Specifications>
      <WhyChooseUs></WhyChooseUs>
    </div>
  )
}
