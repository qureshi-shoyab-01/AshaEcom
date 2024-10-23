import React, { useState } from "react";
import "./FilterComponent.css";
import Card from "../Card/Card";

const FilterComponent = () => {
  return (
    <>
      <div className="FilterComponent-main">
        <div className="filter-text-content">
          <h2>Our Top Collection</h2>
          <p>Browse The Collection of Top Products</p>
        </div>
        <div id="myBtnContainer">
          <button className={`btn`} onClick={() => filterSelection("all")}>
            {" "}
            Show all
          </button>
          <button className={`btn`} onClick={() => filterSelection("cars")}>
            COOKIN
          </button>
          <button className={`btn`} onClick={() => filterSelection("animals")}>
            {" "}
            DINING
          </button>
          <button className={`btn`} onClick={() => filterSelection("fruits")}>
            {" "}
            KITCHEN
          </button>
          <button className={`btn`} onClick={() => filterSelection("colors")}>
            {" "}
            POOJA GIFTING
          </button>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
