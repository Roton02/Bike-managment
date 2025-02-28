export interface IOrder {
  _id?: string
  customerName: string
  customerEmail: string
  customerAddress: string
  customerPhoneNumber: string
  productName: string
  productPrice: number
  user: string
  product: string
  quantity: number
  totalPrice?: number
  isAproved?: 'Pending' | 'Processing' | 'Shipped' | 'Delivered'
  status?: 'Paid' | 'Failed' | 'Cancelled'
}

export interface OrderResponse {
  success: boolean
  message: string
  data: {
    order: IOrder
    paymentUrl: string
  }
}
