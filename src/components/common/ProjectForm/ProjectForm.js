import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './ProjectForm.module.scss';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { Button } from '../Button/Button';

const project = {
  title: `hey`,
};
const Component = ({ className, children }) => {
  const [rotate, setRotate] = useState(false);
  const useClickOutsideOfprojectBox = (ref) => {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setRotate(false);
        }
      }

      document.addEventListener(`mousedown`, handleClickOutside);
      return () => {
        document.removeEventListener(`mousedown`, handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = useRef(null);
  useClickOutsideOfprojectBox(wrapperRef);

  const handleHover = () => {
    setRotate(true);
  };
  const handleOut = () => {
    setRotate(false);
  };

  return (
    <div
      className={clsx(className, styles.root)}
      ref={wrapperRef}
      onMouseLeave={() => handleOut()}
      onMouseEnter={() => handleHover()}
    >
      <div className={styles.content}>
        <div className={styles.projectBox}>
          <div
            className={
              rotate ? styles.projectBoxInner__rotate : styles.projectBoxInner
            }
          >
            <div className={styles.projectImage}>
              <img src="/images/projects/cookie.svg" alt="project-2" />
              <p>project</p>
            </div>
            <div className={styles.projectDescriptionBox}>
              <Row className="w-80">
                <Col className="col-6">
                  <p>live</p>
                </Col>
                <Col className="col-6">
                  <p>github</p>
                </Col>
                <Col className="col-12">
                  <p>more</p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // project: PropTypes.object,
};

export { Component as ProjectForm, Component as ProjectFormComponent };
