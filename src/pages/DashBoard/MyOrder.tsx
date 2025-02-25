import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Order {
    id: string;
    totalAmount: number;
    status: string;
}

const MyOrder = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        // এখানে API কল করে ইউজারের অর্ডার লোড করুন
        fetch("/order.json")
            .then((res) => res.json())
            .then((data: Order[]) => setOrders(data))
            .catch((error) => console.error("Error fetching orders:", error));
    }, []);

    const getStatusStep = (status: string): number => {
        const steps = ["Processing", "Shipped", "Out for Delivery", "Delivered"];
        return steps.indexOf(status);
    };

    const handleCancelOrder = (orderId: string) => {
        console.log(`Order ${orderId} cancelled`);
        // এখানে API কল করে অর্ডার ক্যানসেল করুন
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4 text-center">My Orders</h2>
            {orders.length === 0 ? (
                <p className="text-center">No orders found.</p>
            ) : (
                <div className="space-y-4">
                    {orders.map((order) => (
                        <div key={order.id} className="border p-4 rounded-lg shadow-sm bg-white">
                            <h3 className="text-lg font-semibold">Order ID: {order.id}</h3>
                            <p>Total Price: ${order.totalAmount}</p>
                            <p>Status: {order.status}</p>
                            <div className="flex flex-wrap gap-2 mt-2 items-center">
                                {["Processing", "Shipped", "Out for Delivery", "Delivered"].map((step, index, array) => (
                                    <div key={index} className="flex items-center">
                                        <div
                                            className={`px-4 py-1 text-sm rounded-full ${index <= getStatusStep(order.status) ? "bg-primary text-white" : "bg-gray-300"}`}
                                        >
                                            {step}
                                        </div>
                                        {index < array.length - 1 && <ArrowRight className="w-4 h-4" />}
                                    </div>
                                ))}
                            </div>
                            {order.status === "Processing" ? (
                                <button 
                                    className="mt-3 px-4 py-2 w-full sm:w-auto bg-red-500 text-white rounded-lg hover:bg-red-600"
                                    onClick={() => handleCancelOrder(order.id)}
                                >
                                    Cancel Order
                                </button>
                            ) : (
                                <p className="mt-2 text-sm text-red-500 text-center">Order cannot be canceled at this stage.</p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrder;
