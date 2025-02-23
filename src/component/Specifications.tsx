import PageHeading from "@/components/PageHeading";

import img from "../assets/bike-s-1.png"
import img2 from "../assets/bike-s-2.png"
import img3 from "../assets/bike-s-3.png"


const Specifications = () => {
    return (
        <div className="max-w bg-gray-100 p-4 py-5 ">
            <h2 className=" uppercase text-gray-500 font-semibold text-2xl">Technology</h2>
            <PageHeading title="Vehicle specifications"></PageHeading>

            <div className="  grid  grid-cols-3 my-3">

                <div className="">
                    <img src={img} alt="" />
                    <p className=" text-sm text-gray-600">Full LED lighting system</p>
                </div>
                <div className="">
                    <p className="  text-start text-sm text-gray-600  -mb-8 mr-auto">Trunk volume 25L</p>
                    <img className="" src={img2} alt="" />
                </div>
                <div className="">
                    <img src={img3} alt="" />
                    <p className=" text-sm text-gray-600">Travel 198km/charge <br />
                        (VinFast standard conditions)</p>
                </div>

            </div>

        </div>
    );
};

export default Specifications;