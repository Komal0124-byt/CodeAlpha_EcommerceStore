import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <h4>Your cart is empty.</h4>
      ) : (
        <>
          <div className="row">
            {cart.map((item, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "250px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h5>{item.name}</h5>

                    <p>{item.description}</p>

                    <h4 className="text-success">₹{item.price}</h4>

                    <div className="d-flex align-items-center gap-2 mb-3">
                      <button
                        className="btn btn-secondary"
                        onClick={() => decreaseQuantity(item._id)}
                      >
                        -
                      </button>

                      <strong>{item.quantity}</strong>

                      <button
                        className="btn btn-secondary"
                        onClick={() => increaseQuantity(item._id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="btn btn-danger w-100"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

         <hr />

          <h3>Total: ₹{totalPrice}</h3>

         <div className="text-end mt-4">
           <Link to="/checkout" className="btn btn-success btn-lg">
              Proceed to Checkout
           </Link>
         </div>
        </>
      )}
    </div>
  );
}

export default Cart;
