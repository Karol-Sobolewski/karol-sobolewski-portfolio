import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
          {/* <ScrollToTop /> */}
          <MainLayout>
            {/* <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className={styles.switchWrapper}
            > */}
            <Switch>
              <Route exact path="/" component={() => <HomePage />} />
              {/* <Route exact path="/uses" component={() => <Uses />} /> */}
              <Route exact path="/contact" component={() => <Contact />} />
              {/* </AnimatedSwitch> */}
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
