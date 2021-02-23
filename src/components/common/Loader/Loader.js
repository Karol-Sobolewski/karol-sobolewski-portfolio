import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Orbitals } from 'react-spinners-css';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './Loader.module.scss';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => {
  useEffect(() => {
    document.body.style.overflow = `hidden`;
    return () => (document.body.style.overflow = `unset`);
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <Orbitals color="#ffd025" />
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Loader, Component as LoaderComponent };
