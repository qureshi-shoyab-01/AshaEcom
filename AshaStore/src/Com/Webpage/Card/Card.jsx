import React, { useEffect, useState } from "react";
import "./Card.css";
import "./Modal.css";
import "./CardRes.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addProducts, setAddProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      let response = await fetch(
        "http://localhost:7000/api/v1/auth/ProductsFacthing"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let result = await response.json();
      console.log("API Response:", result); // Log the response

      if (Array.isArray(result.data)) {
        setAddProducts(result.data);
      } else {
        console.error("Expected an array but got:", result.data);
        setAddProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setAddProducts([]);
    }
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setTotal(product.price * quantity);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    if (selectedProduct) {
      setTotal(selectedProduct.price * newQuantity);
    }
  };

  const handleNavigate = () => {
    navigate("/Checkout");
  };

  return (
    <>
      <div className="card-container">
        {addProducts.length > 0 ? (
          addProducts.map((product) => (
            <div className="CardComponent" key={product._id}>
              <div className="Card_img_component">
                <img
                  src={product.imageName}
                  alt={`Product ${product.fullbrandname}`}
                  onClick={() => handleOpenModal(product)}
                />
                <h3>{product.fullbrandname}</h3>
                <p>
                  <span>Rs.{product.price}</span>
                  <del>MRP - Rs.{product.mrp}</del>
                </p>
                <button
                  className="Add-card-button"
                  onClick={() => handleOpenModal(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>

      {isModalOpen && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              <CloseIcon className="close-button" />
            </button>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                      <div className="modal-img">
                        <img
                          src={selectedProduct.imageName}
                          alt={selectedProduct.brandname}
                        />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-6">
                      <div className="modal-product-details-component">
                        <h2>{selectedProduct.fullbrandname}</h2>
                        <p className="Dis-content">
                          {selectedProduct.Brandinformation}
                        </p>
                        <p>
                          <span>Rs.{selectedProduct.price}</span>
                          <del>MRP - Rs.{selectedProduct.mrp}</del>
                        </p>
                        <h3>
                          Category:{" "}
                          <span style={{ color: "green" }}>
                            {selectedProduct.category}
                          </span>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="modal-product-details-component">
                        <div className="button-context">
                          <label>
                            <span className="Qty-span">
                              <b>Quantity :- </b>
                            </span>
                            <input
                              type="number"
                              value={quantity}
                              onChange={handleQuantityChange}
                            />
                          </label>
                          <button>ADD TO CART</button>
                          <button className="Buy-now" onClick={handleNavigate}>
                            BUY NOW
                          </button>
                        </div>
                        <p className="Total-context">
                          Total: ₨ {total.toFixed(2)}
                        </p>
                        <hr />
                        <p className="Dis-content">
                          Additional product details or information can go here.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
