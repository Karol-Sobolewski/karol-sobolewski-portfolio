import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavHashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { Row, Col } from 'react-bootstrap';
import styles from './Navigation.module.scss';

const Component = ({ className }) => {
  const activeLink = useSelector((state) => state.activeLink.data);
  const menu = useSelector((state) => state.menu.data);
  const [active, setActive] = useState(false); //eslint-disable-line
  const [activeRWD, setActiveRWD] = useState(false);
  const homepage = document.getElementById(`homepage`);
  useEffect(() => {
    if (homepage) {
      if (activeRWD) {
        homepage.setAttribute(`style`, `filter: blur(4px)`);
        document.body.style.overflow = `hidden`;
      } else {
        homepage.setAttribute(`style`, `filter: blur(0px)`);
        document.body.style.overflow = `unset`;
      }
    }
  });
  const useOutsideMenu = (ref) => {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setActiveRWD(false);
          setActive(false);
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
    setActiveRWD(!activeRWD);
  };
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
          <Col key={item._id} className={styles.navCol}>
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
  className: PropTypes.string,
};

export { Component as Navigation, Component as NavigationComponent };
