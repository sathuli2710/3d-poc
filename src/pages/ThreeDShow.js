import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CarShow } from "../components/threedshow/CarShow";

const ThreeDShow = ({ width = "100%", height = "100%" }) => {
  return (
    <section className="h-full w-full bg-black opacity-90 p-12">
      <Suspense fallback={null}>
        <Canvas
          shadows
          style={{ width: width, height: height }}
          className="border border-pink-200 rounded-lg shadow-lg shadow-pink-100"
        >
          <CarShow />
        </Canvas>
      </Suspense>
    </section>
  );
};

export default ThreeDShow;
