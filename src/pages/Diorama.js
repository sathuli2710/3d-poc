import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
  // Html,
  // useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  HueSaturation,
  ChromaticAberration,
  GodRays,
  DepthOfField,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import { Suspense } from "react";
import { Color, CylinderGeometry, Mesh, MeshBasicMaterial } from "three";
import FloatingIsland from "../components/diorama/FloatingIsland";
import FloatingRocks from "../components/diorama/FloatingRocks";
import Grass from "../components/diorama/Grass";
import Portal from "../components/diorama/Portal";
import Rocks from "../components/diorama/Rocks";
import Trees from "../components/diorama/Trees";
import Words from "../components/diorama/Words";
import SceneParticles from "../components/diorama/SceneParticles";
// import Tiger from "../components/diorama/Tiger";
// import Girl from "../components/diorama/Girl";
import { ReactComponent as Arrow } from "../assets/chevronArrow.svg";

let lightColor = new Color(1, 0.2, 0.1);
let mesh = new Mesh(
  new CylinderGeometry(0.3, 0.3, 0.2, 20),
  new MeshBasicMaterial({
    color: lightColor,
    transparent: true,
    opacity: 1,
  })
);
mesh.rotation.x = Math.PI * 0.5;
mesh.position.set(1.17, 10.7, -4.1);
mesh.scale.set(1.5, 1, 1);

// function Loader() {
//   const { active, progress, errors, item, loaded, total } = useProgress();
//   // console.log("Hello : ", <Html>{progress} % loaded</Html>);
//   return <Html>{progress} % loaded</Html>;
// }

const Diorama = ({ width = "100%", height = "100%" }) => {
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
        <Suspense fallback={null}>
          <Environment
            background={"only"}
            files={process.env.PUBLIC_URL + "/textures/bg.hdr"}
          />
          <Environment
            background={false}
            files={process.env.PUBLIC_URL + "/textures/envmap.hdr"}
          />

          <PerspectiveCamera
            makeDefault
            fov={50}
            position={[-1.75, 10.85, 20.35]}
          />
          <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />

          <Float speed={0} rotationIntensity={0.6} floatIntensity={0.6}>
            <primitive object={mesh} />
            <spotLight
              penumbra={1}
              distance={500}
              angle={60.65}
              attenuation={1}
              anglePower={3}
              intensity={0.3}
              color={lightColor}
              position={[1.19, 10.85, -4.45]}
              target-position={[0, 0, -1]}
            />

            <Portal />
            <FloatingIsland />
            <Trees />
            <Rocks />
            <Grass />
            <SceneParticles />
            <Words />
            {/* <Tiger /> */}
            {/* <Girl /> */}
          </Float>

          <FloatingRocks />

          <EffectComposer stencilBuffer={true}>
            <DepthOfField
              focusDistance={0.002}
              focalLength={0.085}
              bokehScale={7}
            />
            <HueSaturation hue={0} saturation={-0.15} />
            <BrightnessContrast brightness={0.0} contrast={0.035} />
            <ChromaticAberration
              radialModulation={true}
              offset={[0.00175, 0.00175]}
            />
            <GodRays
              sun={mesh}
              blendFunction={BlendFunction.Screen}
              samples={40}
              density={0.97}
              decay={0.97}
              weight={0.6}
              exposure={0.3}
              clampMax={1}
              width={Resizer.AUTO_SIZE}
              height={Resizer.AUTO_SIZE}
              kernelSize={KernelSize.SMALL}
              blur={true}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Diorama;
