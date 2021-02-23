import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import styles from './ProjectForm.module.scss';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { Button } from '../Button/Button';

const Component = ({ className, children, project }) => {
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
              <img src={project.image} alt={project.name} />
              <p>{project.name}</p>
            </div>
            <div className={styles.projectDescriptionBox}>
              <Row className={styles.descriptionRow}>
                {project.live ? (
                  <Col className="col-6">
                    <a
                      className="d-flex justify-content-center align-items-center"
                      href={project.live}
                    >
                      <FontAwesomeIcon icon={faGlobe} />
                      <p className="pl-1 m-0">live</p>
                    </a>
                  </Col>
                ) : null}
                {project.git ? (
                  <Col className="col-6">
                    <a
                      className="col-6 d-flex justify-content-center align-items-center"
                      href={project.git}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      <p className="pl-1 m-0">github</p>
                    </a>
                  </Col>
                ) : null}
                {/* <Col className="col-12 mt-3 d-flex justify-content-center align-items-center">
                  <Button type="button">more</Button>
                </Col> */}
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
  project: PropTypes.object,
};

export { Component as ProjectForm, Component as ProjectFormComponent };
