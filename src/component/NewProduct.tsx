import { MoveLeft, MoveRight } from "lucide-react";
import bike from "../assets/bike.png"
import engine from "../assets/engine.png"
import bike2 from "../assets/new-p-2.png"
import PrimaryBtn from "@/components/PrimaryBtn";


const NewProduct = () => {
    return (
        <div className=" max-w m-top mb-20 flex lg:flex-row md:flex-row flex-col text-start p-4 gap-4">
            <div className=" lg:w-7/12 md:w-7/12 w-f  space-y-6 ">
                <div className="flex gap-3 mb-4 flex-wrap   justify-between  h-ful">
                    <h1 className="lg:text-5xl md:text-3xl text-2xl text-black font-semibold uppercase">See Our New  <br /> Products</h1>
                    <div className=" flex  gap-3  items-end " >
                        <button className=" rounded-full p-1 border border-black  h-10 w-10 "><MoveLeft></MoveLeft></button>
                        <button className=" rounded-full p-1 border border-black  h-10 w-10 "> <MoveRight></MoveRight> </button>
                    </div>
                </div>
                <div className=" flex gap-3 mt-2">


                    <div className=" w-7/12 bg-gray-100 space-y-2">
                        <div className="relative  z-10 ">

                            <div className=" absolute -z-10 bottom-0  right-3 left-3 bg-gradient-to-b to-primary from-[#96bca4] h-[30%] rounded-[1000%]"></div>
                            <img className="   bottom-2 z-20" src={bike} alt="" />

                        </div>
                        <p className="">The new car model focuses on Compactness, Personality, and unique rounded design. This will be the top choice for GenZ personality.</p>


                    </div>

                    <div className=" relative w-5/12   flex justify-center bg-gray-100">
                        <div className=" absolute z-10 bottom-2 right-3 left-3 bg-gradient-to-b to-primary from-[#8de5ad] h-[70%] rounded-full"></div>
                        <img className=" absolute bottom-3 z-20" src={engine} alt="" />



                    </div>
                </div>

            </div>


            <div className="lg:w-5/12 md:w-5/12 w-full  min-h-5  ">

                <div className=" bg-gray-100">
                    <img src={bike2} alt="" />

                </div>
                <div className=" space-y-4 flex flex-col items-end  ">
                    <h1 className=" text-end text-4xl text-gray-400 font-semibold uppercase">YADEA ORLA</h1>
                    <h1 className=" text-end text-4xl text-gray-900 font-semibold uppercase border-b-2 border-black ">YADEA VIGOR</h1>
                    <h1 className=" text-end text-4xl text-gray-400 font-semibold uppercase">YADEA OSSY</h1>
                </div>

                <PrimaryBtn title="Book Now"></PrimaryBtn>

            </div>

        </div>
    );
};

export default NewProduct;