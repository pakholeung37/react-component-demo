import { ComponentType, useEffect, useState } from "react";
import { Heading } from "react-component-demo-heading";

import "./App.css";

function App() {
  const [ComponentCdn, setComponentCdn] = useState<ComponentType | null>(null);

  useEffect(() => {
    import(
      "https://cdn.jsdelivr.net/npm/react-component-demo-heading@0.6.0/dist/index.mjs"
      // "/../heading/dist/index.mjs",
      // "http://127.0.0.1:5500/packages/heading/dist/index.mjs"
    ).then((module) => {
      setComponentCdn(() => module.Heading);
    });
  }, [0]);

  return (
    <>
      <div>
        from packages
        <Heading />
      </div>
      <div>
        from cdn
        {ComponentCdn ? <ComponentCdn /> : null}
      </div>
      <div>
        asssets: .img
        <img src="/assets/img.png" alt="img" />
      </div>
    </>
  );
}

export default App;
