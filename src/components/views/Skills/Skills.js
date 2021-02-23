import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faBootstrap,
  faWordpressSimple,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify-icons/simple-icons/redux';
import expressIcon from '@iconify-icons/simple-icons/express';
import mongodbIcon from '@iconify-icons/simple-icons/mongodb';
import websocketIcon from '@iconify-icons/logos/websocket';
import jiraIcon from '@iconify-icons/simple-icons/jira';
import figmaIcon from '@iconify-icons/simple-icons/figma';
import adobephotoshopIcon from '@iconify-icons/simple-icons/adobephotoshop';
import adobeillustratorIcon from '@iconify-icons/simple-icons/adobeillustrator';
import writeDotAs from '@iconify-icons/simple-icons/write-dot-as';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './Skills.module.scss';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => {
  console.log(`Skills`);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actionName(`whatToDispatch`));
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <h2>Languages</h2>
      <Row className={styles.skillRow}>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <p>HTML</p>
        </Col>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <FontAwesomeIcon icon={faCss3Alt} />
          </div>
          <p>CSS</p>
        </Col>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <FontAwesomeIcon icon={faJsSquare} />
          </div>
          <p>JavaScript</p>
        </Col>
      </Row>
      <h2>Tools</h2>
      <Row className={styles.skillRow}>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <FontAwesomeIcon icon={faReact} />
          </div>
          <p>React with hooks</p>
        </Col>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <Icon icon={reduxIcon} className={styles.skillIcon} />
          </div>
          <p>Redux</p>
        </Col>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <FontAwesomeIcon icon={faBootstrap} />
          </div>
          <p>Bootstrap</p>
        </Col>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <FontAwesomeIcon icon={faWordpressSimple} />
          </div>
          <p>WordPress</p>
        </Col>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <FontAwesomeIcon icon={faNodeJs} />
          </div>
          <p>Node.js</p>
        </Col>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <Icon icon={expressIcon} />
          </div>
          <p>Express</p>
        </Col>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <Icon icon={mongodbIcon} className={styles.skillIcon} />
          </div>
          <p>MongoDB</p>
        </Col>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <Icon icon={mongodbIcon} className={styles.skillIcon} />
          </div>
          <p>Mongoose</p>
        </Col>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <Icon icon={websocketIcon} className={styles.iconAlt} />
          </div>
          <p>WebSocket</p>
        </Col>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <Icon icon={jiraIcon} className={styles.skillIcon} />
          </div>
          <p>Jira</p>
        </Col>
      </Row>
      {/* <h2>Methods</h2>
      <Row className={styles.skillRow}>
        <Col className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center p-0 mt-3 mb-3">
          BEM
        </Col>
      </Row> */}
      <h2>Design</h2>
      <Row className={styles.skillRow}>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <Icon icon={figmaIcon} className={styles.skillIcon} />
          </div>
          <p>Figma</p>
        </Col>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <Icon icon={adobephotoshopIcon} className={styles.skillIcon} />
          </div>
          <p> Adobe Photoshop</p>
        </Col>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <Icon icon={adobeillustratorIcon} className={styles.skillIcon} />
          </div>
          <p>Adobe Illustrator</p>
        </Col>
        <Col className={`${styles.skillCol} col-12 col-md-6 col-lg-4`}>
          <div className={styles.skillIcon}>
            <Icon icon={writeDotAs} className={styles.skillIcon} />
          </div>
          <p>Birdfont</p>
        </Col>
      </Row>
      <main>{children}</main>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Skills, Component as SkillsComponent };
