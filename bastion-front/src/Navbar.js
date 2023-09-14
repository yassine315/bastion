import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
    return(
        <>
            <div>
                <div className="navigation">
                    <div className="container">
                        <Link  to="/">Home</Link>
                        <Link to="/request">Request</Link>
                        <Link  to="/supplier">Supplier</Link>
                    </div>
                </div>
            
                <div className="Outlet">
                    <Outlet/>  
                </div>
            </div>
        </>
    )
}