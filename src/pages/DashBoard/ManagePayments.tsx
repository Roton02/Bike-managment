import { useState, useEffect } from "react";
import PaginationBtn from "@/component/PaginationBtn";

interface Payment {
  id: number;
  customerName: string;
  email: string;
  amount: number;
  status: "Successful" | "Failed";
  transactionId: string;
  date: string;
}

const ManagePayments = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch("/payments.json");
        const data: Payment[] = await response.json();
        setPayments(data);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };
    fetchPayments();
  }, []);

  const notifyUser = (email: string, message: string) => {
    console.log(`Sending notification to ${email}: ${message}`);
  };

  const handleRetryPayment = (id: number, email: string) => {
    notifyUser(email, "Your payment failed. Please retry the transaction.");
  };

  const filteredPayments = payments.filter(payment =>
    payment.customerName.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPayments.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Payments</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by customer name..."
        className="p-2 border rounded w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      {/* Payments Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Customer</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Transaction ID</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(payment => (
              <tr key={payment.id} className="text-center">
                <td className="p-2 border">{payment.id}</td>
                <td className="p-2 border">{payment.customerName}</td>
                <td className="p-2 border">${payment.amount}</td>
                <td className={`p-2 border ${payment.status === "Successful" ? "text-green-600" : "text-red-600"}`}>{payment.status}</td>
                <td className="p-2 border">{payment.transactionId}</td>
                <td className="p-2 border">{payment.date}</td>
                <td className="p-2 border">
                  {payment.status === "Failed" && (
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => handleRetryPayment(payment.id, payment.email)}
                    >
                      Retry Payment
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <PaginationBtn
        currentPage={currentPage}
        totalPages={Math.ceil(filteredPayments.length / itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ManagePayments;
