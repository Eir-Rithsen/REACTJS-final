import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav className="navbar-custom">
      <div className="d-flex align-items-center">
        <Link to="/" className="navbar-brand text-white">E-Commerce</Link>
      </div>
      <div>
        <NavLink to="/productos" className="me-3">Productos</NavLink>
        <NavLink to="/carrito" className="me-3">
          <FaShoppingCart /> <span className="badge bg-primary">{cart.length}</span>
        </NavLink>
        <NavLink to="/admin" className="me-3">Admin</NavLink>
        {user ? (
          <>
            <span className="me-2"><FaUser /> {user.name}</span>
            <button className="btn btn-sm btn-outline-light" onClick={logout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login" className="btn btn-sm btn-light">Login</NavLink>
        )}
      </div>
    </nav>
  );
}
