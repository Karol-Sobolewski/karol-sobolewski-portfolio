import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './Landing.module.scss';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => {
  console.log(`Landing`);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actionName(`whatToDispatch`));
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <Row className={styles.landingRow}>
        <Col className={styles.myPhoto}>
          <img src="/images/me2.jpg" alt="me" />
        </Col>
        <Col>
          <h2>hello there</h2>
          <p>My name is Karol Sobolewski</p>
          <p>I am Junior Web Developer</p>
        </Col>
        <Col />
      </Row>
      <main>{children}</main>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Landing, Component as LandingComponent };
