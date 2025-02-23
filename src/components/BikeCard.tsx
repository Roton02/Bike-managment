import { BikeData } from "@/interface/bikedata";
type BikeDatatype = {
    bike: BikeData
}

import bikePhoto from '../assets/bike@2x.png'
import PrimaryBtn from "./PrimaryBtn";

const BikeCard = ({ bike }: BikeDatatype) => {

    return (
        <div className="">
            <div className=" bg-gray-200 p-5 relative">
                <h1 className="text-xl  text-primary  font-semibold  uppercase text-end">Youthful - Stylish</h1>
                <div className=" overflow-hidden max-h-52 flex justify-center items-center">
                    <img className="w-full " src={bikePhoto} alt="bike photo" />
                </div>

                <div className=" absolute top-4 left-4 flex  flex-col gap-3 bg-white border  rounded-b-full justify-start items-center p-1 ">
                    {
                        bike.colorOptions?.map((item: string, index: number) => {
                            return (
                                <div key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: item.toLowerCase().replace(' ', '') }}></div>
                            )
                        })
                    }
                </div>

                <div className=" absolute bottom-4 right-4 flex-col flex gap-2">
                    {/* Display 2 images from the array and change the main image on click */}
                    {
                        bike?.images?.slice(0, 2).map((item: string, index: number) => {
                            return (
                                <img key={index} className="w-10 h-10 rounded-md border-2 border-white" src={item} alt="bike photo" />
                            )
                        })
                    }
                </div>

            </div>
            <div className=" p-5 py-8 text-start">
                <h1 className="  font-semibold text-xl text-black text-start ">{bike?.name}</h1>
                <p className=" text-xl text-primary font-bold my-4">{bike?.price} TK</p>
                <div className=" flex justify-between items-center">
                    <PrimaryBtn title={'Buy Now'}></PrimaryBtn>
                    <p className=" text-primary">Sold 1.5k</p>
                </div>
            </div>
        </div>
    );
};

export default BikeCard;