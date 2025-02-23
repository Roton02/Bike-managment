import PageHeading from "@/components/PageHeading";
import img from "../assets/img_Charging.png";
import img2 from "../assets/img_Repair.png";
import img3 from "../assets/img_Rescue.png";
import img4 from "../assets/img_Service.png";
import img5 from "../assets/img_Warranty.png";

const WhyChooseUs = () => {
    const services = [
        {
            title: "Charging Station Planning",
            description:
                "We develop a charging station system with more than 150,000 charging ports for electric motorbikes and cars, spread across various locations.",
            image: img,
        },
        {
            title: "Electric Motorbike Warranty Period",
            description:
                "5-year warranty period (unlimited km) for electric motorbikes using LFP batteries and a 3-year warranty period for the remaining models.",
            image: img2,
        },
        {
            title: "VinFast Mobile Service",
            description:
                "Mobile Service is an added-value service deployed in parallel with our existing network of service workshops and rescue policies.",
            image: img3,
        },
        {
            title: "24/7 Rescue",
            description:
                "Free 24/7 support and rescue hotline service when the vehicle has technical problems. Service is ready to support anywhere immediately.",
            image: img4,
        },
        {
            title: "Repair Service",
            description:
                "Professional and attentive service in 5 steps to ensure customer satisfaction.",
            image: img5,
        },
    ];

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <PageHeading title="Why Choose Us?" />
            <div className="relative    my-7">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative flex items-center lg:mb-0 md:mb-0  mb-8 bg-white   rounded-lg  "
                    >
                        {index % 2 === 0 ? (
                            <div className=" flex    w-full">
                                <div className="flex md:flex-col lg:flex-row  items-center justify-start lg:w-5/12  md:w-5/12 ">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-40 h-40 rounded-lg object-cover"
                                    />
                                    <div className="bg-[#F1F8F7]">
                                        <h3 className=" font-semibold">{service.title}</h3>
                                        <p className="text-gray-600 text-sm">{service.description}</p>
                                    </div>
                                </div>

                                <div className="  w-2/12    lg:flex md:flex hidden items-center justify-center relative ">
                                    <p className=" absolute top-0 border-x-2 border-gray-500 h-full z-10 "></p>
                                    <p className=" absolute   h-4 w-4 z-20 bg-primary my-auto border-gray-500 border-2 "></p>
                                </div>
                                <div className="w-5/12 lg:flex md:flex hidden "></div>
                            </div>
                        ) : (
                            <div className=" flex    w-full">
                                <div className="w-5/12 lg:flex md:flex hidden "></div>

                                <div className="  w-2/12 lg:flex md:flex hidden    items-center justify-center relative ">
                                    <p className=" absolute top-0 border-x-2 border-gray-500 h-full z-10 "></p>
                                    <p className=" absolute   h-4 w-4 z-20 bg-primary my-auto border-gray-500 border-2 "></p>
                                </div>

                                <div className="flex lg:flex-row md:flex-col flex-row-reverse items-center  lg:w-5/12 md:w-5/12  ">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-40 h-40 rounded-lg object-cover"
                                    />
                                   <div className="bg-[#F1F8F7]">
                                        <h3 className=" font-semibold">{service.title}</h3>
                                        <p className="text-gray-600 text-sm">{service.description}</p>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;