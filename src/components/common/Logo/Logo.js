import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { NavHashLink } from 'react-router-hash-link';
import styles from './Logo.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <NavHashLink smooth to="/#">
      <img
        type="image/svg+xml"
        src="/images/logo.svg"
        className={styles.logoImg}
        aria-label="Logo"
      />
    </NavHashLink>
    <main>{children}</main>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Logo, Component as LogoComponent };
