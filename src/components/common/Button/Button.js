import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Button.module.scss';

const Component = ({ className, children, type, name, ...otherProps }) => (
    <button type={type} className={clsx(className, styles.root)} {...otherProps}> {/* eslint-disable-line */}
    {children}
  </button>
);

Component.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  name: PropTypes.string,
  fnc: PropTypes.func,
};

export { Component as Button, Component as ButtonComponent };
