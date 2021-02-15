import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './HomePage.module.scss';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => {
  console.log(window.location.href);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actionName(`whatToDispatch`));
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <Container>
        <Row>
          <Col />
        </Row>
        <div id="about" className={styles.section}>
          about
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
        </div>
        <div id="projects" className={styles.section}>
          projects
        </div>
        <main>{children}</main>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as HomePage, Component as HomePageComponent };
