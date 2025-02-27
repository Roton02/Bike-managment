import BikeData from '@/interface/bikedata'
import { baseApi } from '@/Redux/api/baseApi'

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => ({
        url: '/order/get-order',
        method: 'GET',
      }),
      // providesTags: [{ type: 'bikes' as const, id: 'LIST' }],
    }),

    getBike: builder.query({
      query: (id: string) => ({
        url: `/bike/${id}`,
        method: 'GET',
      }),
      // providesTags: (result, error, id) => [{ type: 'bikes' as const, id }],
    }),

    createBike: builder.mutation<BikeData, Partial<BikeData>>({
      query: (data) => ({
        url: '/bike',
        method: 'POST',
        body: data,
      }),
      // invalidatesTags: [{ type: 'bikes' as const, id: 'LIST' }],
    }),

    updateBike: builder.mutation<
      BikeData,
      { id: string; data: Partial<BikeData> }
    >({
      query: ({ id, data }) => ({
        url: `/bike/${id}`,
        method: 'PATCH',
        body: data,
      }),
      // invalidatesTags: (result, error, { id }) => [
      //   { type: 'bikes' as const, id },
      // ],
    }),

    deleteBike: builder.mutation<void, string>({
      query: (id) => ({
        url: `/bike/${id}`,
        method: 'DELETE',
      }),
      // invalidatesTags: (result, error, id) => [{ type: 'bikes' as const, id }],
    }),
  }),
})

export const {
  useGetAllOrderQuery,
  useGetBikeQuery,
  useCreateBikeMutation,
  useUpdateBikeMutation,
  useDeleteBikeMutation,
} = orderApi

export default orderApi
