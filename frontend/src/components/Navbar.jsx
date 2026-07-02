import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { SearchContext } from "../context/SearchContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { search, setSearch } = useContext(SearchContext);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={{
        background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
      }}
    >
     <div className="container">
  <Link className="navbar-brand fw-bold fs-3" to="/">
    🛒 ShopEase
  </Link>

  <form className="d-flex me-3">
    <input
      className="form-control"
      type="search"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </form>

  <div className="navbar-nav ms-auto">
    <Link className="nav-link text-white mx-2" to="/">
      Home
    </Link>

    <Link className="nav-link text-white mx-2" to="/cart">
      🛍 Cart ({cart.length})
    </Link>

    <Link className="nav-link text-white mx-2" to="/login">
      Login
    </Link>

    <Link className="nav-link text-white mx-2" to="/register">
      Register
    </Link>
  </div>
</div>
    </nav>
  );
}

export default Navbar;