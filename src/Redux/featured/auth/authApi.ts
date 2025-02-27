import { baseApi } from '@/Redux/api/baseApi'

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Register user
    register: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),

    // Login user
    login: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/login',
        method: 'POST',
        body: userInfo,
      }),
    }),

    // Block/Unblock user (Admin only)
    blockUser: builder.mutation({
      query: (userId) => ({
        url: `/admin/users/${userId}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Users' }],
    }),
    unBlockUser: builder.mutation({
      query: (userId) => ({
        url: `/admin/unblock/${userId}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Users' }],
    }),

    // Delete customer (Admin only)
    deleteCustomer: builder.mutation({
      query: (id) => ({
        url: `/admin/blogs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Users' }],
    }),

    // Get all customers (Admin only)
    getAllCustomers: builder.query({
      query: () => ({
        url: '/get-all-users',
        method: 'GET',
      }),
      providesTags: [{ type: 'Users' }],
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useBlockUserMutation,
  useDeleteCustomerMutation,
  useGetAllCustomersQuery,
  useUnBlockUserMutation,
} = authApi
