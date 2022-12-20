import { animateGroup } from 'hackathon-motion-library/animateGroup';
import { basic, basicFadeIn } from 'hackathon-motion-library/animationTypes/basic';
import { useEffect, useState } from 'preact/hooks';
import Basic from '../../components/basic';
import Controls from '../../components/controls';
import Image from '../../components/image';
import { removeInlineStyling } from '../../utils/removeInlineStyling';
import style from './style.css';

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
    <div class={style.container}>
      <div class={style.sectionsWrapper}>
        {sections.map((item, i) => {
          const Comp = item.value;

          return (
            //Every slice will be 100vh so we can correctly test the animations
            <section id={item.key} key={i} class={style.slice}>
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
