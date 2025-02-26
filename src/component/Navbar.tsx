import { useState } from "react";
import {  NavLink } from "react-router-dom";
import { Menu, X, LogIn, ShoppingCart } from "lucide-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import logo from "../assets/Logo.png";

export const user = {
    name: "Mohammed Sanaullah Roton",
    email: "roton@example.com",
    image: "https://i.pravatar.cc/40",
    isLoggedIn: true,
    role: "admin",
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const [cartCount,] = useState(0); // New state for cart count

    const toggleDrawer = () => {
        setIsOpenDrawer((prevState) => !prevState);
    };

    const navLinks = [
        { path: "/", name: "Home" },
        { path: "/products", name: "Products" },
        { path: "/about", name: "About" },
        { path: "/news", name: "News" },
        { path: "/contact", name: "Contact" },
    ];

    return (
        <nav className="">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="flex items-center">
                    <img className="w-auto h-8" src={logo} alt="BikeXpress" />
                </NavLink>

                {/* Nav Links (Centered) */}
                <div className="hidden lg:flex gap-6 mx-auto">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-lg font-medium px-3 py-2 rounded-md transition duration-300 ${
                                    isActive
                                        ? "text-primary dark:text-blue-400"
                                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Login/Profile Section */}
                <div className="relative flex gap-4 items-center">
                    {/* Cart */}
                    <button onClick={toggleDrawer} className="relative hover:bg-primary bg-opacity-30 p-1 rounded-full hover:text-white">
                        <ShoppingCart size={30} strokeWidth={0.95} />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {/* Drawer */}
                    <Drawer open={isOpenDrawer} onClose={toggleDrawer} direction="right">
                        <div>Hello World</div>
                    </Drawer>

                    {/* Profile Section */}
                    {user.isLoggedIn && (
                        <div className="relative group cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
                            <img className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500" src={user.image} alt="Profile" />
                        </div>
                    )}

                    {!user.isLoggedIn && (
                        <NavLink to="/login" className="flex items-center gap-2 dark:text-gray-200 px-2 py-1 bg-primary text-white rounded-sm hover:bg-blue-700">
                            <LogIn size={20} /> Login
                        </NavLink>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-500 dark:text-gray-200 focus:outline-none">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
