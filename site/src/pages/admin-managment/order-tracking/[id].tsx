import React, { useEffect, useState, useMemo } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Product } from "../../../entities";
import Layout from "../../../layouts/layout";
import { CartAction } from "../../../actions/cart.action";
import { toast } from "react-toastify";
import { useApp } from "../../../hooks/app.hook";

const OrderTrackingDetail: NextPage = () => {
  const router = useRouter();
  const cartAction = new CartAction();
  const [cartInfo, setCartInfo] = useState<{ product: Product, quantity: number }[]>();
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const { user } = useApp();

  const totalAmount = useMemo(() => {
    let total = 0.
    cartInfo?.forEach((item) => {
      total += item.product.price * item.quantity; 
    })
    return total;
  }, [cartInfo]);

  const handleCheckout = async () => {
    if (!user._id.$oid || !address || !phoneNumber) {
      return; 
    }

    const order = await cartAction.submitCard({
      userId: user?._id.$oid,
      address,
      phoneNumber, 
    });

    if (order) {
      toast.success("Order added successfully");
    }
  };


  useEffect(() => {
    (async () => {
      const data = await cartAction.getOrder(router?.query?.id as string);
      setCartInfo(data.details);
    })();
  }, [router.asPath]);

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
                      <img className="img-fluid" src={item.product.image} />
                    </div>
                    <div className="col">
                      <div className="row text-muted">{item?.product?.name}</div>
                    </div>
                    <div className="col-2">
                      <span className="px-[10px]">
                        {item?.quantity}
                      </span>
                    </div>
                    <div className="col flow-root items-center">
                      <span className="float-left">
                        $ {item?.product?.price * item?.quantity}
                      </span>
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OrderTrackingDetail;