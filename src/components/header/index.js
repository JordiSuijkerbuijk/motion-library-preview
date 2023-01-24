import clsx from "clsx";
import { Fragment } from "preact";
import { Link } from "preact-router/match";
import { useState } from "preact/hooks";
import { emitter } from "../../utils/emitter";

const Header = () => {
  const [open, setOpen] = useState(false);

  function handleControls() {
    emitter.emit("toggleControls", { shouldClose: open });
    setOpen((v) => !v);
  }

  return (
    <Fragment>
      <div className="h-14" />
      <header class="fixed top-0 left-0 w-full h-14 p-0 bg-black text-xs z-50 flex items-center justify-between px-4">
        <Link href="/">
          <h1 class="text-white text-md px-2">Motion library</h1>
        </Link>
        {/* options menu */}
        <div class="flex">
          <button
            class={clsx([
              "px-3 py-2 border rounded-md text-white border-white/50 text-white/75 transition-colors duration-75 hover:text-yellow hover:border-yellow hover:bg-yellow/20",
              open && "text-yellow border-yellow bg-yellow/20",
            ])}
            onClick={() => handleControls()}
          >
            Controls
          </button>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
