import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import clsx from 'clsx';
import { gsap } from 'gsap';

import { Container } from 'react-bootstrap';
import styles from './Contact.module.scss';

const Component = ({ className, children }) => {
  const contact = useSelector((state) => state.contact.data)[0];
  const contactRef = useRef(null);

  useEffect(() => {
    const contactElements = contactRef.current.children;
    const contactHeading = contactElements[0];
    const contactContents = contactElements[1].children;
    gsap.set([contactHeading, contactContents], { autoAlpha: 0, y: 100 });
    const runOnComplete = () => {
      ScrollTrigger.batch(contactContents, {
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: { each: 0.15 },
            overwrite: true,
          }),
        // onLeave: (batch) =>
        //   gsap.set(batch, { autoAlpha: 0, y: -100, overwrite: true }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, { autoAlpha: 0, y: 100, overwrite: true }),
      });
      ScrollTrigger.addEventListener(`refreshInit`, () =>
        gsap.set(contactContents, { y: 0 })
      );
    };
    ScrollTrigger.batch(contactHeading, {
      start: `top bottom`,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          onComplete: runOnComplete,
          stagger: 0.15,
          y: 0,
        }),
      // onLeave: (batch) =>
      //   gsap.to(batch, {
      //     autoAlpha: 0,
      //     stagger: 0.15,
      //     y: `-100%`,
      //   }),
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
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <Container ref={contactRef}>
        <h2>{contact.heading}</h2>
        <ul>
          {contact.content.map((contactItem) => (
            <li key={contactItem._id}>
              <a
                href={contactItem.link}
                download={contactItem._linkType === `file`}
              >
                <div className={styles.icon}>
                  <img src={contactItem.icon.src} alt={contactItem.icon.alt} />
                </div>
                <span className={styles.text}>{contactItem.text}</span>
              </a>
            </li>
          ))}
        </ul>
        <main>{children}</main>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Contact, Component as ContactComponent };
