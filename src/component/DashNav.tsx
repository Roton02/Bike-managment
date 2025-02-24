import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import { user } from "./Navbar";
import logo from "../assets/logo-white.png"


const DashNav = () => {

    const adminLinks = [
        { to: '/dashBoard/', label: 'OverView' },
        { to: '/dashBoard/userManagement', label: 'User Management' },
        { to: '/dashBoard/product-management', label: 'Product Management' },
        { to: '/dashBoard/order-management', label: 'Order Management' },
        { to: '/dashBoard/payment-management', label: 'Payment Management' }
    ];

    const userLinks = [
        { to: '/dashBoard/profile', label: 'My Profile' },
        { to: '/dashBoard/orders', label: 'My Order' },
        { to: '/dashBoard/support', label: 'Support & Help' }
    ];

    return (
        <div  className=" h-full lg:min-h-screen min-h-screen flex flex-col justify-between ">
              {/* Logo */}
              <div className="bg-primary p-3">
                    <NavLink to='/' className='flex items-center justify-center'>
                        <img className='w-auto h-8' src={logo} alt='BikeXpress' />
                    </NavLink>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 p-4 flex flex-col text-white">
                    <NavLink to="/" className="px-3 py-1 shadow-xl mb-2 bg-primary font-semibold hover:text-black text-white">Home</NavLink>

                    {(user?.role === "admin" ? adminLinks : userLinks).map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) => `px-3 py-1 shadow-xl mb-2 bg-primary font-semibold hover:text-black ${isActive ? 'text-black' : 'text-white'}`}
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>

                {/* Logout */}
                <div className="bg-primary p-2">
                    <NavLink
                        to='/login'
                        className='gap-2 text-center flex justify-center items-center text-white px-2 py-1 bg-primary rounded-sm hover:bg-blue-700'
                    >
                        <LogOut size={20} /> LogOut
                    </NavLink>
                </div>
        </div>
    );
};

export default DashNav;