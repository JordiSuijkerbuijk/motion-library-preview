const AnimationType = ({ type }) => (
  <a href={`/${type}`} class="flex flex-col gap-8">
    <h1>Link to type</h1>
  </a>
);

const Home = () => (
  <div>
    <h1>Animation options:</h1>
    <AnimationType type="animate-group" />
  </div>
);

export default Home;
