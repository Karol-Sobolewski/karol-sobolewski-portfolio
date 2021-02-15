import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './Logo.module.scss';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => {
  console.log(`Logo`);
  // const dispatch = useDispatch();
  /* <NavHashLink
            smooth
            to="/#"
            activeClassName="selected"
            activeStyle={styles.active}
          >
            Home
          </NavHashLink> */

  useEffect(() => {
    // dispatch(actionName(`whatToDispatch`));
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <img
        type="image/svg+xml"
        src="/images/logo.svg"
        className={styles.logoImg}
        aria-label="Logo"
      />
      <main>{children}</main>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Logo, Component as LogoComponent };
