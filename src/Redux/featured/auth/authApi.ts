import { baseApi } from '@/Redux/api/baseApi'

interface UpdateUserData {
  name?: string
  email?: string
  image?: string
  currentPassword?: string
  newPassword?: string
}

interface AuthResponse {
  success: boolean
  message: string
  data: {
    token?: string
    user?: {
      _id: string
      name: string
      email: string
      role: string
      image: string
      isBlocked: boolean
    }
  }
}

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Auth endpoints
    register: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['users'],
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['users'],
    }),

    // User management endpoints (Admin only)
    blockUser: builder.mutation({
      query: (userId) => ({
        url: `/admin/users/${userId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['users'],
    }),

    unBlockUser: builder.mutation({
      query: (userId) => ({
        url: `/admin/unblock/${userId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['users'],
    }),

    // User profile update (Customer & Admin)
    updateUser: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/user/update/${userId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['users'],
    }),

    // Delete user (Admin only)
    deleteCustomer: builder.mutation({
      query: (userId) => ({
        url: `/admin/blogs/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['users'],
    }),

    // Get all users (Admin only)
    getAllCustomers: builder.query({
      query: () => ({
        url: '/get-all-users',
        method: 'GET',
      }),
      providesTags: ['users'],
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: `/get-single-user/${id}`,
        method: 'GET',
      }),
      providesTags: ['users'],
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useBlockUserMutation,
  useUnBlockUserMutation,
  useUpdateUserMutation,
  useDeleteCustomerMutation,
  useGetAllCustomersQuery,
  useGetSingleUserQuery,
} = authApi

export default authApi
