import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { AnimatedSwitch } from 'react-router-transition';
// import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { HomePage } from './components/views/HomePage/HomePage';
import { Uses } from './components/views/Uses/Uses';
import { Contact } from './components/views/Contact/Contact';
import { NotFound } from './components/views/NotFound/NotFound';

import './styles/bootstrap.scss';
import styles from './App.module.scss';

const App = () => {
  console.log(`app`);
  return (
    <>
      <div className={styles.app}>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={() => <HomePage />} />
              <Route exact path="/about">
                <Redirect to="/#about" />
              </Route>
              <Route exact path="/projects">
                <Redirect to="/#projects" />
              </Route>
              <Route exact path="/skills">
                <Redirect to="/#skills" />
              </Route>
              <Route exact path="/uses">
                <Redirect to="/#uses" />
              </Route>
              <Route exact path="/contact">
                <Redirect to="/#contact" />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
