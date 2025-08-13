import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

import Computer from "../components/Models/Computer-optimized";

const AnimatedComputer = () => {
  const computerRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (computerRef.current) {
      // Rotate gently left and right using sine
      computerRef.current.rotation.y = Math.sin(t * 0.5) * 0.3; // rotate ±0.3 radians

      // Gentle up-and-down float
      computerRef.current.position.y = -1.49 + Math.sin(t * 1.5) * 0.05;
    }
  });

  return (
    <group ref={computerRef} scale={0.03} position={[0, -1.49, -2]} castShadow>
      <Computer />
    </group>
  );
};

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      <ambientLight intensity={0.5} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Ground plane */}
      <mesh receiveShadow position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#a46b2d" />
      </mesh>

      {/* Animated computer */}
      <AnimatedComputer />
    </Canvas>
  );
};

export default ContactExperience;
