import * as React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import createDrawing from "./createDrawing";

const UseLocalStorage = () => {
  const [drawing, saveDrawing] = useLocalStorage("drawing", null);
  const ref = React.useRef(null);
  React.useEffect(() => {
    createDrawing(ref.current, drawing, saveDrawing);
  }, [drawing, saveDrawing]);

  return (
    <section>
      <header>
        <h1>useLocalStorage</h1>

        <button className="link" onClick={() => window.location.reload()}>
          Reload Window
        </button>
        <button
          className="link"
          onClick={() => {
            window.localStorage.clear();
            window.location.reload();
          }}
        >
          Clear Local Storage
        </button>
      </header>
      <figure>
        <canvas ref={ref} width={800} height={800} />
        <figcaption>(draw something)</figcaption>
      </figure>
    </section>
  );
};

export default UseLocalStorage;
