import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="col-md-4 mb-4">
      <div
        className="card h-100 shadow-lg border-0"
        style={{
          borderRadius: "15px",
          transition: "0.3s",
          cursor: "pointer",
        }}
      >
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{
            height: "250px",
            objectFit: "cover",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
          onClick={() => navigate(`/product/${product._id}`)}
        />

        <div className="card-body">
          <h5
            onClick={() => navigate(`/product/${product._id}`)}
            style={{ cursor: "pointer" }}
          >
            {product.name}
          </h5>

          <p>{product.description}</p>

          <h4 className="text-success">₹{product.price}</h4>

          <button
          className="btn btn-primary w-100"
          onClick={() => {
          addToCart(product);
          toast.success("Product added to cart!");
          }}
         >
          Add To Cart
         </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;