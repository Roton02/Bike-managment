import { useForm, SubmitHandler } from "react-hook-form";
import bg from "../assets/signUp-bg.png";
import logo from "../assets/Logo.png";
import PageHeading from "@/components/PageHeading";

// Define the form data structure
interface FormDataType {
    fullName: string;
    phone: string;
    bikeModel: string;
}

const Consultation = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormDataType>();

    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        console.log("Form Data: ", data);
    };

    return (
        <div
            className="bg-cover bg-center w-full p-6 py-12"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="max-w">
                <div className="bg-white bg-opacity-70 shadow-lg p-6 lg:w-6/12 md:w-8/12 w-full mx-auto text-center h-5/6">
                    <img src={logo} alt="Bike-Bike Logo" className="mx-auto w-20 mb-3" />
                    <PageHeading title="SIGN UP FOR CONSULTATION" />
                    <p className="text-gray-600 text-sm mt-1">
                        Please fill in the information below so <span className="font-bold text-blue-600">BIKE-BIKE</span> can advise.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3">
                        {/* Full Name */}
                        <input
                            type="text"
                            placeholder="Full name *"
                            {...register("fullName", { required: "Full name is required" })}
                            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}

                        {/* Phone Number */}
                        <input
                            type="tel"
                            placeholder="Phone number *"
                            {...register("phone", { required: "Phone number is required" })}
                            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

                        {/* Bike Models of Interest */}
                        <div className="text-left my-5">
                            <p className="font-medium mb-1">Bike models of interest:</p>
                            <div className="flex flex-wrap gap-4 justify-center my-3">
                                {["Evo200", "Klara S (2023)", "Vento S", "Evo200 Lite", "Feliz S", "Others"].map((model) => (
                                    <label key={model} className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            value={model}
                                            {...register("bikeModel", { required: "Select a bike model" })}
                                        />
                                        <span>{model}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.bikeModel && <p className="text-red-500 text-sm">{errors.bikeModel.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-teal-700 text-white py-2 w-8/12 hover:bg-teal-800"
                        >
                            SIGN UP
                        </button>
                    </form>
                </div>

                {/* Metrics Section */}
                <div className="mt-6 text-white p-4 rounded-md max-w">
                    <div className="flex lg:flex-row md:flex-row flex-col gap-4 justify-between text-sm">
                        <div>
                            <p className="font-bold">MILEAGE ACCUMULATED</p>
                            <p className="text-2xl font-semibold">45,508.797 km</p>
                        </div>
                        <div>
                            <p className="font-bold">CO2 REDUCTION</p>
                            <p className="text-2xl font-semibold">206,762,230 kg</p>
                        </div>
                        <div>
                            <p className="font-bold">AIR CLEANED</p>
                            <p className="text-2xl font-semibold">~2,275,441 trees</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consultation;
