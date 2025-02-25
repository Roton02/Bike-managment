import { useState, useEffect } from "react";
import PaginationBtn from "@/component/PaginationBtn";

interface Order {
  id: number;
  customerName: string;
  totalAmount: number;
  status: string;
  deliveryDate: string;
}

const ManageOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/order.json");
        const data: Order[] = await response.json();
        console.log(data,'rrr');
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  console.log(orders);

  const handleStatusChange = (id: number, newStatus: string) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order));
  };

  const handleDelete = (id: number) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const filteredOrders = orders.filter(order =>
    order.customerName.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Orders</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by customer name..."
        className="p-2 border rounded w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Customer</th>
              <th className="p-2 border">Total</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Delivery Date</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(order => (
              <tr key={order.id} className="text-center">
                <td className="p-2 border">{order.id}</td>
                <td className="p-2 border">{order.customerName}</td>
                <td className="p-2 border">${order.totalAmount}</td>
                <td className="p-2 border">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className="border p-1 rounded"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td className="p-2 border">{order.deliveryDate}</td>
                <td className="p-2 border">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(order.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <PaginationBtn
        currentPage={currentPage}
        totalPages={Math.ceil(filteredOrders.length / itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ManageOrders;
