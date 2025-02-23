import { Facebook, Instagram,  Twitter } from "lucide-react";
import logo  from "../assets/logo-white.png"

const Footer= () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-10 px-5 font-sans">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
        
        {/* Left Section */}
        <div className="max-w-md">
          <img src={logo} alt="Bike Bike Logo" className="h-12 mb-4" />
          <h3 className="text-lg font-semibold">ELECTRIC MOTORBIKE <br /> BIKE BIKE VIETNAM CO., LTD</h3>
          <p className="text-sm mt-2">
            <strong>Tax Code/Enterprise Code:</strong> 0109826276 <br />
            First issued by Hanoi Department of Planning and Investment on October 1, 2019 and subsequent changes.
          </p>
          <p className="text-sm mt-2">
            <strong>Head office address:</strong> No. 7, Bang Lang 1 Street, Vinhomes Riverside Urban Area, Viet Hung Ward, Long Bien District, Hanoi City, Vietnam.
          </p>
        </div>

        {/* Middle Section - New Products */}
        <div>
          <h4 className="text-lg font-semibold mb-2">NEW PRODUCTS</h4>
          <ul className="space-y-1">
            <li>YADEA i8</li>
            <li>YADEA Vigor</li>
            <li>YADEA Ossy</li>
          </ul>
        </div>

        {/* Middle Section - Explore */}
        <div>
          <h4 className="text-lg font-semibold mb-2">EXPLORE</h4>
          <ul className="space-y-1">
            <li>Product</li>
            <li>About</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right Section - Contact Info & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-2">FOLLOW BIKE BIKE</h4>
          <div className="flex space-x-4">
            <a href="#"> <Instagram></Instagram></a>
           
            <a href="#"><Facebook></Facebook></a>
            <a href="#"><Twitter></Twitter></a>
          </div>

          <h4 className="text-lg font-semibold mt-4 mb-2">CONTACT INFO</h4>
          <p className="text-sm">
            Hotline: <a href="tel:+842046299288" className="text-orange-500">(+84) 204 6299 288</a>
          </p>
          <p className="text-sm">
            Email: <a href="mailto:Work.nguyenductai@gmail.com" className="text-orange-500">Work.nguyenductai@gmail.com</a>
          </p>
        </div>

      </div>

      {/* Footer Bottom */}
      <hr className="border-gray-600 my-6" />
      <p className="text-center text-sm">© {new Date().getFullYear()} - Copyright belongs to Electric Motorbike Bike Bike Vietnam Co., LTD</p>
    </footer>
  );
};

export default Footer;
