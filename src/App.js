import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fetchMenu } from './redux/menuRedux';
import { fetchProjects } from './redux/projectRedux';
import { fetchSkills } from './redux/skillRedux';
import { fetchAbout } from './redux/aboutRedux';
import { fetchUses } from './redux/usesRedux';
import { fetchContact } from './redux/contactRedux';

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
  const about = useSelector((state) => state.about.data);
  const uses = useSelector((state) => state.uses.data);
  const contact = useSelector((state) => state.contact.data);
  useEffect(() => {
    dispatch(fetchMenu());
    dispatch(fetchProjects());
    dispatch(fetchAbout());
    dispatch(fetchSkills());
    dispatch(fetchUses());
    dispatch(fetchContact());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (menu && projects && skills && about && uses && contact) {
      if (
        menu.length !== 0 &&
        projects.length !== 0 &&
        skills.length !== 0 &&
        about.length !== 0 &&
        uses.length !== 0 &&
        contact.length !== 0
      ) {
        setLoaded(true);
      }
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
