import React, { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { gsap } from 'gsap';
import { Row, Col } from 'react-bootstrap';
import styles from './Landing.module.scss';

const Component = ({ className, children }) => {
  const landingRef = useRef(null);

  useEffect(() => {
    const [landingElements] = landingRef.current.children;
    const landingPhoto = landingElements.children[0];
    const landingTexts = landingElements.children[1].children;
    gsap.set([landingPhoto, landingTexts], { autoAlpha: 0 });
    const timelineLanding = gsap.timeline({
      defaults: {
        duration: 1,
        ease: `Power3.easeOut`,
      },
      scrollTrigger: {
        trigger: landingPhoto,
        toggleActions: `play reset play reverse`,
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
    <div className={clsx(className, styles.root)} ref={landingRef}>
      <Row className={styles.landingRow} id="landingRow">
        <Col className={`${styles.myPhoto} col-12 col-md-6`}>
          <img src="/images/me2.jpg" alt="me" />
        </Col>
        <Col className="col-12 col-md-6">
          <h2>hello there</h2>
          <p>My name is Karol Sobolewski</p>
          <p>I am Junior Web Developer</p>
        </Col>
      </Row>
      <main>{children}</main>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Landing, Component as LandingComponent };
