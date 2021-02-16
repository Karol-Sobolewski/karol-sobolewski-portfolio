import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './Projects.module.scss';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => {
  console.log(`Projects`);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actionName(`whatToDispatch`));
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <Container>
        <Row className={styles.hexRow}>
          <Col className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center p-0">
            <div className={styles.hex} />
          </Col>
          <Col className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center p-0">
            <div className={styles.hex} />
          </Col>
          <Col className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center p-0">
            <div className={styles.hex} />
          </Col>
          <Col className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center p-0">
            <div className={styles.hex} />
          </Col>
          <Col className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center p-0">
            <div className={styles.hex} />
          </Col>
        </Row>
        <main>{children}</main>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Projects, Component as ProjectsComponent };
