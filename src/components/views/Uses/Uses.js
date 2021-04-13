import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Row, Col } from 'react-bootstrap';
import styles from './Uses.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Row className="d-flex justify-content-around align-items-start w-100">
      <Col className="col-12 col-md-5 m-3 d-flex justify-content-center align-items-center flex-column">
        <h3>Hardware</h3>
        <ul>
          <li>
            <h4>Laptop</h4>
            <p>
              MSI GE73VR 7RF - i7 7700HQ, GTX 1070, 16GB RAM, 256GB SSD +
              Samsung 970 Evo 1TB SSD + 1TB HDD 7200 RPM
            </p>
          </li>
          <li>
            <h4>PC</h4>
            <p>i5 7500, GTX 1060, 16GB RAM, SSD 128 + 1TB HDD</p>
          </li>
          <li>
            <h4>Main monitor</h4>
            <p>LG 34gl750-b</p>
          </li>
          <li>
            <h4> Secondary monitor</h4>
            <p>LG M227WDP</p>
          </li>
          <li>
            <h4>Keyboard</h4>
            <p>Logitech Ergo K860</p>
            <h4>Phone</h4>
            <p>Google Pixel 3a</p>
          </li>
          <li>
            <h4>Tablet</h4>
            <p>Samsung Galaxy Tab S6 Lite</p>
          </li>
          <li>
            <h4>Watch</h4>
            <p>Garmin Forerunner 235</p>
          </li>
        </ul>
      </Col>
      <Col className="col-12 col-md-5 m-3 d-flex justify-content-center align-items-center flex-column">
        <h3>Software</h3>
        <ul>
          <li>
            <h4>Code editor</h4>
            <p>Visual Studio Code with Atom Material Theme</p>
          </li>
          <li>
            <h4>Terminal</h4>
            <p>Bash</p>
          </li>
          <li>
            <h4>Note-taking</h4>
            <p>OneNote</p>
          </li>
          <li>
            <h4>Task management</h4>
            <p>Microsoft To Do</p>
          </li>
          <li>
            <h4>VPN</h4>
            <p>Surfshark</p>
          </li>
          <li>
            <h4>Password management</h4>
            <p>Bitwarden</p>
          </li>
          <li>
            <h4>2 factor authorization</h4>
            <p>Aegis</p>
          </li>
          <li>
            <h4>Productivity App</h4>
            <p>PowerToys</p>
          </li>
          <li>
            <h4>Browser of choice</h4>
            <p>Opera GX</p>
          </li>
          <li>
            <h4>Browser for work</h4>
            <p>Google Chrome</p>
          </li>
        </ul>
      </Col>
    </Row>
    <p>
      List of everyone's /uses list is available at{` `}
      <a href="https://www.uses.tech/">uses.tech</a>
    </p>
    <main>{children}</main>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Uses, Component as UsesComponent };
