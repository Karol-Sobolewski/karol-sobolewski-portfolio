import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './Projects.module.scss';
import { ProjectForm } from '../../common/ProjectForm/ProjectForm';

const Component = ({ className, children }) => {
  const projects = useSelector((state) => state.projects.data);
  return (
    <div className={clsx(className, styles.root)}>
      <Container>
        <Row className={styles.hexRow}>
          {projects.map((item) => (
            <Col
              key={item._id}
              className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center p-0"
            >
              <ProjectForm project={item} key={item._id} />
            </Col>
          ))}
        </Row>
        <main>{children}</main>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Projects, Component as ProjectsComponent };
