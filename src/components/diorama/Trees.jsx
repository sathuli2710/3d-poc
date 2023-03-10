import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Trees = () => {
  const treeGltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/trees.glb"
  );
  useEffect(() => {
    if (!treeGltf) return;

    let mesh = treeGltf.scene.children[0];
    mesh.material.envMapIntensity = 2.5;
  });
  return <primitive object={treeGltf.scene} />;
};

export default Trees;
