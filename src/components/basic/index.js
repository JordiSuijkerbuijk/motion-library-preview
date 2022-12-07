import style from './style.css';

const Basic = ({ title, description }) => (
  <div class={style.basic}>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

export default Basic;
