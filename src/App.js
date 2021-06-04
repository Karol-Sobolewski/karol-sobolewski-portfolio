import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fetchMenu } from './redux/menuRedux';
import { fetchProjects } from './redux/projectRedux';
import { fetchSkills } from './redux/skillRedux';

import { HomePage } from './components/views/HomePage/HomePage';
import { Loader } from './components/common/Loader/Loader';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { NotFound } from './components/views/NotFound/NotFound';

import './styles/bootstrap.scss';
import styles from './App.module.scss';

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.data);
  const projects = useSelector((state) => state.projects.data);
  const skills = useSelector((state) => state.skills.data);
  useEffect(() => {
    dispatch(fetchMenu());
    dispatch(fetchProjects());
    dispatch(fetchSkills());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (menu.length !== 0 && projects.length !== 0 && skills.length !== 0) {
      setLoaded(true);
    }
  });
  return (
    <>
      {loaded ? (
        <div className={styles.app}>
          <BrowserRouter>
            <MainLayout>
              <Switch>
                <Route exact path="/" component={() => <HomePage />} />
                <Route exact path="/about">
                  <Redirect to="/#about" />
                </Route>
                <Route exact path="/projects">
                  <Redirect to="/#projects" />
                </Route>
                <Route exact path="/skills">
                  <Redirect to="/#skills" component={() => <HomePage />} />
                </Route>
                <Route exact path="/uses">
                  <Redirect to="/#uses" />
                </Route>
                <Route exact path="/contact">
                  <Redirect to="/#contact" />
                </Route>
                <Route path="*" component={NotFound} />
              </Switch>
            </MainLayout>
          </BrowserRouter>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default App;
