import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import {Header} from "./header";
export const Shop = () => {
  return (
    <div className="shop">
      <div>
        <Header />
        <h1 className="motto">you will fall in love with everything you see here!</h1>
      </div>

      <div id = "pro"className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
