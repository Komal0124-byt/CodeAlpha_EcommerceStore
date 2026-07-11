import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
  const fetchProduct = async () => {
    // API call
  };

  fetchProduct();
}, []);

  const fetchProduct = async () => {
    try {
      const { data } = await API.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-6">
          <h2>{product.name}</h2>

          <h3 className="text-success mt-3">
            ₹{product.price}
          </h3>

          <p className="mt-3">
            {product.description}
          </p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Stock:</strong> {product.stock}
          </p>

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

export default ProductDetails;