/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreateBikeMutation } from '@/Redux/featured/bikes/bikesApi'
import { imageUpload } from '@/utils/imageUpload'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

interface IProductForm {
  name: string
  image: FileList
  brand: string
  price: number
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric'
  description: string
  quantity: number
}

const AddProduct = () => {
  const [createBike] = useCreateBikeMutation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProductForm>()

  const onSubmit: SubmitHandler<IProductForm> = async (data) => {
    try {
      // Get the first file from FileList
      const imageFile = data.image[0]

      // Upload image first
      const imageUrl = await imageUpload(imageFile)

      // Prepare final data with image URL
      const productData = {
        name: data.name,
        price: Number(data.price),
        quantity: Number(data.quantity),
        inStock: true,
        category: data.category as 'Mountain' | 'Road' | 'Hybrid' | 'Electric',
        description: data.description.trim(),
        brand: data.brand.trim(),
        image: imageUrl,
      }

      const { data: bike, error } = await createBike(productData)
      if (bike?.success) {
        reset()
        toast.success('bike created successfully')
      }
      console.log(bike)
      // Here you can proceed with your API call to save the product
    } catch (err: any) {
      toast.error('Error creating product:', err.message)
      console.error('Error uploading image:', err)
    }
  }

  return (
    <div className='max-w-xl mx-auto p-5'>
      <h1 className='text-3xl font-bold mb-4'>Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <label htmlFor='name' className='block'>
            Product Name:
          </label>
          <input
            type='text'
            id='name'
            {...register('name', { required: 'Product name is required' })}
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
            {...register('image', { required: 'Image is required' })}
            className='border p-2 w-full'
          />
          {errors.image && (
            <p className='text-red-500'>{errors.image.message}</p>
          )}
        </div>

        <div>
          <label htmlFor='brand' className='block'>
            Brand:
          </label>
          <input
            type='text'
            id='brand'
            {...register('brand', { required: 'Brand is required' })}
            className='border p-2 w-full'
          />
          {errors.brand && (
            <p className='text-red-500'>{errors.brand.message}</p>
          )}
        </div>

        <div>
          <label htmlFor='price' className='block'>
            Price:
          </label>
          <input
            type='number'
            id='price'
            {...register('price', { required: 'Price is required' })}
            className='border p-2 w-full'
          />
          {errors.price && (
            <p className='text-red-500'>{errors.price.message}</p>
          )}
        </div>

        <div>
          <label htmlFor='category' className='block'>
            Category:
          </label>
          <select
            id='category'
            {...register('category', { required: 'Category is required' })}
            className='border p-2 w-full'
          >
            <option value='Mountain'>Mountain</option>
            <option value='Road'>Road</option>
            <option value='Hybrid'>Hybrid</option>
            <option value='Electric'>Electric</option>
          </select>
          {errors.category && (
            <p className='text-red-500'>{errors.category.message}</p>
          )}
        </div>

        <div>
          <label htmlFor='description' className='block'>
            Description:
          </label>
          <textarea
            id='description'
            {...register('description', {
              required: 'Description is required',
            })}
            className='border p-2 w-full'
          />
          {errors.description && (
            <p className='text-red-500'>{errors.description.message}</p>
          )}
        </div>

        <div>
          <label htmlFor='quantity' className='block'>
            Quantity:
          </label>
          <input
            type='number'
            id='quantity'
            {...register('quantity', { required: 'Quantity is required' })}
            className='border p-2 w-full'
          />
          {errors.quantity && (
            <p className='text-red-500'>{errors.quantity.message}</p>
          )}
        </div>
        <button type='submit' className='mt-4 bg-primary text-white p-2 w-full'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddProduct
