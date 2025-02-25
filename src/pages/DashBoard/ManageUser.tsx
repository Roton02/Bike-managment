import { useState } from "react";
import PaginationBtn from "@/component/PaginationBtn";

const ManageUser = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    
    // Sample user data (Replace with API data)
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "customer", active: true },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "admin", active: false },
        { id: 3, name: "Michael Lee", email: "michael@example.com", role: "customer", active: true },
    ];

    // Toggle user active status
    const toggleUserStatus = (id:number) => {
        console.log("Toggled status for user ID:", id);
        // Update user status in the backend
    };

    // Update user role
    const updateUserRole = (id:number, newRole:string) => {
        console.log("Updated role for user ID:", id, "to", newRole);
        // Update role in the backend
    };

    return (
        <div className="p-4 bg-gray-100 min-h-screen ">
            <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
            
            <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Role</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-100">
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">
                                    <select 
                                        className="border p-2 rounded" 
                                        value={user.role} 
                                        onChange={(e) => updateUserRole(user.id, e.target.value)}
                                    >
                                        <option value="customer">Customer</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded text-white ${user.active ? 'bg-green-500' : 'bg-red-500'}`}>
                                        {user.active ? "Active" : "Inactive"}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <button
                                        className={`px-4 py-2 text-white rounded ${user.active ? 'bg-red-500' : 'bg-green-500'}`}
                                        onClick={() => toggleUserStatus(user.id)}
                                    >
                                        {user.active ? "Deactivate" : "Activate"}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4">
                <PaginationBtn
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
};

export default ManageUser;
