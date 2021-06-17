import React, { FC,Suspense } from 'react';
import { Route,  Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import './i18n';

import Static from './components/pages/Static';
import Header from './components/layout/Header';
import TopBar from './components/layout/TopBar';
import Footer from './components/layout/Footer';
import ProductDetail from './components/product/ProductDetail';

const App: FC = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <TopBar />
          <Header />
            <Switch>
              <Route exact path="/" component={Static} />
              <Route exact path="/product" component={ProductDetail} />
            </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
