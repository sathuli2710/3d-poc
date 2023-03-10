import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Tiger = () => {
  const tigerGltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL +
      "models/whitetiger（sketchfabへアップロードしたデータ）.glb"
  );
  useEffect(() => {
    let mesh = tigerGltf.scene.children[0];
    mesh.scale.set(1.2, 1.2, 1.2);
    mesh.position.set(2.79, 5.9, 2.9);
    mesh.rotation.set(1.29, 0.01, 2.3);
  }, [tigerGltf]);
  return <primitive object={tigerGltf.scene} />;
};

export default Tiger;
