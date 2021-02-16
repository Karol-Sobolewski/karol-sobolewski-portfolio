import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './Skills.module.scss';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => {
  console.log(`Skills`);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actionName(`whatToDispatch`));
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <h2>Languages</h2>
      <Row className={styles.skillRow}>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          HTML
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          CSS
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          JavaScript
        </Col>
      </Row>
      <h2>Tools</h2>
      <Row className={styles.skillRow}>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          React with hooks
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          Redux
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          Bootstrap
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          WordPress
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          Node.js
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          Express
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          MongoDB
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          WebSocket
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          Mongoose
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          Jira
        </Col>
      </Row>
      {/* <h2>Methods</h2>
      <Row className={styles.skillRow}>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          BEM
        </Col>
      </Row> */}
      <h2>Design</h2>
      <Row className={styles.skillRow}>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          Figma
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          Adobe Photoshop
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          Adobe Illustrator
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          Birdfont
        </Col>
      </Row>
      <main>{children}</main>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Skills, Component as SkillsComponent };
