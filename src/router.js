import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CustomerPage from './routes/CustomerPage';
import OrderLinePage from './routes/OrderLinePage';
import OrderPage from './routes/OrderPage';
import CommentPage from './routes/CommentPage';
import ProductPage from './routes/ProductPage';
import WaiterPage from './routes/WaiterPage';
import CategoryPage from './routes/CategoryPage';
import AddressPage from './routes/AddressPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/orderLine" exact component={OrderLinePage} />
        <Route path="/customer" exact component={CustomerPage} />
        <Route path="/order" exact component={OrderPage} />
        <Route path="/comment" exact component={CommentPage} />
        <Route path="/product" exact component={ProductPage} />
        <Route path="/waiter" exact component={WaiterPage} />
        <Route path="/category" exact component={CategoryPage} />
        <Route path="/address" exact component={AddressPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
