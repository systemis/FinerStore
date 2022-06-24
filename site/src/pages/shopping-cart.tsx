import React from "react";
import Layout from "../layouts/layout";

const ShoppingCart: React.FC = () => {
  return (
    <Layout>
      <div className="shopping-cart">
        <section className="cart py-4">
          <div className="container px-3">
            <div className="cart-intro d-flex justify-content-between">
              <h5 className="cart-title text-dark fw-bold">Shopping Cart</h5>
              <div className="checkout-status">
                <div className="d-flex align-content-center">
                  <div className="active">
                    <i className='bx bx-cart-alt'></i>
                  </div>

                  <div className="done">
                    <i className='bx bxs-truck'></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="cart-list">
              <p className="text-dark fw-bold" style={{ opacity: "0.4" }}>Nothing in the cart</p>
            </div>

            <div className="cart-action d-flex align-items-center">
              <a href="index.html" className="btn-back d-flex align-items-center"
                style={{ textDecoration: "none", fontWeight: "800", color: "black", fontSize: "14px" }}>
                <i className='bx bx-left-arrow-alt' style={{ fontSize: "20px" }}></i>
                Continue Shopping
              </a>
              <input type="text" placeholder="Promo Code" className="cart-promo" />
            </div>

            <div className="cart-check-out d-flex align-items-center">
              <p className="total-cost" style={{ color: "gray", marginRight: "auto"}}>
                Total cost <strong style={{ color: "black", marginLeft: "15px" }}>$ 0.00</strong>
              </p>

              <a href="#" className="check-out" style={{color: "black"}}>
                Checkout
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ShoppingCart;