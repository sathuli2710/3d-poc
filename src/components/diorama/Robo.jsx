import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Color } from "three";

const Robo = () => {
  let lightColor = new Color(2, 13, 0.1);

  const roboGltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/robo.glb"
  );
  useEffect(() => {
    let mesh = roboGltf.scene.children[0];
    mesh.scale.set(0.01, 0.01, 0.01);
    mesh.position.set(-2, 5.4, 4.9);
    console.log(mesh);
  }, [roboGltf]);
  return (
    <>
      <spotLight
        penumbra={1}
        distance={10}
        angle={20.34}
        attenuation={1}
        anglePower={3}
        intensity={0.3}
        color={lightColor}
        position={[1.19, 10.85, -4.45]}
        target-position={[-0.92, 5.4, 2.1]}
      />
      <primitive object={roboGltf.scene} />
    </>
  );
};

export default Robo;
