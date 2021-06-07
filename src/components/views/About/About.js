import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    const section = gsap.utils.toArray(aboutElements);
    gsap.set(section, { y: `100%`, autoAlpha: 0 });
    ScrollTrigger.batch(section, {
      start: `top bottom+=50px`,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          ease: `power3`,
          y: 0,
        }),
      onLeave: (batch) =>
        gsap.to(batch, {
          autoAlpha: 0,
          y: `-100%`,
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          autoAlpha: 0,
          y: `100%`,
        }),
    });
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
