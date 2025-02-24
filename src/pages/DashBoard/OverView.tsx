import { useState, useEffect } from "react";
import { 
    BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer 
} from "recharts";
import { FaUsers, FaBoxOpen, FaShoppingCart, FaDollarSign } from "react-icons/fa";

// Define types for the statistics
interface Product {
    name: string;
    sales: number;
}

interface Stats {
    totalSales: number;
    activeUsers: number;
    popularProducts: Product[];
    pendingOrders: number;
}

const OverView = () => {
    const [stats, setStats] = useState<Stats>({
        totalSales: 0,
        activeUsers: 0,
        popularProducts: [],
        pendingOrders: 0,
    });

    

    useEffect(() => {
        // Fetch data from API (Replace with real API calls)
        const fetchData = async () => {
            // Simulated API Response
            const data: Stats = {
                totalSales: 15000,
                activeUsers: 120,
                popularProducts: [
                    { name: "Helmet", sales: 500 },
                    { name: "Gloves", sales: 300 },
                    { name: "Jacket", sales: 200 },
                ],
                pendingOrders: 25,
            };
            setStats(data);
        };

        fetchData();
    }, []);

    const COLORS: string[] = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <div className="p-4 py-8 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-8">Dashboard Overview</h2>
            
            {/* Statistics Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="bg-primary p-4 shadow-lg rounded-lg flex items-center space-x-4">
                    <FaDollarSign className="text-green-500 text-3xl" />
                    <div>
                        <p className="text-white">Total Sales</p>
                        <h3 className="text-xl font-bold text-white">${stats.totalSales}</h3>
                    </div>
                </div>
                <div className="bg-primary p-4 shadow-lg rounded-lg flex items-center space-x-4">
                    <FaUsers className="text-blue-500 text-3xl" />
                    <div>
                        <p className="text-white">Active Users</p>
                        <h3 className="text-xl font-bold text-white">{stats.activeUsers}</h3>
                    </div>
                </div>
                <div className="bg-primary p-4 shadow-lg rounded-lg flex items-center space-x-4">
                    <FaShoppingCart className="text-yellow-500 text-3xl" />
                    <div>
                        <p className="text-white">Pending Orders</p>
                        <h3 className="text-xl font-bold text-white">{stats.pendingOrders}</h3>
                    </div>
                </div>
                <div className="bg-primary p-4 shadow-lg rounded-lg flex items-center space-x-4">
                    <FaBoxOpen className="text-red-500 text-3xl" />
                    <div>
                        <p className="text-white">Popular Products</p>
                        <h3 className="text-3xl font-bold text-white">{stats.popularProducts.length}</h3>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Bar Chart */}
                <div className="bg-primary bg-opacity-10 p-6 shadow-lg rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={stats.popularProducts}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="sales" fill="#0f5e8e" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                
                {/* Pie Chart */}
                <div className="bg-primary bg-opacity-10 p-6 shadow-lg rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Sales Distribution</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={stats.popularProducts}
                                dataKey="sales"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label
                            >
                                {stats.popularProducts.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
         
        </div>
    );
};

export default OverView;
