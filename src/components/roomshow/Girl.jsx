import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Color } from "three";

const Girl = ({ selectedPreset = "pos1" }) => {
  console.log("Position is : ", selectedPreset);
  let lightColor = new Color(2, 13, 0.1);
  const scalePresets = {
    pos1: [0.065, 0.065, 0.065],
    pos2: [0.07, 0.07, 0.07],
    pos3: [0.05, 0.05, 0.05],
  };

  const positionPresets = {
    pos1: [-0.92, -9.4, -20.1],
    pos2: [13.92, -9.4, -40.1],
    pos3: [24.92, -9.4, -3.0],
  };

  const rotationPresets = {
    pos1: [0.2, 3.1, 0],
    pos2: [0.2, 3.1, 0],
    pos3: [0.2, 3.1, 0],
  };

  const girlGltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/sithle_02_8K.glb"
  );
  useEffect(() => {
    let mesh = girlGltf.scene.children[0];
    const selectedScale = scalePresets[selectedPreset];
    const selectedPosition = positionPresets[selectedPreset];
    const selectedRotation = rotationPresets[selectedPreset];
    mesh.scale.set(selectedScale[0], selectedScale[1], selectedScale[2]);
    mesh.position.set(
      selectedPosition[0],
      selectedPosition[1],
      selectedPosition[2]
    );
    mesh.rotation.set(
      selectedRotation[0],
      selectedRotation[1],
      selectedRotation[2]
    );
  }, [girlGltf, selectedPreset]);
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
      <primitive object={girlGltf.scene} />
    </>
  );
};

export default Girl;
