import React, { Component } from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import ProductList from "./Components/ProductList";
import Detail from "./Components/Detail";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Default from "./Components/Default";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/detail" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </div>
    );
  }
}

export default App;