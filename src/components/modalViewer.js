import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { motion } from 'framer-motion-3d';

const ModelViewer = ({ modelPath }) => {
  const geometry = useLoader(STLLoader, modelPath);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Stage>
        <motion.mesh
          geometry={geometry}
          animate={{
            rotateZ: Math.PI * 2, // Full rotation on the Y-axis
          }}
          transition={{
            repeat: Infinity, // Infinite loop
            duration: 10, // 10 seconds for one full rotation
            ease: "linear", // Smooth rotation
          }}
        >
          <meshStandardMaterial color="#2596be" />
        </motion.mesh>
      </Stage>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
