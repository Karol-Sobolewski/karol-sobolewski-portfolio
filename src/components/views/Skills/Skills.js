import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Row, Col } from 'react-bootstrap';
import styles from './Skills.module.scss';

const Component = ({ className, children }) => {
  const skillsList = useSelector((state) => state.skills.data);
  const skillsRef = useRef(null);
  useEffect(() => {
    const skillsElements = skillsRef.current.children;
    for (const skillsElement of skillsElements) {
      if (skillsElement.children[0]) {
        const skillHeading = skillsElement.children[0];
        const skillContents = skillsElement.children[1].children;
        gsap.set([skillContents, skillHeading], {
          y: `100%`,
          autoAlpha: 0,
        });
        const runOnComplete = () => {
          ScrollTrigger.batch(skillContents, {
            start: `top bottom-=100px`,
            defaults: {
              ease: `bounce`,
            },
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                duration: 1,
                ease: `bounce`,
                stagger: 0.15,
                y: 0,
              }),
            onLeave: (batch) =>
              gsap.to(batch, {
                autoAlpha: 0,
                ease: `bounce`,
                stagger: 0.15,
                y: `-100%`,
              }),
            onEnterBack: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                delay: 0.5,
                ease: `bounce`,
                stagger: 0.15,
                y: 0,
              }),
            onLeaveBack: (batch) =>
              gsap.to(batch, {
                autoAlpha: 0,
                delay: 0.5,
                ease: `bounce`,
                stagger: 0.1,
                y: `100%`,
              }),
          });
        };
        ScrollTrigger.batch(skillHeading, {
          start: `bottom bottom`,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              onComplete: runOnComplete,
              stagger: 0.15,
              y: 0,
            }),
          onLeave: (batch) =>
            gsap.to(batch, {
              autoAlpha: 0,
              stagger: 0.15,
              y: `-100%`,
            }),
          onEnterBack: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              stagger: 0.15,
              y: 0,
            }),
          onLeaveBack: (batch) =>
            gsap.to(batch, {
              autoAlpha: 0,
              stagger: 0.1,
              y: `100%`,
            }),
        });
      }
    }
  }, []);

  return (
    <div className={clsx(className, styles.root)} ref={skillsRef}>
      {skillsList.map((skillItem) => (
        <div className={styles.skillSection} key={skillItem._id}>
          <h2>{skillItem.heading}</h2>
          <Row className={styles.skillRow}>
            {skillItem.skills.map((singleSkill) => (
              <Col
                className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}
                key={singleSkill._id}
              >
                <div className={styles.skillIcon}>
                  <img src={singleSkill.icon} alt={singleSkill.text} />
                </div>
                <p>{singleSkill.text}</p>
              </Col>
            ))}
          </Row>
        </div>
      ))}
      <main>{children}</main>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Skills, Component as SkillsComponent };
