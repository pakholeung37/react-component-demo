import { lazy, useEffect, useState } from "react";
import s from "./heading.module.css";
import svg from "./assets/logo.svg";

const LazyComponent = lazy(() => import("./lazy-component-demo"));
export const Heading = () => {
  const [jpeg, setJpeg] = useState<string | null>(null);
  useEffect(() => {
    import("./assets/img.jpeg").then((module) => {
      setJpeg(() => module.default);
    });
  });
  return (
    <div>
      <h1 className={s.heading}>Heading</h1>
      <LazyComponent />
      <div>
        jpeg
        {jpeg && <img src={jpeg} alt="png" />}
      </div>
      <div>
        svg
        <img src={svg} alt="svg" />
      </div>
    </div>
  );
};
