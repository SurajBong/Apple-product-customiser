import React from "react";

import ProductCustomiser from "../../Containers/ProductCustomiser";

import { processor, memory, graphics, storage } from "../../ProductData.json";

import { useStateValue } from "../../StateProvider";

import CurrencyFormat from "react-currency-format";

import "./Product.css";
import {
  ADD_GRAPHICS,
  ADD_MEMORY,
  ADD_PROCESSOR,
  ADD_STORAGE,
  getBasketTotal,
  getEMI,
} from "../../reducer";

import productLogo from "../../assets/macbook-pro.jpg";

function Product({ label, description }) {
  const [
    { processorCost, memoryCost, graphicCardCost, storageCost },
    dispatch,
  ] = useStateValue();

  return (
    <>
      <div className="product">
        <img className="product__logo" src={productLogo} alt=" product logo" />
        <div className="product__detail">
          <h1 className="product__detail__header">Customise your {label}</h1>
          <section className="product__detail__section">
            {description?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </section>

          <div className="product__detail__customisers">
            <ProductCustomiser
              label="Processor"
              options={processor}
              actionType={ADD_PROCESSOR}
            />
            <ProductCustomiser
              label="Memory"
              options={memory}
              actionType={ADD_MEMORY}
            />
            <ProductCustomiser
              label="Graphics"
              options={graphics}
              actionType={ADD_GRAPHICS}
            />
            <ProductCustomiser
              label="Storage"
              options={storage}
              actionType={ADD_STORAGE}
            />
          </div>
        </div>
      </div>
      <div className="product__price">
        <CurrencyFormat
          renderText={(value) => (
            <div className="product__price_format">
              From ₹{getEMI(value)}/mo. with EMI OR {value}
            </div>
          )}
          decimalScale={2}
          value={getBasketTotal(
            processorCost,
            memoryCost,
            graphicCardCost,
            storageCost
          )}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
      </div>
    </>
  );
}

export default Product;
