import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { NavHashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import smoothscroll from 'smoothscroll-polyfill';
import styles from './Navigation.module.scss';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => {
  // const dispatch = useDispatch();
  const activeLink = useSelector((state) => state.activeLink.data);
  const menu = useSelector((state) => state.menu.data);
  console.log(`menu`, menu);
  useEffect(() => {
    // dispatch(actionName(`whatToDispatch`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <nav className={clsx(className, styles.root)}>
      <Row className={styles.navRow}>
        {menu.map((item) => (
          <Col className={styles.navCol}>
            <NavHashLink
              smooth
              to={`/${item.src}`}
              className={`${styles.navLink} ${
                activeLink === `${item.name}` ? styles.navLink__active : ``
              }`}
            >
              <img
                type="image/svg+xml"
                src="/images/hex.svg"
                className={styles.navHex}
                aria-label="Hex"
              />
              {item.name}
            </NavHashLink>
          </Col>
        ))}
      </Row>
    </nav>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Navigation, Component as NavigationComponent };
