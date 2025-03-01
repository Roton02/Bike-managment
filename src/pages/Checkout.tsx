import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetBikeQuery } from '@/Redux/featured/bikes/bikesApi'
import { useAppSelector } from '@/Redux/hooks'
import { UseCurrentUser } from '@/Redux/featured/auth/authSlice'
import { toast } from 'react-toastify'

export default function Checkout() {
  const { id } = useParams()
  const { data: bikeData } = useGetBikeQuery(id as string)
  const user = useAppSelector(UseCurrentUser)
  const bike = bikeData?.data

  const [quantity, setQuantity] = useState(1)
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const incrementQuantity = () => {
    if (bike?.quantity && quantity < bike.quantity) {
      setQuantity(prev => prev + 1)
    } else {
      toast.error('Maximum quantity reached!')
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const calculateTotalPrice = () => {
    return bike?.price ? bike.price * quantity : 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const orderData = {
      customerName: user?.name,
      customerEmail: user?.email,
      customerAddress: address,
      customerPhoneNumber: phoneNumber,
      productName: bike?.name,
      productPrice: bike?.price,
      user: user?._id,
      product: bike?._id,
      quantity: quantity
    }

    console.log('Order Data:', orderData)
    // Here you can add your order creation logic
  }

  if (!bike) {
    return <div className="text-center py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Product Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img 
            src={bike.image} 
            alt={bike.name} 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{bike.name}</h2>
          <p className="text-gray-600 mb-4">{bike.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold">৳{bike.price}</span>
            <div className="flex items-center gap-3">
              <button 
                onClick={decrementQuantity}
                className="px-3 py-1 bg-gray-200 rounded"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button 
                onClick={incrementQuantity}
                className="px-3 py-1 bg-gray-200 rounded"
                disabled={bike.quantity <= quantity}
              >
                +
              </button>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">
              Total: ৳{calculateTotalPrice()}
            </p>
          </div>
        </div>

        {/* Order Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Delivery Information</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={user?.name}
                disabled
                className="w-full p-2 border rounded bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={user?.email}
                disabled
                className="w-full p-2 border rounded bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Delivery Address
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full p-2 border rounded"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
