 
import { baseApi } from '@/Redux/api/baseApi'

const bikesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (searchTerm?: string) => ({
        url: searchTerm
          ? `/bike?searchTerm=${encodeURIComponent(searchTerm)}`
          : '/bike',
        method: 'GET',
      }),
      providesTags: ['bikes'],
    }),

    getBike: builder.query({
      query: (id: string) => ({
        url: `/bike/${id}`,
        method: 'GET',
      }),
      providesTags: ['bikes'],
    }),

    createBike: builder.mutation({
      query: (data) => ({
        url: '/bike',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['bikes'],
    }),

    updateBike: builder.mutation({
      query: ({ id, data }) => ({
        url: `/bike/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['bikes'],
    }),

    deleteBike: builder.mutation<void, string>({
      query: (id) => ({
        url: `/bike/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['bikes'],
    }),
  }),
})

export const {
  useGetAllBikesQuery,
  useGetBikeQuery,
  useCreateBikeMutation,
  useUpdateBikeMutation,
  useDeleteBikeMutation,
} = bikesApi

export default bikesApi
