import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { Color, DoubleSide } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Grass = () => {
  const grassGltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/grass.glb"
  );

  useEffect(() => {
    if (!grassGltf) return;

    let mesh = grassGltf.scene.children[0];
    mesh.material.alphaToCoverage = true;
    mesh.material.transparent = true;
    mesh.material.map = grassGltf.scene.children[0].material.emissiveMap;
    mesh.material.emissive = new Color(0.5, 0.5, 0.5);
    mesh.material.side = DoubleSide;
  }, [grassGltf]);
  return <primitive object={grassGltf.scene} />;
};

export default Grass;
