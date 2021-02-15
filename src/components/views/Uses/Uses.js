import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './Uses.module.scss';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => {
  console.log(`Uses`);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actionName(`whatToDispatch`));
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <Container>
        <Row>
          <Col>
            <h2>Uses</h2>
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

export { Component as Uses, Component as UsesComponent };
