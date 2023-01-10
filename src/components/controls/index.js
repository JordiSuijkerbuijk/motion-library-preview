import anime from 'animejs';
import clsx from 'clsx';
import { animateGroup } from 'hackathon-motion-library/animateGroup';
import { useEffect, useState } from 'preact/hooks';
import { emitter } from '../../utils/emitter';

//TODO: Might have to rewrite controls component since it might be nice to have it be a little more modular.

export default function Controls({ options, setOptions, animationTypes = {} }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    //Catch event that is sent to toggle the controls
    emitter.on('toggleControls', handleInandOutAnimation);

    //Cleanup
    return () => {
      emitter.off('toggleControls', handleInandOutAnimation);
    };
  }, []);

  function handleInandOutAnimation({ shouldClose }) {
    if (!shouldClose) {
      setOpen((v) => !v);
    }
    const element = document.querySelectorAll('.input');
    animateGroup({
      targets: element,
      options: {
        duration: 600,
        type: 'basicFadeIn',
        easing: 'easeInOutQuint',
        reverse: shouldClose,
        delay: anime.stagger(100),
      },
      callbacks: {
        complete: () => {
          if (shouldClose) {
            setOpen((v) => !v);
          }
        },
      },
    });
  }

  return (
    <div
      class={clsx([
        'fixed top-0 z-20 right-0 bg-black text-white text-xs grid-rows-max grid h-screen gap-y-3 gap-x-2 pt-16 px-4 transition-transform ease-out duration-300 inputWrapper',
        !open && 'translate-x-full',
      ])}
    >
      {options && (
        <div class='h-fit grid grid-cols-6 grid-flow-col items-center input'>
          <label>duration: </label>
          <input
            type='number'
            step='100'
            defaultValue='600'
            onChange={(e) => {
              setOptions({ ...options, duration: e.target?.value || 600 });
            }}
          />
        </div>
      )}
      {options && (
        <div class='h-fit grid grid-cols-6 grid-flow-col items-center input'>
          <label>animation type: </label>
          <select
            onChange={(e) => {
              setOptions({ ...options, type: e?.target?.value || 'basic' });
            }}
          >
            {Object.keys(animationTypes).map((item, i) => {
              return (
                <option value={item} key={i}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
}
