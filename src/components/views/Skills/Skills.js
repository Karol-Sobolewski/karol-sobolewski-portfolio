import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { gsap } from 'gsap';

import { Row, Col } from 'react-bootstrap';
import styles from './Skills.module.scss';

const Component = ({ className, children }) => {
  const skillsList = useSelector((state) => state.skills.data);
  const skillsRef = useRef(null);
  useEffect(() => {
    const skillsElements = skillsRef.current.children;

    // eslint-disable-next-line
    for (const skillsElement of skillsElements) {
      if (skillsElement.children[0]) {
        const skillHeading = skillsElement.children[0];
        const skillContents = skillsElement.children[1].children;
        gsap.set([skillHeading], { autoAlpha: 0 });
        const timelineHeadings = gsap.timeline({
          delay: 0.3,
          defaults: {
            duration: 1,
            ease: `Power3.easeOut`,
          },
          scrollTrigger: {
            trigger: skillHeading,
            start: `bottom bottom`,
          },
        });
        timelineHeadings.fromTo(
          skillHeading,
          { y: `-100%` },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.5,
          }
        );
        for (const skillContent of skillContents) {
          gsap.set([skillContent], { autoAlpha: 0 });
          const timelineSkills = gsap.timeline({
            delay: 0.3,
            defaults: {
              duration: 1,
              ease: `Power3.easeOut`,
            },
            scrollTrigger: {
              trigger: skillContent,
              start: `bottom bottom`,
            },
          });
          timelineSkills.fromTo(
            skillContent,
            { y: `-100%` },
            {
              delay: 0.3,
              y: 0,
              autoAlpha: 1,
              stagger: 0.2,
            }
          );
        }
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
