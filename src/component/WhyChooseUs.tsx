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
      <div className="relative grid grid-cols-12 gap-8 border-gray-300 pl-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex items-center gap-6 bg-white shadow-lg p-4 rounded-lg col-span-12 md:col-span-6"
          >
            {index % 2 === 0 ? (
             <div className="w-1/2">
                 <div className="flex items-center gap-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-32 h-24 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
              <div className="w-1/2"></div>
             </div>
            ) : (
              <div className="flex items-center gap-6">
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-32 h-24 rounded-lg object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;