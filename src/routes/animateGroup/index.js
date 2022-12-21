import { animateGroup } from 'hackathon-motion-library/animateGroup';
import { basic, basicFadeIn } from 'hackathon-motion-library/animationTypes/basic';
import { useEffect, useState } from 'preact/hooks';
import Basic from '../../components/basic';
import Controls from '../../components/controls';
import Image from '../../components/image';
import { removeInlineStyling } from '../../utils/removeInlineStyling';

const animationTypes = { basic: basic, basicFadeIn: basicFadeIn };

const sections = [
  { key: 'basic', value: Basic },
  { key: 'image', value: Image },
];

const AnimateGroup = () => {
  const [options, setOptions] = useState({ duration: 600, type: 'basic' });

  useEffect(() => {
    //Remove inline styling from previous animation
    removeInlineStyling();

    sections.map((item) => {
      const element = document.querySelector(`#${item.key}`);
      animateGroup({ target: element, options: { ...options } });
    });
  }, [options]);

  return (
    <div class='grid grid-flow-col grid-cols-auto'>
      <div class='py-28 px-16 gap-8 flex flex-col'>
        {sections.map((item, i) => {
          const Comp = item.value;

          return (
            //Every slice will be 100vh so we can correctly test the animations
            <section id={item.key} key={i} class='min-h-screen h-full'>
              <Comp />
            </section>
          );
        })}
      </div>
      <Controls options={options} setOptions={setOptions} animationTypes={animationTypes} />
    </div>
  );
};

export default AnimateGroup;
