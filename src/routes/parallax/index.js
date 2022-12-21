import { animateOnScroll } from 'hackathon-motion-library/animateOnScroll';
import parallax from 'hackathon-motion-library/animationTypes/parallax';
import { useEffect, useState } from 'preact/hooks';
import Controls from '../../components/controls';
import Image from '../../components/image';
import { removeInlineStyling } from '../../utils/removeInlineStyling';

const animationTypes = { parallax: parallax };

const sections = [{ key: 'image', value: Image }];

const AnimateGroup = () => {
  const [options, setOptions] = useState({ duration: 600, type: 'parallax' });

  useEffect(() => {
    //Remove inline styling from previous animation
    removeInlineStyling();

    sections.map((item) => {
      const element = document.querySelector(`#${item.key}`);
      animateOnScroll({ target: element, options: { ...options } });
    });
  }, [options]);

  return (
    <div class='flex flex-col'>
      <Controls options={options} setOptions={setOptions} animationTypes={animationTypes} />

      {sections.map((item, i) => {
        const Comp = item.value;

        return (
          //Every slice will be 100vh so we can correctly test the animations
          <section key={i} class='h-[300vh] flex items-center'>
            <div class='min-h-screen h-screen'>
              <Comp id={item.key} />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default AnimateGroup;
