import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import API from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    try {
      await API.post("/orders", {
        ...form,
        products: cart,
        totalAmount,
      });

      toast.success("Order Placed Successfully!");

      navigate("/");
    } catch (error) {
      toast.error("Failed to place order");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Checkout</h2>

      <form onSubmit={placeOrder}>
        <input
          className="form-control mb-3"
          placeholder="Full Name"
          name="name"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          placeholder="Phone Number"
          name="phone"
          onChange={handleChange}
          required
        />

        <textarea
          className="form-control mb-3"
          placeholder="Address"
          name="address"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          placeholder="City"
          name="city"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          placeholder="Pincode"
          name="pincode"
          onChange={handleChange}
          required
        />

        <h4>Total: ₹{totalAmount}</h4>

        <button className="btn btn-success mt-3 w-100">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;