import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { NavHashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { Container, Row, Col } from 'react-bootstrap';
import smoothscroll from 'smoothscroll-polyfill';
import styles from './Navigation.module.scss';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => {
  // const dispatch = useDispatch();
  const activeLink = useSelector((state) => state.activeLink.data);
  const menu = useSelector((state) => state.menu.data);
  const [active, setActive] = useState(false);
  const [activeRWD, setActiveRWD] = useState(false);
  const homepage = document.getElementById(`homepage`);
  // console.log(`menu`, menu);

  useEffect(() => {
    // dispatch(actionName(`whatToDispatch`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (homepage) {
      if (activeRWD) {
        homepage.setAttribute(`style`, `filter: blur(4px)`);
        document.body.style.overflow = `hidden`;
      } else {
        homepage.setAttribute(`style`, `filter: blur(0px)`);
        document.body.style.overflow = `unset`;
      }
    }
    // if (homepage) {
    //     // homepage.setAttribute(`style`, `filter: blur(4px)`);
    //   } else {
    //     console.log(`not`);
    //     // homepage.setAttribute(`style`, `filter: blur(0px)`);
    //   }
    // }
    //   // homepage.setAttribute(`style`, `filter: blur(4px)`);
    //   console.log(homepage);
    // } else {
    // homepage.setAttribute(`style`, `filter: blur(0px)`);
    // }
  });
  const useOutsideMenu = (ref) => {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setActiveRWD(false);
          setActive(false);
          // homepage.setAttribute(`style`, `filter: blur(0px)`);
        }
      }
      document.addEventListener(`mousedown`, handleClickOutside);
      return () => {
        document.removeEventListener(`mousedown`, handleClickOutside);
      };
    }, [ref]);
  };
  const menuRef = useRef(null);
  useOutsideMenu(menuRef);

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = 1;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: `smooth` });
  };

  const toggleMenuButton = () => {
    // console.log(activeRWD);
    setActiveRWD(!activeRWD);
    // homepage.setAttribute(`style`, `filter: blur(4px)`);
    // console.log(homepage);
  };

  // console.log(activeRWD);
  return (
    <nav
      className={clsx(className, activeRWD ? styles.root__active : styles.root)}
      ref={menuRef}
    >
      <HamburgerSqueeze
        className={styles.burgerButton}
        id="burgerButton"
        isActive={activeRWD}
        onClick={toggleMenuButton}
      />
      <Row className={styles.navRow}>
        {menu.map((item) => (
          <Col key={item.id} className={styles.navCol}>
            <NavHashLink
              smooth
              to={`/${item.src}`}
              scroll={(el) => scrollWidthOffset(el)}
              className={`${styles.navLink} ${
                activeLink === `${item.name}` ? styles.navLink__active : ``
              }`}
              onClick={() => setActiveRWD(false)}
            >
              <img
                type="image/svg+xml"
                src="/images/hex.svg"
                className={styles.navHex}
                aria-label="Hex"
              />
              {item.name}
            </NavHashLink>
          </Col>
        ))}
      </Row>
    </nav>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Navigation, Component as NavigationComponent };
