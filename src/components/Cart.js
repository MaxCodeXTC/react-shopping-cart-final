import React, { Component } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import util from "../util";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { createOrder, clearOrder } from "../actions/orderActions";
class Cart extends Component {
  constructor() {
    super();
    this.state = { showCheckout: false, email: "", name: "", address: "" };
  }
  createOrder = (e) => {
    e.preventDefault();
    const { cartItems } = this.props;
    const order = {
      email: this.state.email,
      name: this.state.name,
      address: this.state.address,
      cartItems,
      total: cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.createOrder(order);
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  closeModal = () => {
    this.props.clearOrder();
  };
  render() {
    const { cartItems, order } = this.props;

    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header"> Shopping cart is empty </div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} items in the cart.
          </div>
        )}

        {order && (
          <Modal
            isOpen={true}
            onRequestClose={this.closeModal}
            contentLabel="Product Modal"
          >
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="order-details">
                <h3 className="success-message">You order has been placed.</h3>
                <h2>Order {order._id}</h2>
                <ul>
                  <li>
                    <div>Name:</div>
                    <div>{order.name}</div>
                  </li>
                  <li>
                    <div>Email:</div>
                    <div>{order.email}</div>
                  </li>
                  <li>
                    <div>Total:</div>
                    <div>{util.formatCurrency(order.total)}</div>
                  </li>
                  <li>
                    <div>Date:</div>
                    <div>{order.createdAt}</div>
                  </li>
                  <li>
                    <div>Items:</div>
                    <div>
                      {order.cartItems.map((x) => (
                        <div className="items">
                          {x.count} {" x "} {x.title}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        )}
        {cartItems.length > 0 && (
          <div>
            <div className="cart">
              <Fade left cascade>
                <ul className="cart-items">
                  {cartItems.map((item) => (
                    <li key={item._id}>
                      <div>
                        <img alt="product" src={item.image}></img>
                      </div>
                      <div className="cart-item">
                        <div>{item.title}</div>
                        <div className="f-right">
                          {item.count} X {util.formatCurrency(item.price)}
                          <button
                            className="button secondary"
                            onClick={(e) =>
                              this.props.removeFromCart(
                                this.props.cartItems,
                                item
                              )
                            }
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Fade>
            </div>
            <div className="cart">
              <div className="total">
                <div>
                  Total:{" "}
                  {util.formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>

                <button
                  onClick={() => {
                    this.setState({ showCheckout: true });
                  }}
                  className="button primary"
                >
                  Proceed
                </button>
              </div>
            </div>
            {this.state.showCheckout && (
              <Fade right>
                <div className="cart">
                  <form method="POST" onSubmit={this.createOrder}>
                    <ul className="form-container">
                      <li>
                        <label>Email:</label>
                        <input
                          name="email"
                          type="email"
                          required
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <label>Name:</label>
                        <input
                          name="name"
                          required
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <label>Address:</label>
                        <input
                          name="address"
                          required
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <button type="submit" className="button primary">
                          checkout
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </Fade>
            )}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  order: state.order.order,
});
export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  createOrder,
  clearOrder,
})(Cart);
