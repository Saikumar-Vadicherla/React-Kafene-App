import React, { useState } from "react";
import "./productsScreen.css";

const months = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
  Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
};

const getMonthNumber = (monthAbbreviation) => months[monthAbbreviation];

export const ProductsScreen = ({ products }) => {
  console.log("props.products========", products);

  const [expiredChecked, setExpiredChecked] = useState(true);
  const [lowStockChecked, setLowStockChecked] = useState(true);

  const expiredCount = products.filter((product) => {
    const today = new Date();
    const expirationDate = new Date(product.expiryDate);
    return expirationDate < today;
  }).length;

  const lowStockCount = products.filter((product) => product.stock < 500).length;

  const totalCount = (expiredChecked ? expiredCount : 0) + (lowStockChecked ? lowStockCount : 0);

  return (
    <div className="productsScreen">
      <div className="productsInsideProductsScreen">
        <div className="labelProducts">
          <h1>Products</h1>
          <h4>Filters</h4>
          <p>Count: <span>{totalCount}</span></p>
          <div className="insideLabelProducts">
            <label>
              <input
                type="checkbox"
                checked={expiredChecked}
                onChange={(e) => setExpiredChecked(e.target.checked)}
                id="expired"
              />
              Expired
            </label>
            <label>
              <input
                type="checkbox"
                id="low-stock"
                checked={lowStockChecked}
                onChange={(e) => setLowStockChecked(e.target.checked)}
              />
              LowStock
            </label>
          </div>
        </div>
        <div className="Products">
          <div className="myclassForHeading">
            <div className="productID"><h4>ID</h4></div>
            <div className="productName"><h4>Product Name</h4></div>
            <div className="productBrand"><h4 className="orderDate">Product Brand</h4></div>
            <div className="productExpiryDate"><h4>Expiry Date</h4></div>
            <div className="productUnitPrice"><h4>Unit Price</h4></div>
            <div className="productStock"><h4>Stock</h4></div>
          </div>
          {products.map((product) => {
            const today = new Date();
            const [day, monthAbbreviation, year] = product.expiryDate.split("-");
            const expiryDate = new Date(year, getMonthNumber(monthAbbreviation) - 1, day);
            const isExpired = expiryDate < today;
            const isLowStock = product.stock < 500;
            const shouldDisplay = (!expiredChecked && !lowStockChecked) ||
              (expiredChecked && isExpired) ||
              (lowStockChecked && isLowStock);

            return shouldDisplay ? (
              <div key={product.id} className="productItemTop">
                <div key={product.id} className="productItem">
                  <div className="productID"><h4>{product.id}</h4></div>
                  <div className="productName"><h4>{product.medicineName}</h4></div>
                  <div className="productBrand"><h4>{product.medicineBrand}</h4></div>
                  <div className="productExpiryDate"><h4>{product.expiryDate}</h4></div>
                  <div className="productUnitPrice"><h4>{product.unitPrice}</h4></div>
                  <div className="productStock"><h4>{product.stock}</h4></div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};
