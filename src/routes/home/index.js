import style from './style.css';

const AnimationType = ({ type }) => (
  <a href={`/${type}`} class={style.link}>
    <h1>Link to type</h1>
  </a>
);

const Home = () => (
  <div class={style.home}>
    <h1>Animation options:</h1>
    <AnimationType type='animateGroup' />
  </div>
);

export default Home;
