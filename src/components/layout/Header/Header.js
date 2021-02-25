import React from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Navigation } from '../Navigation/Navigation';
import { Logo } from '../../common/Logo/Logo';
import styles from './Header.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Logo />
    <Navigation />
    <main>{children}</main>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Header, Component as HeaderComponent };
