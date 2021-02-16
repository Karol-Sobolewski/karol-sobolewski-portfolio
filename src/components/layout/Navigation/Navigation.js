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
  useEffect(() => {
    // dispatch(actionName(`whatToDispatch`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <nav className={clsx(className, styles.root)}>
      <Row className={styles.navRow}>
        <Col className={styles.navCol}>
          <NavHashLink
            smooth
            to="/#projects"
            className={`${styles.navLink} ${
              activeLink === `projects` ? styles.navLink__active : ``
            }`}
          >
            <img
              type="image/svg+xml"
              src="/images/hex.svg"
              className={styles.navHex}
              aria-label="Hex"
            />
            projects
          </NavHashLink>
        </Col>
        <Col className={styles.navCol}>
          <NavHashLink
            smooth
            to="/#skills"
            className={`${styles.navLink} ${
              activeLink === `skills` ? styles.navLink__active : ``
            }`}
          >
            <img
              type="image/svg+xml"
              src="/images/hex.svg"
              className={styles.navHex}
              aria-label="Hex"
            />
            skills
          </NavHashLink>
        </Col>
        <Col className={styles.navCol}>
          <NavHashLink
            smooth
            to="/#about"
            className={`${styles.navLink} ${
              activeLink === `about` ? styles.navLink__active : ``
            }`}
          >
            <img
              type="image/svg+xml"
              src="/images/hex.svg"
              className={styles.navHex}
              aria-label="Hex"
            />
            about
          </NavHashLink>
        </Col>
        <Col className={styles.navCol}>
          <NavHashLink
            smooth
            to="/#uses"
            className={`${styles.navLink} ${
              activeLink === `uses` ? styles.navLink__active : ``
            }`}
          >
            <img
              type="image/svg+xml"
              src="/images/hex.svg"
              className={styles.navHex}
              aria-label="Hex"
            />
            /uses
          </NavHashLink>
        </Col>
        <Col className={styles.navCol}>
          <NavHashLink
            smooth
            to="/#contact"
            className={`${styles.navLink} ${
              activeLink === `contact` ? styles.navLink__active : ``
            }`}
          >
            <img
              type="image/svg+xml"
              src="/images/hex.svg"
              className={styles.navHex}
              aria-label="Hex"
            />
            contact
          </NavHashLink>
        </Col>
      </Row>
    </nav>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Navigation, Component as NavigationComponent };
