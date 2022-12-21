const Image = ({ id }, props) => (
  <div class='w-full overflow-hidden aspect-video flex justify-center items-baseline' {...props}>
    <img
      class='max-w-[125%]'
      id={id}
      src='https://dpdk.com/assets/paragraph/image/7up_image_1.jpg'
    />
  </div>
);

export default Image;
