import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Home = () => {
  const homeGltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/abandoned_room.glb"
  );
  useEffect(() => {
    let mesh = homeGltf.scene.children[0];
    mesh.scale.set(5, 5, 5);
    mesh.position.set(10, -10, -35);
  }, [homeGltf]);
  return <primitive object={homeGltf.scene} />;
};

export default Home;
