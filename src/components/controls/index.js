import style from './style.css';

export default function Controls({ options, setOptions, animationTypes = {} }) {
  <div class={style.durationInput}>
    <div class={style.column}>
      <label>duration: </label>
      <input
        type='number'
        step='100'
        defaultValue='600'
        onChange={(e) => {
          setOptions({ ...options, duration: e.target.value });
        }}
      />
    </div>
    <div class={style.column}>
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
  </div>;
}
