import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user,signOutUser } = use(AuthContext);

  const handleSignOut=()=>{
          signOutUser()
          .then(result=>{
            console.log(result)
          })
          .catch(error=>{
            console.log(error)
          })
    }

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allProducts">All Products</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/myProducts">My Products</NavLink>
          </li>
          <li>
            <NavLink to="/myBids">My Bids</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">
            Smart <span>Deals</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <NavLink onClick={handleSignOut} className="btn" to="/">Sign Out</NavLink>
          ) : (
            <NavLink className="btn" to="/register">Log In</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
