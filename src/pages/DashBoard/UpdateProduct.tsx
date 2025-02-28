/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  useGetBikeQuery,
  useUpdateBikeMutation,
} from '@/Redux/featured/bikes/bikesApi'
import { toast } from 'react-toastify'
import { imageUpload } from '@/utils/imageUpload'

interface IBikeForm {
  name?: string
  image?: FileList | string
  brand?: string
  price?: number
  category?: 'Mountain' | 'Road' | 'Hybrid' | 'Electric'
  description?: string
  quantity?: number
}

const UpdateProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: bikeData, isLoading } = useGetBikeQuery(id as string)
  const [updateBike, { isLoading: isUpdating }] = useUpdateBikeMutation()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IBikeForm>()

  useEffect(() => {
    if (bikeData?.data) {
      const bike = bikeData.data
      setValue('name', bike.name)
      setValue('brand', bike.brand)
      setValue('price', bike.price)
      setValue('category', bike.category)
      setValue('description', bike.description)
      setValue('quantity', bike.quantity)
    }
  }, [bikeData, setValue])

  const onSubmit: SubmitHandler<IBikeForm> = async (data) => {
    try {
      const updateData: Partial<IBikeForm> = {
        ...(data.name && { name: data.name }),
        ...(data.brand && { brand: data.brand }),
        ...(data.price && { price: Number(data.price) }),
        ...(data.category && { category: data.category }),
        ...(data.description && { description: data.description }),
        ...(data.quantity && { quantity: Number(data.quantity) }),
      }

      if (data.image instanceof FileList && data.image[0]) {
        const imageUrl = await imageUpload(data.image[0])
        updateData.image = imageUrl
      }

      const response = await updateBike({
        id: id as string,
        data: updateData,
      }).unwrap()

      if (response?.success) {
        toast.success('Bike updated successfully')
        navigate('/dashBoard/product-management')
        //http://localhost:5173/dashBoard/product-management
      }
    } catch (error: any) {
      toast.error(error?.data?.message || 'Failed to update bike')
    }
  }

  if (isLoading || isUpdating) {
    return <div>Loading...</div>
  }

  return (
    <div className='max-w-xl mx-auto p-5'>
      <h1 className='text-3xl font-bold mb-4'>Update Bike</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <label htmlFor='name' className='block'>
            Product Name:
          </label>
          <input
            type='text'
            id='name'
            {...register('name')}
            className='border p-2 w-full'
          />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor='image' className='block'>
            Image:
          </label>
          <input
            type='file'
            id='image'
            accept='image/*'
            {...register('image')}
            className='border p-2 w-full'
          />
        </div>

        <div>
          <label htmlFor='brand' className='block'>
            Brand:
          </label>
          <input
            type='text'
            id='brand'
            {...register('brand')}
            className='border p-2 w-full'
          />
        </div>

        <div>
          <label htmlFor='price' className='block'>
            Price:
          </label>
          <input
            type='number'
            id='price'
            {...register('price')}
            className='border p-2 w-full'
          />
        </div>

        <div>
          <label htmlFor='category' className='block'>
            Category:
          </label>
          <select
            id='category'
            {...register('category')}
            className='border p-2 w-full'
          >
            <option value='Mountain'>Mountain</option>
            <option value='Road'>Road</option>
            <option value='Hybrid'>Hybrid</option>
            <option value='Electric'>Electric</option>
          </select>
        </div>

        <div>
          <label htmlFor='description' className='block'>
            Description:
          </label>
          <textarea
            id='description'
            {...register('description')}
            className='border p-2 w-full'
          />
        </div>

        <div>
          <label htmlFor='quantity' className='block'>
            Quantity:
          </label>
          <input
            type='number'
            id='quantity'
            {...register('quantity')}
            className='border p-2 w-full'
          />
        </div>

        <button
          type='submit'
          className='mt-4 bg-primary text-white p-2 w-full'
          disabled={isUpdating}
        >
          {isUpdating ? 'Updating...' : 'Update Bike'}
        </button>
      </form>
    </div>
  )
}

export default UpdateProduct
