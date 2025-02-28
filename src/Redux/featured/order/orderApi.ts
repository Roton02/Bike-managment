import { baseApi } from '@/Redux/api/baseApi'
import { IOrder, OrderResponse } from '@/interface/orderData'

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all orders (Admin only)
    getAllOrders: builder.query({
      query: () => ({
        url: '/order/get-order',
        method: 'GET',
      }),
      // providesTags: ['orders'],
    }),

    // Get specific user's orders (Customer)
    getMyOrders: builder.query({
      query: () => ({
        url: '/order/get-single-order',
        method: 'GET',
      }),
      // providesTags: ['orders'],
    }),

    // Create new order
    createOrder: builder.mutation<OrderResponse, Partial<IOrder>>({
      query: (data) => ({
        url: '/order/create-order',
        method: 'POST',
        body: data,
      }),
      // invalidatesTags: ['orders'],
    }),

    // Update order status (Admin only)
    updateOrderStatus: builder.mutation<
      IOrder,
      { orderId: string; updateStatus: string }
    >({
      query: ({ orderId, updateStatus }) => ({
        url: `/order/update-order/${orderId}`,
        method: 'PATCH',
        body: { updateStatus },
      }),
      // invalidatesTags: ['orders'],
    }),

    // Delete order (Admin only)
    deleteOrder: builder.mutation<void, string>({
      query: (orderId) => ({
        url: `/order/delete-order/${orderId}`,
        method: 'DELETE',
      }),
      // invalidatesTags: ['orders'],
    }),
  }),
})

export const {
  useGetAllOrdersQuery,
  useGetMyOrdersQuery,
  useCreateOrderMutation,
  useUpdateOrderStatusMutation,
  useDeleteOrderMutation,
} = orderApi

export default orderApi
