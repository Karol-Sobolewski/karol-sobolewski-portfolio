import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Row, Col } from 'react-bootstrap';
import styles from './Uses.module.scss';

const Component = ({ className, children }) => {
  const usesList = useSelector((state) => state.uses.data);

  return (
    <div className={clsx(className, styles.root)}>
      <Row className="d-flex justify-content-around align-items-start w-100">
        {usesList.map((usesItem) => (
          <Col className="col-12 col-md-5 m-3 d-flex justify-content-center align-items-center flex-column">
            <h3>{usesItem.heading}</h3>
            <ul>
              {usesItem.setup.map((setup) => (
                <li>
                  <h4>{setup.heading}</h4>
                  <p>{setup.gear}</p>
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
      <p>
        List of everyone's /uses list is available at{` `}
        <a href="https://www.uses.tech/">uses.tech</a>
      </p>
      <main>{children}</main>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Uses, Component as UsesComponent };
