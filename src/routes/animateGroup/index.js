import clsx from 'clsx';
import { basic, basicFadeIn } from 'hackathon-motion-library/animationTypes/basic';
import { useEffect, useState } from 'preact/hooks';
import { animateGroup } from '../../../node_modules/hackathon-motion-library/animateGroup';
import Basic from '../../components/basic';
import style from './style.css';

const animations = {
  basicFadeIn: basicFadeIn,
  basic: basic,
};

const AnimateGroup = () => {
  const [options, setOptions] = useState({ duration: undefined });

  useEffect(() => {
    Object.keys(animations).map((item) => {
      const element = document.querySelector(`#${item}`);
      animateGroup({ target: element, options: { type: item, ...options } });
    });
  }, [options]);

  return (
    <div class={clsx([style.flex, style.gap])}>
      <div class={style.durationInput}>
        <label>duration: </label>
        <input
          type='number'
          step='100'
          defaultValue='300'
          onChange={(e) => {
            console.log('e.value', e.value);
            setOptions({ ...options, duration: e.target.value });
          }}
        />
      </div>
      {Object.keys(animations).map((item, i) => (
        //Every slice will be 100vh so we can correctly test the animations
        <div id={item} key={i} class={style.slice}>
          <Basic title='Basic slice' description='Basic description text' />
        </div>
      ))}
    </div>
  );
};

export default AnimateGroup;
