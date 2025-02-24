import BrandHistoryCarousel from "@/component/BrandHistoryCarousel"
import { Edward } from "@/component/Edward"
import ElectricVehicleGroup from "@/component/ElectricVehicleGroup"
import { Global } from "@/component/Global"
import HeroSection from "@/component/HeroSection"

export const about = () => {
  return (
    <div>
      <div>
        <div className="relative w-full h-[500px] flex items-center justify-center bg-black">
          {/* Background Image */}
          <img
            src="https://i.postimg.cc/7hb5G5v0/Video-About.png"
            alt="Bike"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute text-center text-white  p-6 rounded-lg">
            <p className="text-sm uppercase tracking-wide">About Bike-Bike</p>
            <h1 className="text-3xl font-bold">GREEN FUTURE, NEW SPEED!</h1>

            {/* Play Button */}
            <button className="mt-4 bg-white text-black p-4 rounded-full shadow-lg hover:scale-110 transition">
              ▶
            </button>
          </div>
        </div>
      </div>
      <div>
        <ElectricVehicleGroup></ElectricVehicleGroup>
        <HeroSection></HeroSection>
        <Global></Global>
        <BrandHistoryCarousel></BrandHistoryCarousel>
        <Edward></Edward>
      </div>
    </div>
  )
}
export default about