import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { gsap } from 'gsap';

import styles from './About.module.scss';

const Component = ({ className, children }) => {
  const aboutList = useSelector((state) => state.about.data);
  const aboutRef = useRef(null);

  const renderAbout = (about) => {
    if (about.type === `heading`)
      return <h3 key={about._id}>{about.content}</h3>;
    if (about.type === `paragraph`)
      return <p key={about._id}>{about.content}</p>;
    if (about.type === `image`)
      return (
        <img
          key={about._id}
          src={about.content[0].src}
          alt={about.content[0].alt}
        />
      );
  };

  useEffect(() => {
    const aboutElements = aboutRef.current.children;
    for (const aboutElement of aboutElements) {
      console.log(`aboutElements`, aboutElement);
      gsap.set(aboutElement, { autoAlpha: 0 });
      const timelineAbout = gsap.timeline({
        defaults: {
          duration: 1,
          delay: 0.3,
          ease: `Power3.easeOut`,
        },
        scrollTrigger: {
          trigger: aboutElement,
          start: `top bottom`,
        },
      });
      timelineAbout.fromTo(
        aboutElement,
        { y: `100%` },
        {
          y: 0,
          autoAlpha: 1,
        }
      );
    }
  }, []);

  return (
    <div className={clsx(className, styles.root)} ref={aboutRef}>
      {aboutList ? aboutList.map(renderAbout) : null}
      <main>{children}</main>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as About, Component as AboutComponent };
