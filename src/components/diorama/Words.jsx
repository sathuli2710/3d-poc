import { Text3D } from "@react-three/drei";
import React from "react";

const Words = () => {
  return (
    <>
      <Text3D
        font={process.env.PUBLIC_URL + "fonts/Roboto_Regular.json"}
        size={0.575}
        height={0.065}
        curveSegments={12}
        position={[2.1, 6.2, 0.6]}
        rotation={[0, -0.2, -0.06]}
      >
        Portal
        <meshStandardMaterial color={[1, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
      </Text3D>
      <Text3D
        font={process.env.PUBLIC_URL + "fonts/Roboto_Regular.json"}
        size={0.275}
        height={0.065}
        curveSegments={12}
        position={[2.35, 5.7, 0.6]}
        rotation={[0, -0.2, -0.05]}
      >
        Ultraman
        <meshStandardMaterial color={[1, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
      </Text3D>
    </>
  );
};

export default Words;
