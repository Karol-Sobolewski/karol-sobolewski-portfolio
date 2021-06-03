import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { gsap } from 'gsap';

import { Navigation } from '../Navigation/Navigation';
import { Logo } from '../../common/Logo/Logo';
import styles from './Header.module.scss';

const Component = ({ className, children }) => {
  const headerRef = useRef(null);
  useEffect(() => {
    const headerElements = headerRef.current.children;
    const logo = headerElements[0].querySelector(`#logo`);
    const menuLinks = headerElements[1].querySelector(`#navRow`).childNodes;
    // const scrollT = document.querySelector(`#trigger`);
    gsap.set([logo, menuLinks], { autoAlpha: 0 });
    const timelineHeader = gsap.timeline({
      duration: 0.3,
      delay: 0.3,
      defaults: {
        ease: `Power3.easeOut`,
      },
      // scrollTrigger: {
      //   trigger: scrollT,
      // },
    });
    timelineHeader
      .fromTo(
        logo,
        { x: `-100%` },
        {
          x: 0,
          autoAlpha: 1,
        }
      )
      .fromTo(
        menuLinks,
        { y: `-100%` },
        { autoAlpha: 1, y: 0, stagger: 0.1 },
        `<0.2`
      );
  }, []);

  return (
    <div className={clsx(className, styles.root)} ref={headerRef}>
      <Logo />
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Header, Component as HeaderComponent };
