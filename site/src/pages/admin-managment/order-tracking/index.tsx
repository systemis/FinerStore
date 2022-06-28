import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Layout from "../../../layouts/layout";
import { CartAction } from "../../../actions/cart.action";
import { OrderRow } from "../../../entities";
import { useRouter } from "next/router";
import moment from "moment";

const OrderTrackingPage: NextPage = () => {
  const [orderRows, setOrderRows] = useState<OrderRow[]>([]);
  const router = useRouter();
  const cartAction = new CartAction();

  useEffect(() => {
    (async () => {
      const orderRows = await cartAction.getOrderList();
      console.log(orderRows);
      setOrderRows(orderRows);
    })();
  }, []);

  return (
    <Layout>
      <div className="pt-[150px] px-[10px] max-w-[1200px] mx-auto" style={{ overflowX: "scroll" }}>
        <table className="table max-w-[900px] overflow-show">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Address</th>
              <th scope="col">Total price</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {orderRows?.map((item, index) => (
              <tr key={`order-row-${index}`} className={'cursor-pointer'} onClick={() => router.push(`/admin-managment/order-tracking/${item._id}`)}>
                <th scope="row">{index}</th>
                <td>{item.user.name}</td>
                <td>{item.user.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.address}</td>
                <td>{item.totalPrice}</td>
                <td>{moment(new Date(item.date)).format("DD-MM-yyyy hh:mm")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default OrderTrackingPage;