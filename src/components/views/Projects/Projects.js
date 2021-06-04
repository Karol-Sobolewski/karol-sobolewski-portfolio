import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { gsap } from 'gsap';

import styles from './Projects.module.scss';
import { ProjectForm } from '../../common/ProjectForm/ProjectForm';

const Component = ({ className, children }) => {
  const projects = useSelector((state) => state.projects.data);
  const projectsRef = useRef(null);
  useEffect(() => {
    const projectList = projectsRef.current.children;
    for (const projectElement of projectList) {
      const classList = projectElement.classList.value;
      if (!classList.includes(`hidden`)) {
        console.log(`delay`, Math.random() * (0.3 - 0.1) + 0.1);
        gsap.set([projectElement, projectElement.children], { autoAlpha: 0 });
        const timelineProjects = gsap.timeline({
          defaults: {
            duration: 1,
            ease: `Power3.easeOut`,
          },
          scrollTrigger: {
            trigger: projectElement,
            start: `center bottom`,
          },
        });
        timelineProjects
          .fromTo(
            projectElement,
            { y: `100%` },
            {
              y: 0,
              autoAlpha: 1,
              delay: Math.random() * (0.5 - 0.1) + 0.1,
            }
          )
          .fromTo(
            projectElement.children,
            { y: `-20%` },
            {
              y: 0,
              autoAlpha: 1,
            },
            `<0.2`
          );
      }
    }
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
