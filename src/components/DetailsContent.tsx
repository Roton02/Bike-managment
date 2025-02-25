import { BikeData } from "@/interface/bikedata";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from "../assets/bike.png"
import PrimaryBtn from "./PrimaryBtn";

interface PropsType {
    bike: BikeData;
}

const DetailsContent = ({ bike }: PropsType) => {
    const [openSection, setOpenSection] = useState<string | null>("dimensions");

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="max-w-screen-lg mx-auto p-6">
            <div className=" flex lg:flex-row md:flex-row flex-col gap-3">

                <div className="">
                    {/* Bike Name & Price Section */}
                    <h2 className="text-gray-700 uppercase text-lg tracking-widest">
                        EXTEND FREEDOM - EXPAND EXPERIENCE
                    </h2>
                    <h1 className="text-5xl font-extrabold mt-2">{bike?.name}</h1>
                    <p className="text-green-600 text-2xl font-bold mt-4 mb-5">{bike?.price.toLocaleString()} VND</p>
                    <PrimaryBtn title="Buy Now "></PrimaryBtn>
                    <p className="text-sm text-gray-600 mt-2">
                        (Price includes VAT, 01 400W charger and does not include battery)
                    </p>
                </div>

                {/* Bike Image */}
                <div className="flex justify-center mt-6">
                    <img src={img} alt="Bike Photo" className="w-8/12" />
                </div>


            </div>



            {/* Color Options */}
            <div className="flex justify-center gap-3 mt-4">
                {bike?.colorOptions.map((color, index) => (
                    <div key={index} className="w-6 h-6 rounded-full border border-gray-300 " title={color} />
                ))}
            </div>

            {/* Collapsible Sections */}
            <div className="mt-6">
                {/* DIMENSIONS, WEIGHT */}
                <div className="border-t border-gray-300">
                    <button
                        onClick={() => toggleSection("dimensions")}
                        className="w-full flex justify-between items-center p-4 font-bold text-lg"
                    >
                        DIMENSIONS, WEIGHT {bike?.name}
                        {openSection === "dimensions" ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {openSection === "dimensions" && (
                        <div className="p-4 bg-gray-100">
                            <p>Dimensions: {bike?.dimensions}</p>
                            <p>Screen: {bike?.screen}</p>
                            <p>Ground Clearance: {bike?.groundClearance}</p>
                            <p>Seat Height: {bike?.seatHeight}</p>
                            <p>Vehicle Weight: {bike?.vehicleWeight}</p>
                            <p>Permissible Weight: {bike?.permissibleWeight}</p>
                            <p>Color Options: {bike?.colorOptions.join(", ")}</p>
                        </div>
                    )}
                </div>

                {/* ENGINE */}
                <div className="border-t border-gray-300">
                    <button
                        onClick={() => toggleSection("engine")}
                        className="w-full flex justify-between items-center p-4 font-bold text-lg"
                    >
                        ENGINE {bike?.name}
                        {openSection === "engine" ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {openSection === "engine" && (
                        <div className="p-4 bg-gray-100">
                            <p>Rated Power: {bike?.ratedPower}</p>
                            <p>Max Speed: {bike?.maxSpeed}</p>
                        </div>
                    )}
                </div>

                {/* BATTERY SERVICE */}
                <div className="border-t border-gray-300">
                    <button
                        onClick={() => toggleSection("battery")}
                        className="w-full flex justify-between items-center p-4 font-bold text-lg"
                    >
                        BATTERY SERVICE {bike?.name}
                        {openSection === "battery" ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {openSection === "battery" && (
                        <div className="p-4 bg-gray-100">
                            <p>Travel Distance: {bike?.travelDistance}</p>
                            <p>Charging Time: {bike?.chargingTime}</p>
                        </div>
                    )}
                </div>

                {/* OTHER SPECIFICATIONS */}
                <div className="border-t border-b border-gray-300">
                    <button
                        onClick={() => toggleSection("other")}
                        className="w-full flex justify-between items-center p-4 font-bold text-lg"
                    >
                        OTHER SPECIFICATIONS {bike?.name}
                        {openSection === "other" ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {openSection === "other" && (
                        <div className="p-4 bg-gray-100">
                            <p>Trunk Width: {bike?.trunkWidth}</p>
                            <p>Waterproof: {bike?.waterproof}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailsContent;
