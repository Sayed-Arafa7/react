import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/navbar";
import ShoppingCart from "./components/shoppingCart";
import Admin from "./components/admin";
import Home from "./components/home";
import NotFound from "./components/notfound";
import Menu from "./components/menu";

class App extends Component {
  state = {
    types: [
      { id: 0, name: "All" },
      { id: 1, name: "Burger" },
      { id: 2, name: "Fries" },
      { id: 3, name: "Cola" },
    ],
    products: [
      {
        id: 1,
        type: 1,
        name: "Burger",
        count: 0,
        price: 30,
        inCart: false,
        img: "https://cutt.ly/aczjMf6",
      },
      {
        id: 2,
        type: 2,
        name: "Fries",
        count: 0,
        price: 20,
        inCart: false,
        img: "https://cutt.ly/yczj6it",
      },
      {
        id: 3,
        type: 3,
        name: "Cola",
        count: 0,
        price: 10,
        inCart: false,
        img: "https://cutt.ly/jczjmJR",
      },
      {
        id: 4,
        type: 1,
        name: "Large Burger",
        count: 0,
        price: 40,
        inCart: false,
        img: "https://cutt.ly/aczjMf6",
      },
      {
        id: 5,
        type: 2,
        name: "Large Fries",
        count: 0,
        price: 25,
        inCart: false,
        img: "https://cutt.ly/yczj6it",
      },
      {
        id: 6,
        type: 3,
        name: "Large Cola",
        count: 0,
        price: 15,
        inCart: false,
        img: "https://cutt.ly/jczjmJR",
      },
    ],
    pageSize: 4,
    activePage: 1,
    activeFilter: 0,
    sort: ["asc", "prop"],
    filteredSearch: [],
  };

  componentDidMount() {
    // Clone
    const newProducts = [...this.state.products];
    // Set State
    this.setState({ filteredSearch: newProducts });
  }

  handleDelete = (product) => {
    // Clone
    const newProducts = [...this.state.products];
    // Edit
    const filteredProducts = newProducts.filter((p) => p.id !== product.id);
    // Set State
    this.setState({ products: filteredProducts });
  };

  handleReset = () => {
    // Clone
    let products = [...this.state.filteredSearch];
    // Edit
    products = products.map((p) => {
      return { ...p, count: 0 };
    });
    // Set State
    this.setState({ filteredSearch: products });
  };

  handleIncrement = (product) => {
    // Clone
    let products = [...this.state.filteredSearch];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    // Edit
    products[index].count++;
    // Set State
    this.setState({ filteredSearch: products });
  };

  handleDecrement = (product) => {
    // Clone
    let products = [...this.state.filteredSearch];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    // Edit
    if (products[index].count) products[index].count--;
    // Set State
    this.setState({ filteredSearch: products });
  };

  handleToggleInCart = (product) => {
    // Clone
    let products = [...this.state.filteredSearch];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    // Edit
    products[index].inCart = !products[index].inCart;
    // Set State
    this.setState({ filteredSearch: products });
  };

  handleChangeActivePage = (page) => {
    this.setState({ activePage: page });
  };

  handleChangeActiveFilter = (type) => {
    this.setState({ activeFilter: type.id, activePage: 1 });
  };

  handleSort = (prop) => {
    //change between asc and des

    let x = this.state.sort[0] === "asc" ? 1 : -1;

    //spread the products array
    let products = [...this.state.filteredSearch];

    //sort according to x (pos-> asc, neg-> des)
    products.sort((a, b) => (a[prop] > b[prop] ? x : -x));

    //spread the sort array
    let sort = [...this.state.sort];

    //toggle between asc and desc
    sort[0] = this.state.sort[0] === "asc" ? "des" : "asc";

    //asign the header name to change one arrow only
    sort[1] = prop;

    //set the state of two components
    this.setState({ filteredSearch: products, sort });
  };

  handleSearch = (searchWord) => {
    // Clone
    const newProducts = [...this.state.products];
    // Edit
    const filteredProducts = newProducts.filter((element) =>
      element.name.toLowerCase().includes(searchWord.toLowerCase())
    );
    // Set State
    this.setState({ filteredSearch: filteredProducts });
    this.setState({ activePage: 1 });
  };

  render() {
    return (
      <>
        <NavBar count={this.state.products.filter((p) => p.count > 0).length} />
        <main className="container">
          <Switch>
            <Route
              path="/cart"
              render={() => (
                <ShoppingCart
                  products={this.state.filteredSearch.filter((p) => p.inCart)}
                  onIncrement={this.handleIncrement}
                  onDelete={this.handleToggleInCart}
                  onReset={this.handleReset}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              path="/menu"
              render={() => (
                <Menu
                  sort={this.state.sort}
                  products={this.state.products}
                  types={this.state.types}
                  pageSize={this.state.pageSize}
                  activePage={this.state.activePage}
                  activeFilter={this.state.activeFilter}
                  onToggleInCart={this.handleToggleInCart}
                  onActivePageChange={this.handleChangeActivePage}
                  onActiveFilterChange={this.handleChangeActiveFilter}
                  onSort={this.handleSort}
                  handleSearch={this.handleSearch}
                  filteredSearch={this.state.filteredSearch}
                />
              )}
            />
            <Route path="/admin" component={Admin} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
