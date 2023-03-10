import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CarShow } from "../components/threedshow/CarShow";
import { ReactComponent as Arrow } from "../assets/chevronArrow.svg";

const ThreeDShow = ({ width = "100%", height = "100%" }) => {
  return (
    <section className="h-full w-full bg-black opacity-90 p-12">
      <div
        className="absolute top-[20px] left-[20px] w-[80px] h-[80px] bg-white rounded-full border-1 border-pink-200 shadow-sm shadow-pink-100 z-10 grid place-items-center routeBox cursor-pointer"
        onClick={() => window.open("/", "_self")}
      >
        <Arrow
          fill="white"
          width={40}
          height={40}
          stroke="white"
          className="rotate-180 mr-2"
        />
      </div>
      <Suspense fallback={null}>
        <Canvas
          shadows
          style={{ width: width, height: height }}
          className="border border-pink-200 rounded-2xl rounded-tl-[200px] shadow-lg shadow-pink-100"
        >
          <CarShow />
        </Canvas>
      </Suspense>
    </section>
  );
};

export default ThreeDShow;
