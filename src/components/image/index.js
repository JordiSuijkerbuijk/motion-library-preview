import style from './style.css';

const Image = (props) => (
  <div class={style.imageWrapper} {...props}>
    <img class={style.image} src='https://dpdk.com/assets/paragraph/image/7up_image_1.jpg' />
  </div>
);

export default Image;
