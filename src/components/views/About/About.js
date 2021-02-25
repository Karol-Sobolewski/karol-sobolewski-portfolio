import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './About.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h3>hello there, I'm the bald one</h3>
    <img src="/images/me3.jpg" alt="karol-sobolewski" />
    <h3>The road so far...</h3>
    <p>I'm 28 years old junior fullstack web developer from Kraków, Poland.</p>
    <p>
      Since secondary school I was interested in programming, but I went
      different way and I have became an archaeologist.
    </p>
    <p>
      In 2015 I went to Guatemala for excavations at Nakum site in northern
      Guatemala, close to the border with Mexico.
    </p>
    <img src="/images/guate.jpg" alt="Guatemala" />
    <p>
      My master thesis was based on trade roots in Central Mesoamerica I have
      learned a quite new tricks using Adobe Photoshop Adobe Illustrator and
      QGIS.
    </p>
    <img src="/images/dev.png" alt="Code" />
    <p>
      At the beginning of 2020 I have started Web Development Bootcamp by
      Kodilla. Since then almost every day I spend on learning new technologies.
      Right now I'm taking Wes Bos's courses.
    </p>
    <h3>Besides work</h3>
    <img src="/images/olmec.jpg" alt="Olmecs" />
    <p>
      I like history, especially Olmec archaeology. Olmec culture was earliest
      Mesoamerican civilization that was spread across Gulf of Mexico and other
      regions of Mexico, Guatemala and Honduras from 1700 till 400 BC.
    </p>
    <p>
      I spend my free time on watching films and TV series. I also like reading
      fantasy, crime fiction and historical books. Besides that I love to play
      video games including: Civilization 6, Heroes of Might & Magic III,
      Crusader Kings II, Ancestors Legacy, Hell Let Loose, Red Dead Redemption 2
      and NBA 2K.
    </p>
    <img src="/images/run.png" alt="Running" />
    <p>
      Recently I have became fit enthusiast. I lost around 30kg by running and
      keeping with the diet. In future I would like to keep this progress and
      build some muscles.
    </p>
    <p>Travel to as many countries as I can is my goal.</p>
    <main>{children}</main>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as About, Component as AboutComponent };
