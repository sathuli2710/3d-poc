import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { ReactComponent as Arrow } from "../assets/chevronArrow.svg";
import Home from "../components/roomshow/Home";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Color } from "three";
import EditRoom from "../components/roomshow/EditRoom";
import Girl from "../components/roomshow/Girl";
import Tiger from "../components/roomshow/Tiger";
import Trees from "../components/roomshow/Trees";

const Roomshow = ({ width = "100%", height = "100%" }) => {
  let lightColor = new Color(1.5, 0.9, 0.1);
  const [model, setModel] = useState("");
  const [position, setPosition] = useState("");
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
      <Canvas
        shadows
        style={{ width: width, height: height }}
        className="border border-pink-200 rounded-2xl rounded-tl-[200px] shadow-lg shadow-pink-100"
      >
        <PerspectiveCamera makeDefault fov={50} position={[10, -20, -30]} />
        <OrbitControls target={[0, 0, -30]} maxPolarAngle={Math.PI * 0.5} />
        <Environment
          background={"only"}
          files={process.env.PUBLIC_URL + "/textures/bg.hdr"}
        />
        <Environment
          background={false}
          files={process.env.PUBLIC_URL + "/textures/envmap.hdr"}
        />
        <spotLight
          penumbra={1}
          distance={500}
          angle={60.65}
          attenuation={1}
          anglePower={3}
          intensity={0.9}
          color={lightColor}
          position={[1.19, 10.85, -4.45]}
          target-position={[0, 0, -1]}
        />
        <Home />
        {model === "girl" && <Girl selectedPreset={position} />}
        {model === "tiger" && <Tiger />}
        {model === "trees" && <Trees />}
        <Suspense fallback={null}></Suspense>
      </Canvas>
      <EditRoom
        model={model}
        position={position}
        setPosition={setPosition}
        setModel={setModel}
      />
    </section>
  );
};

export default Roomshow;
