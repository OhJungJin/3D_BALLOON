"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function SpinningBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.8;
  });
  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4f46e5" roughness={0.5} metalness={0.1} />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [3, 2, 4], fov: 60 }}>
        <color attach="background" args={[0.97, 0.97, 0.97]} />
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <group position={[0, 0, 0]}>
          <SpinningBox />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <shadowMaterial transparent opacity={0.25} />
          </mesh>
        </group>
        <OrbitControls enableDamping makeDefault />
      </Canvas>
    </div>
  );
}
