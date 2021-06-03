import React from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Row, Col } from 'react-bootstrap';
import styles from './Landing.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Row className={styles.landingRow} id="landingRow">
      <Col className={`${styles.myPhoto} col-12 col-md-6`}>
        <img src="/images/me2.jpg" alt="me" />
      </Col>
      <Col className="col-12 col-md-6">
        <h2>hello there</h2>
        <p>My name is Karol Sobolewski</p>
        <p>I am Junior Web Developer</p>
      </Col>
    </Row>
    <main>{children}</main>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Landing, Component as LandingComponent };
