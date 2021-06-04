import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container } from 'react-bootstrap';
import { gsap } from 'gsap';
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

  const landingRef = useRef(null);
  const usesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const [landingElements] = landingRef.current.children;

    const [usesElements] = usesRef.current.children;
    const [contactElements] = contactRef.current.children;

    const landingTrigger = document.querySelector(`#landing`);
    const usesTrigger = document.querySelector(`#uses`);
    const contactTrigger = document.querySelector(`#contact`);

    const landingRow = landingElements.querySelector(`#landingRow`);
    const landingPhoto = landingRow.children[0];
    const landingTexts = landingRow.children[1].children;

    gsap.set([landingPhoto, landingTexts], { autoAlpha: 0 });
    const timelineLanding = gsap.timeline({
      delay: 0.3,
      defaults: {
        duration: 1,
        ease: `Power3.easeOut`,
      },
      scrollTrigger: {
        trigger: landingTrigger,
        start: `top center`,
      },
    });
    timelineLanding
      .fromTo(
        landingPhoto,
        { x: `-100%` },
        {
          x: 0,
          autoAlpha: 1,
        }
      )
      .fromTo(
        landingTexts,
        { y: `100%` },
        { autoAlpha: 1, y: 0, stagger: 0.2 },
        `<0.2`
      );
  }, []);

  return (
    <div className={clsx(className, styles.root)} id="homepage">
      <Container>
        <section id="landing" className={styles.section} ref={landingRef}>
          <Landing />
        </section>
        <section id="projects" className={styles.section}>
          <Projects />
        </section>
        <section id="skills" className={styles.section}>
          <Skills />
        </section>
        <section id="about" className={styles.section}>
          <About />
        </section>
        <section id="uses" className={styles.section} ref={usesRef}>
          <Uses />
        </section>
        <section id="contact" className={styles.section} ref={contactRef}>
          <Contact />
        </section>
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
