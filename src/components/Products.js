import React, { Component } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
import Modal from "react-modal";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      product: null,
    };
  }
  componentDidMount() {
    this.props.fetchProducts();
  }
  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    if (!this.props.products) {
      return <div>Loading...</div>;
    }
    const productItems = this.props.products.map((product) => (
      <li key={product._id}>
        <div className="product">
          <a href={`#${product._id}`} onClick={(e) => this.openModal(product)}>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <div className="product-price">
            <div>{util.formatCurrency(product.price)}</div>
            <button
              className="button primary"
              onClick={(e) =>
                this.props.addToCart(this.props.cartItems, product)
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </li>
    ));
    const { product } = this.state;

    return (
      <div>
        <Fade bottom cascade>
          <ul className="products">{productItems}</ul>
        </Fade>
        {product && (
          <Modal
            isOpen={true}
            onRequestClose={this.closeModal}
            contentLabel="Product Modal"
          >
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details">
                <img src={product.image} alt={product.title} />

                <div className="product-details-description">
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>{product.description}</p>
                  <p>
                    Available Size:{" "}
                    {product.availableSizes.map((x) => (
                      <span key={x}>
                        {" "}
                        <button className="button secondary">{x}</button>{" "}
                      </span>
                    ))}
                  </p>
                  <div className="product-price">
                    <div>{util.formatCurrency(product.price)}</div>
                    <button
                      className="button primary"
                      onClick={(e) => {
                        this.props.addToCart(this.props.cartItems, product);
                        this.closeModal();
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
