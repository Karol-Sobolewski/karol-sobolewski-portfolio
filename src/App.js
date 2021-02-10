import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
// import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { HomePage } from './components/views/HomePage/HomePage';
import { NotFound } from './components/views/NotFound/NotFound';

import './styles/bootstrap.scss';
import styles from './App.module.scss';

const App = () => {
  console.log(`hey`);
  return (
    <>
      <div className={styles.app}>
        <BrowserRouter>
          <ScrollToTop />
          <MainLayout>
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className={styles.switchWrapper}
            >
              <Route exact path="/" component={() => <HomePage />} />
              <Route path="*" component={NotFound} />
            </AnimatedSwitch>
          </MainLayout>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
