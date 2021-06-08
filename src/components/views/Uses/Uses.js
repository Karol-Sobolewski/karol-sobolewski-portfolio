import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Row, Col } from 'react-bootstrap';
import styles from './Uses.module.scss';

const Component = ({ className, children }) => {
  const usesList = useSelector((state) => state.uses.data);
  const usesRef = useRef(null);
  const usesLinkRef = useRef(null);
  useEffect(() => {
    const usesElements = usesRef.current.children;
    for (const usesElement of usesElements) {
      if (usesElement.children[0]) {
        const usesHeading = usesElement.children[0];
        const usesContents = usesElement.children[1].children;
        gsap.set([usesHeading, usesContents], {
          y: `100%`,
          autoAlpha: 0,
        });
        const runOnComplete = () => {
          ScrollTrigger.batch(usesContents, {
            start: `top bottom`,
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
        ScrollTrigger.batch(usesHeading, {
          start: `top bottom`,
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
    const usesLink = usesLinkRef.current;

    console.log(`linkRef`, usesLink);
    gsap.set(usesLink, { autoAlpha: 0, y: `-100%` });

    const timelineUsesLink = gsap.timeline({
      defaults: {
        duration: 1,
        ease: `Power3.easeOut`,
      },
      scrollTrigger: {
        trigger: usesLink,
        toggleActions: `play reset play reverse`,
        start: `top bottom`,
      },
    });
    timelineUsesLink.to(usesLink, {
      delay: 1,
      y: 0,
      autoAlpha: 1,
    });
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <Row
        className="d-flex justify-content-around align-items-start w-100"
        ref={usesRef}
      >
        {usesList.map((usesItem) => (
          <Col className="col-12 col-md-5 m-3 d-flex justify-content-center align-items-center flex-column">
            <h3>{usesItem.heading}</h3>
            <ul>
              {usesItem.setup.map((setup) => (
                <li>
                  <h4>{setup.heading}</h4>
                  <p>{setup.gear}</p>
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
      <p ref={usesLinkRef}>
        List of everyone's /uses list is available at{` `}
        <a href="https://www.uses.tech/">uses.tech</a>
      </p>
      <main>{children}</main>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Uses, Component as UsesComponent };
