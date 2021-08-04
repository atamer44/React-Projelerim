import React, { Component } from "react";
import CategoriyList from "./Componentler/CategoriyList";
import Navi from "./Componentler/Navi";
import Product from "./Componentler/Product";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./Componentler/NotFound";
import CartList from "./Componentler/CartList";
import FormDemo1 from "./Componentler/FormDemo1";
import FormDemo2 from "./Componentler/FormDemo2";

//npx json-server --watch db.json
class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };
  changeCategory = (categoriy) => {
    this.setState({ currentCategory: categoriy.categoryName });
    this.getProducts(categoriy.id);
  };

  componentDidMount() {
    this.getProducts();
  }
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " add from cart", 2);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart! ", 2);
  };

  render() {
    let productInfo = { title: "Product" };
    let categoryInfo = { title: "CategoriyList" };
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoriyList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Product
                      {...props}
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
                 <Route path ="/form1" component={FormDemo1}></Route>
                 <Route path ="/form2" component={FormDemo2}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
