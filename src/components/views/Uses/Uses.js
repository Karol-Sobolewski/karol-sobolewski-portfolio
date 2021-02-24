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
        <h3>Hardware</h3>
        <ul>
          <li>
            Laptop: MSI GE73VR 7RF - i7 7700HQ, GTX 1070, 16GB RAM, 256GB SSD +
            Samsung 970 Evo 1TB SSD + 1TB HDD 7200 RPM
          </li>
          <li>PC: i5 7500, GTX 1060, 16GB RAM, SSD 128 + 1TB HDD</li>
          <li>Main monitor: LG 34gl750-b</li>
          <li>Secondary monitor: LG M227WDP</li>
          <li>Keyboard: Logitech Ergo K860</li>
          <li>Mouse: Logitech MX Vertical - soon</li>
          <li>Headphones: Sony WH-1000XM3 - soon</li>
          <li>Phone: Google Pixel 3a</li>
          <li>Tablet: Samsung Galaxy Tab S6 Lite</li>
          <li>Watch: Garmin Forerunner 235</li>
        </ul>
        <h3>Software</h3>
        <ul>
          <li>Visual Studio Code with Atom Material Theme</li>
          <li>OneNote</li>
          <li>Microsoft To Do</li>
          <li>Bitwarden</li>
          <li>PowerToys</li>
          <li>Opera GX</li>
          <li>Google Chrome</li>
        </ul>
        <p>
          List of everyone's /uses list is available at{` `}
          <a href="uses.tech">uses.tech</a>
        </p>
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
