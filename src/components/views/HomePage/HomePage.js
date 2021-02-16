import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './HomePage.module.scss';

import { addActiveLink } from '../../../redux/linkRedux';

import { Landing } from '../Landing/Landing';
import { Projects } from '../Projects/Projects';
import { Contact } from '../Contact/Contact';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < 100) {
        dispatch(addActiveLink(el.id));
      }
    }
    const sections = document.querySelectorAll(`[class*="HomePage_section"]`);

    document.addEventListener(`scroll`, (event) => {
      sections.forEach(isInViewport);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <div className={clsx(className, styles.root)}>
      <Container>
        <Row>
          <Col />
        </Row>
        <div id="landing" className={styles.section}>
          <Landing />
        </div>
        <div id="projects" className={styles.section}>
          <Projects />
        </div>
        <div id="skills" className={styles.section}>
          skills
        </div>
        <div id="about" className={styles.section}>
          about
        </div>
        <div id="uses" className={styles.section}>
          uses
        </div>
        <div id="contact" className={styles.section}>
          <Contact />
        </div>
        <main>{children}</main>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as HomePage, Component as HomePageComponent };
