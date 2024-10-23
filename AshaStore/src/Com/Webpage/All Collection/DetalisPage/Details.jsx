import React, { useEffect, useState } from "react";
import '../../Card/Modal.css'
import '../../Card/CardRes.css'
import { Navigate, useNavigate } from "react-router-dom";


const Details = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedProduct) {
          setTotal(selectedProduct.price * quantity);
        }
      }, [selectedProduct, quantity]);

      const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value, 10)); // Convert input value to integer
      };
    
      const handalnavigate = () => {
        navigate("/Checkout");
      };
  return (
    <>
     <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                  <div className="modal-img">
                    <img src="img/item1.jpg" alt="item1" />
                    {/* <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "item1",
                      isFluidWidth: true, // Makes the image responsive
                      src: "img/tawa1_.webp", // Required
                      width: 500, // Optional, not needed if isFluidWidth is true
                      height: 800, // Optional, not needed if isFluidWidth is true
                    },
                    largeImage: {
                      src: "img/tawa1_.webp", // Required
                      width: 200, // Required
                      height: 1600, // Required
                    },
                    isHintEnabled: true, // Enables hint on hover
                  }}
                /> */}
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-6">
                  <div className="modal-product-details-component">
                    <h2>Round Neck T-Shirt</h2>
                    <p className="Dis-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam unde, minus cum tempore modi ad, quo saepe a optio
                      labore, eius consectetur debitis dolorem error vel nemo
                      odit earum commodi exercitationem eligendi nulla.
                      Accusantium tempora odio ipsam? Ratione doloremque quaerat
                      tempore quasi sed inventore iusto voluptates est, quam, ea
                      praesentium.
                    </p>
                    <p>
                      <span>Rs.430</span> <del>MRP - Rs.480</del>
                    </p>
                    <h3>
                      category:- <span style={{ color: "green" }}>Men</span>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="modal-product-details-component">
                  <div className="button-context">
                    <label>
                    <span className="Qty-span"><b>Quantity  :- </b></span> 
                    <input
                      type="number"
                      value={quantity}
                      onChange={handleQuantityChange}
                    />
                    </label>
                    <button>ADD TO CARD</button>
                    <button className="Buy-now" onClick={handalnavigate}>
                      BUY NOW
                    </button>
                  </div>
                  <p className="Total-context">Total: ₨ {total.toFixed(2)}</p>
                  <hr/>
                  <p className="Dis-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam unde, minus cum tempore modi ad, quo saepe a optio
                      labore, eius consectetur debitis dolorem error vel nemo
                      odit earum commodi exercitationem eligendi nulla.
                      Accusantium tempora odio ipsam? Ratione doloremque quaerat
                      tempore quasi sed inventore iusto voluptates est, quam, ea
                      praesentium.
                    </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Details