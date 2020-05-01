import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../actions/orderActions";
import util from "../util";
class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    const { orders } = this.props;
    if (!orders) {
      return <div>Loading...</div>;
    }

    return (
      <div className="orders">
        <h2>Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADDRESS</th>
              <th>ITEMS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt}</td>
                <td>{util.formatCurrency(order.total)}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>
                  {order.cartItems.map((x) => (
                    <div>
                      {x.count} {" x "} {x.title}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  orders: state.order.orders,
});
export default connect(mapStateToProps, { fetchOrders })(Orders);
