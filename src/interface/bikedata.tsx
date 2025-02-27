// export interface BikeData {
//     id: number;
//     name: string;
//     price: number;
//     images: string[]; // Array of image URLs
//     colorOptions: string[]; // Multiple color options
//     bestSeller: boolean;
//     category: string;
//     rating: number;
//     warranty: string;
//     description: string;
//     stock: number;
//     color: string;
//     weight: number;
//     size: string;
//     material: string;
//     speed: number;
//     brake: string;
//     suspension: string;
//     maxSpeed: string;
//     waterproof: string;
//     trunkWidth: string;
//     seatHeight: string; // Added from your data
//     groundClearance: string; // Added from your data
//     chargingTime: string; // Added from your data
//     vehicleWeight: string; // Added from your data
//     permissibleWeight: string; // Added from your data
//     ratedPower: string; // Added from your data
//     dimensions: string; // Added from your data
//     screen: string; // Added from your data
//     travelDistance: string; // Added from your data
//   }

// interface BikeData {
//   id: number
//   _id?: string
//   name: string
//   image: string
//   brand: string
//   price: number
//   category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric'
//   description: string
//   quantity: number
//   inStock: boolean
// }
interface BikeData {
  id: number
  _id?: string
  name: string
  image: string
  brand: string
  price: number
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric'
  description: string
  quantity: number
  inStock: boolean
  colorOptions: string[] // Multiple color options
  bestSeller: boolean
  rating: number
  warranty: string
  stock: number
  color: string
  weight: number
  size: string
  material: string
  speed: number
  brake: string
  suspension: string
  maxSpeed: string
  waterproof: string
  trunkWidth: string
  seatHeight: string
  groundClearance: string
  chargingTime: string
  vehicleWeight: string
  permissibleWeight: string
  ratedPower: string
  dimensions: string
  screen: string
  travelDistance: string
}

export default BikeData


export type TBikeRespose = {
  success: boolean,
  message: string,
  data?: BikeData | BikeData[]
}
// export default BikeData
