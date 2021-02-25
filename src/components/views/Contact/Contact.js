import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Contact.module.scss';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => {
  // console.log(`Contact`);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actionName(`whatToDispatch`));
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <Container>
        <h2>You can find me here:</h2>
        <ul>
          <li>
            <a href="https://github.com/Karol-Sobolewski">
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
              <span className={styles.text}>karol-sobolewski</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/karoljsobolewski/">
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              <span className={styles.text}>karoljsobolewski</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/struggling_with_web_dev/">
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              <span className={styles.text}>struggling_with_web_dev</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/K_J_Sobolewski">
              <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
              <span className={styles.text}>K_J_Sobolewski</span>
            </a>
          </li>
          <li>
            <a href="mailto:karolsobolewski92@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <span className={styles.text}>karolsobolewski92@gmail.com</span>
            </a>
          </li>
        </ul>
        <main>{children}</main>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Contact, Component as ContactComponent };
