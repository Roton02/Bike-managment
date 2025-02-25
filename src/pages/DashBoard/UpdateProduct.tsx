import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler,  } from "react-hook-form";

// Define the type for product data
interface IProduct {
  id: string;
  name: string;
  price: number;
  maxSpeed: string;
  travelDistance: string;
  trunkWidth: string;
  waterproof: string;
  seatHeight: string;
  chargingTime: string;
  vehicleWeight: string;
  ratedPower: string;
  colorOptions: string[];
  images: string[];
}

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IProduct>();

  // Fetch the data for the product when the component loads
  useEffect(() => {
    const fetchProductData = async () => {
      const response = await fetch('/bike.json');
      const data = await response.json();
      console.log(data,id);
      const productData = data?.find((item: IProduct) => item.id == id);

      setProduct(productData);

      // Set default values to the form
      if (productData) {
        setValue("name", productData.name);
        setValue("price", productData.price);
        setValue("maxSpeed", productData.maxSpeed);
        setValue("travelDistance", productData.travelDistance);
        setValue("trunkWidth", productData.trunkWidth);
        setValue("waterproof", productData.waterproof);
        setValue("seatHeight", productData.seatHeight);
        setValue("chargingTime", productData.chargingTime);
        setValue("vehicleWeight", productData.vehicleWeight);
        setValue("ratedPower", productData.ratedPower);
        setValue("colorOptions", productData.colorOptions.join(", "));
        setValue("images", productData.images.join(", "));
      }
    };

    fetchProductData();
  }, [id, setValue]);

  const onSubmit: SubmitHandler<IProduct> = (data) => {
    // Here, you would send the updated data to your backend to save it
    console.log("Updated Product Data:", data);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w mx-auto p-5">
      <h1 className="text-3xl  font-bold mb-4">Update Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block">Product Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Product name is required" })}
            className="border p-2 w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="price" className="block">Price:</label>
          <input
            type="number"
            id="price"
            {...register("price", { required: "Price is required" })}
            className="border p-2 w-full"
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>

        <div>
          <label htmlFor="maxSpeed" className="block">Max Speed:</label>
          <input
            type="text"
            id="maxSpeed"
            {...register("maxSpeed", { required: "Max Speed is required" })}
            className="border p-2 w-full"
          />
          {errors.maxSpeed && <p className="text-red-500">{errors.maxSpeed.message}</p>}
        </div>

        <div>
          <label htmlFor="travelDistance" className="block">Travel Distance:</label>
          <input
            type="text"
            id="travelDistance"
            {...register("travelDistance", { required: "Travel Distance is required" })}
            className="border p-2 w-full"
          />
          {errors.travelDistance && <p className="text-red-500">{errors.travelDistance.message}</p>}
        </div>

        <div>
          <label htmlFor="trunkWidth" className="block">Trunk Width:</label>
          <input
            type="text"
            id="trunkWidth"
            {...register("trunkWidth", { required: "Trunk Width is required" })}
            className="border p-2 w-full"
          />
          {errors.trunkWidth && <p className="text-red-500">{errors.trunkWidth.message}</p>}
        </div>

        <div>
          <label htmlFor="waterproof" className="block">Waterproof:</label>
          <input
            type="text"
            id="waterproof"
            {...register("waterproof", { required: "Waterproof standard is required" })}
            className="border p-2 w-full"
          />
          {errors.waterproof && <p className="text-red-500">{errors.waterproof.message}</p>}
        </div>

        <div>
          <label htmlFor="seatHeight" className="block">Seat Height:</label>
          <input
            type="text"
            id="seatHeight"
            {...register("seatHeight", { required: "Seat Height is required" })}
            className="border p-2 w-full"
          />
          {errors.seatHeight && <p className="text-red-500">{errors.seatHeight.message}</p>}
        </div>

        <div>
          <label htmlFor="chargingTime" className="block">Charging Time:</label>
          <input
            type="text"
            id="chargingTime"
            {...register("chargingTime", { required: "Charging Time is required" })}
            className="border p-2 w-full"
          />
          {errors.chargingTime && <p className="text-red-500">{errors.chargingTime.message}</p>}
        </div>

        <div>
          <label htmlFor="vehicleWeight" className="block">Vehicle Weight:</label>
          <input
            type="text"
            id="vehicleWeight"
            {...register("vehicleWeight", { required: "Vehicle Weight is required" })}
            className="border p-2 w-full"
          />
          {errors.vehicleWeight && <p className="text-red-500">{errors.vehicleWeight.message}</p>}
        </div>

        <div>
          <label htmlFor="ratedPower" className="block">Rated Power:</label>
          <input
            type="text"
            id="ratedPower"
            {...register("ratedPower", { required: "Rated Power is required" })}
            className="border p-2 w-full"
          />
          {errors.ratedPower && <p className="text-red-500">{errors.ratedPower.message}</p>}
        </div>

        <div>
          <label htmlFor="colorOptions" className="block">Color Options:</label>
          <input
            type="text"
            id="colorOptions"
            {...register("colorOptions", { required: "Color Options are required" })}
            className="border p-2 w-full"
          />
          {errors.colorOptions && <p className="text-red-500">{errors.colorOptions.message}</p>}
        </div>

        <div>
          <label htmlFor="images" className="block">Images:</label>
          <input
            type="text"
            id="images"
            {...register("images", { required: "Images are required" })}
            className="border p-2 w-full"
          />
          {errors.images && <p className="text-red-500">{errors.images.message}</p>}
        </div>

        <button type="submit" className="mt-4 bg-primary text-white p-2 w-full">Submit</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
