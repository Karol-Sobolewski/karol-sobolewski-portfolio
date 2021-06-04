import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Projects.module.scss';
import { ProjectForm } from '../../common/ProjectForm/ProjectForm';

const Component = ({ className, children }) => {
  const projects = useSelector((state) => state.projects.data);
  return (
    <div className={clsx(className, styles.root)}>
      <ul className={styles.honeycomb}>
        {projects.map((item) => (
          <li className={styles.honeycomb__cell} key={item._id}>
            <ProjectForm project={item} />
          </li>
        ))}
        <li
          className={`${styles.honeycomb__cell} ${styles.honeycomb__hidden}`}
        />
      </ul>
      <main>{children}</main>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Projects, Component as ProjectsComponent };
