import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../containers/Home';
import Information from '../containers/Information';
import Checkout from '../containers/Checkout';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/checkout/information" component={Information} />
        <Route exact path="/checkout/success" component={Success} />
        <Route exact path="/checkout/payment" component={Payment} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
