import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import AnimateGroup from '../routes/animateGroup';
import Home from '../routes/home';
import Parallax from '../routes/parallax';
import style from './style.css';

const App = () => {
  return (
    <div id='app'>
      <Header />
      <div class={style.wrapper}>
        <Router>
          <Home path='/' />
          <AnimateGroup path='/animateGroup' />
          <Parallax path='/parallax' />
        </Router>
      </div>
    </div>
  );
};

export default App;
