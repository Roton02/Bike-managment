
import { Link, Outlet } from "react-router-dom";


const DashBoard = () => {

    return (
        <div className=" grid grid-cols-12  gap-2 min-h-screen">
            <div className="  lg:border-r-4 md:border-r-4 border-primary col-span-2 p-4 ">
                
              <Link to={''}>OverView</Link>
              <Link to={''}>User Management</Link>
              <Link to={''}>Product Management </Link>
              <Link to={''}>Order Management </Link>
              <Link to={''}>Payment Management </Link>

              {/* user  */}

              
                 
                 </div>
            <div className=" col-span-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;