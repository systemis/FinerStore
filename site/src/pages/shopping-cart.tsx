import React, { useEffect, useState, useMemo } from "react";
import Layout from "../layouts/layout";
import { CartAction } from "../actions/cart.action";
import { Product } from "../entities";
import { useApp } from "../hooks/app.hook";
import { toast } from "react-toastify";

const ShoppingCart: React.FC = () => {
  const cartAction = new CartAction();
  const [cartInfo, setCartInfo] = useState<{ product: Product, quantity: number }[]>();
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const { user } = useApp();

  const handleGetCartInfo = async () => {
    const cardInfo = await cartAction.getCardInfo();
    setCartInfo(cardInfo);
  }

  const handleChangeQuantity = async (
    _id: string,
    amount: number
  ) => {
    console.log("change quantities", _id, amount);
    await cartAction.changeProductQuantity(_id, amount);
    await handleGetCartInfo();
  }

  const handleDeleteItem = async (
    _id: string
  ) => {
    await cartAction.deleteProductCard(_id);
    handleGetCartInfo();
  }

  const totalAmount = useMemo(() => {
    let total = 0.
    cartInfo?.forEach((item) => {
      total += item?.product?.price * item?.quantity; 
    })
    return total;
  }, [cartInfo]);

  const handleCheckout = async () => {
    if (!user._id.$oid || !address || !phoneNumber) {
      return; 
    }

    const order = await cartAction.submitCard({
      date: new Date().toString(),
      userId: user?._id.$oid,
      address,
      phoneNumber, 
    });

    if (order) {
      toast.success("Order added successfully");
      cartAction.deleteCart();
      window.location.reload();
    }
  };

  useEffect(() => {
    handleGetCartInfo();
  }, []);

  return (
    <Layout>
      <div className="shopping-cart pt-[130px]">
        <div className="mx-auto md:max-w-[900px] rounded-[10px] max-w-[400px]" style={{ boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19);" }}>
          <div className="row">
            <div className="col-md-8 cart md:px-[30px] px-[20px]">
              <div className="mt-[20px]">
                <div className="row">
                  <div className="col">
                    <p className="text-[20px] font-bold">
                      Shopping Cart
                    </p>
                  </div>
                  <div className="col align-self-center text-right text-muted">{cartInfo?.length} items</div>
                </div>
              </div>
              <div className="row border-top border-bottom">
                {cartInfo?.map((item, index) => (
                  <div key={`cart-item-${index}`} className="row main align-items-center py-[15px]">
                    <div className="col-3">
                      <img className="img-fluid" src={item?.product?.image} />
                    </div>
                    <div className="col">
                      <div className="row text-muted">{item?.product?.name}</div>
                    </div>
                    <div className="col-2">
                      <button
                        onClick={() => handleChangeQuantity(item?.product?._id?.$oid, -1)}
                        className="mr-[2x]">
                        -
                      </button>
                      <span className="px-[10px]">
                        {item?.quantity}
                      </span>
                      <button
                        onClick={() => handleChangeQuantity(item?.product?._id?.$oid, 1)}
                        className="ml-[2x]">
                        +
                      </button>
                    </div>
                    <div className="col flow-root items-center">
                      <span className="float-left">
                        $ {item?.product?.price * item?.quantity}
                      </span>
                      <button onClick={() => handleDeleteItem(item?.product?._id?.$oid)}>
                        <span className='bx bx-x float-right mt-[2px]'></span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="back-to-shop py-[20px] flex items-center">
                <i className='bx bx-left-arrow-alt'></i>
                <button className="text-muted" onClick={() => window.location.href = "/products"}>
                  Back to shop
                </button>
              </div>
            </div>
            <div className="col-md-4 summary md:px-[30px] px-[20px] bg-[#ddd] py-[20px]">
              <div>
                <p className="text-[30px]">
                  <b>
                    Summary
                  </b>
                </p>
              </div>
              <hr />
              <form>
                <p className="mt-[20px] font-bold">
                  Shipping
                </p>
                <select className="w-full px-[5px] py-[7px] mt-[10px] max-w-[250px]">
                  <option className="text-muted">Standard-Delivery- $5.00</option>
                </select>
                <p className="mt-[20px] font-bold">
                  Address
                </p>
                <input
                  id="code"
                  placeholder="Enter your address"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  className="w-full px-[5px] py-[7px] mt-[10px] text-start max-w-[250px]"
                />
                <p className="mt-[20px] font-bold">
                  Phone number
                </p>
                <input
                  id="code"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                  className="w-full px-[5px] py-[7px] mt-[10px] text-start max-w-[250px]"
                />
              </form>
              <div className="row mt-[20px]" style={{ borderTop: "1px solid rgba(0,0,0,.1);", padding: "2vh 0;" }}>
                <hr />
                <div className="col">
                  <text className="text-[20px] font-bold">
                    Total price
                  </text>
                </div>
                <div className="col text-right">$ {totalAmount}</div>
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();  
                  handleCheckout();
                }}
                className="btn text-center py-[8px] text-center bg-black text-white w-full mt-[20px] rounded-[0]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingCart;