import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { motion } from 'framer-motion-3d'
import * as THREE from 'three'

const ModelViewer = ({ modelPath }) => {
  const geometry = useLoader(STLLoader, modelPath)
  
  geometry.computeVertexNormals() // ✅ Ensures correct lighting/shading
  geometry.computeBoundingBox() 

  const size = geometry.boundingBox.getSize(new THREE.Vector3())
  const scaleFactor = 1 / Math.max(size.x, size.y, size.z) // ✅ Fix size issue

  return (
    <Canvas camera={{ position: [0, -5, 0], fov: 17 }}>

      
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, -5, -5]} intensity={2} />

      <motion.mesh
        geometry={geometry}
        scale={[scaleFactor, scaleFactor, scaleFactor]} // ✅ Fix size issue
        rotation={[0, 0, 0]}
        animate={{ rotateZ: [0,( 2 * Math.PI)/5] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear",  repeatType: "reverse",}}
      >
        <meshStandardMaterial 
          attach="material" 
          color="#8aaaaa" // ✅ Keep color 
          metalness={0.5} 
          // roughness={.5} 
        />
      </motion.mesh>
    </Canvas>
  )
}

export default ModelViewer
