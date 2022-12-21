export default function Controls({ options, setOptions, animationTypes = {} }) {
  return (
    <div class='sticky top-0 right-0 z-20 bg-black text-white text-xs grid-rows-max grid h-screen gap-y-3 gap-x-2 py-14 px-4'>
      <div class='h-fit grid grid-cols-6 grid-flow-col items-center'>
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
      <div class='h-fit grid grid-cols-6 grid-flow-col items-center'>
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
    </div>
  );
}
