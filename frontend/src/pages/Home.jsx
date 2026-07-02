import { useEffect, useState, useContext } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import { SearchContext } from "../context/SearchContext";
import { CategoryContext } from "../context/CategoryContext";

function Home() {
  const [products, setProducts] = useState([]);

  const { search } = useContext(SearchContext);
  const { category, setCategory } = useContext(CategoryContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="container mt-4">
      {/* Hero Banner */}
      <div
        className="text-center text-white p-5 rounded mb-5"
        style={{
          background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
        }}
      >
        <h1 className="display-4 fw-bold">
          Welcome to ShopEase 🛒
        </h1>

        <p className="lead mt-3">
          Discover amazing products at unbeatable prices.
        </p>

        <button className="btn btn-warning btn-lg mt-3">
          Shop Now
        </button>
      </div>

      {/* Category Buttons */}
      <div className="mb-4 text-center">
        <button
          className="btn btn-outline-primary m-2"
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className="btn btn-outline-primary m-2"
          onClick={() => setCategory("Electronics")}
        >
          Electronics
        </button>

        <button
          className="btn btn-outline-primary m-2"
          onClick={() => setCategory("Fashion")}
        >
          Fashion
        </button>

        <button
          className="btn btn-outline-primary m-2"
          onClick={() => setCategory("Shoes")}
        >
          Shoes
        </button>
      </div>

      {/* Products */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <h4 className="text-center">No Products Found</h4>
        )}
      </div>
    </div>
  );
}

export default Home;