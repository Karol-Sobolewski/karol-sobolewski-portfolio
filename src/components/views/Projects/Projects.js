import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Projects.module.scss';
import { ProjectForm } from '../../common/ProjectForm/ProjectForm';

const Component = ({ className, children }) => {
  const projects = useSelector((state) => state.projects.data);
  const projectsRef = useRef(null);
  useEffect(() => {
    const projectList = projectsRef.current.children;
    const section = gsap.utils.toArray(projectList);
    gsap.set(section, { x: `-100%`, autoAlpha: 0 });
    ScrollTrigger.batch(section, {
      start: `bottom bottom`,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          x: 0,
          stagger: 0.15,
          ease: `power3`,
        }),
      onLeave: (batch) =>
        gsap.to(batch, {
          autoAlpha: 0,
          stagger: 0.15,
          x: `-100%`,
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          stagger: 0.15,
          x: 0,
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          autoAlpha: 0,
          x: `-100%`,
          stagger: 0.1,
        }),
    });
  }, []);

  return (
    <div className={clsx(className, styles.root)}>
      <ul className={styles.honeycomb} ref={projectsRef}>
        {projects.map((project) => (
          <li className={styles.honeycomb__cell} key={project._id}>
            <ProjectForm project={project} />
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
