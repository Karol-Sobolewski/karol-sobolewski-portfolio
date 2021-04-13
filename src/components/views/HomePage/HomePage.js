import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container } from 'react-bootstrap';
import styles from './HomePage.module.scss';

import { addActiveLink } from '../../../redux/linkRedux';

import { Landing } from '../Landing/Landing';
import { Projects } from '../Projects/Projects';
import { Skills } from '../Skills/Skills';
import { About } from '../About/About';
import { Uses } from '../Uses/Uses';
import { Contact } from '../Contact/Contact';

const Component = ({ className, children }) => {
  const dispatch = useDispatch();
  const activeLink = useSelector((state) => state.activeLink.data);
  const [link, setLink] = useState();
  useEffect(() => {
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      if (
        Math.floor(Math.round(rect.bottom)) >= 0 &&
        Math.floor(Math.round(rect.bottom)) <= rect.height
      ) {
        if (activeLink !== el.id) {
          setLink(el.id);
        }
      }
    }
    const sections = document.querySelectorAll(`[class*="HomePage_section"]`);

    document.addEventListener(`scroll`, (event) => { //eslint-disable-line
      sections.forEach(isInViewport);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(addActiveLink(link));
  });
  return (
    <div className={clsx(className, styles.root)} id="homepage">
      <Container>
        <div id="landing" className={styles.section}>
          <Landing />
        </div>
        <div id="projects" className={styles.section}>
          <Projects />
        </div>
        <div id="skills" className={styles.section}>
          <Skills />
        </div>
        <div id="about" className={styles.section}>
          <About />
        </div>
        <div id="uses" className={styles.section}>
          <Uses />
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
