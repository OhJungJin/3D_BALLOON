"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { THREE_CONSTANTS } from "@/constants";
import { SpinningBoxProps } from "@/types";

function SpinningBox({ speed = 1, color = "#4f46e5" }: SpinningBoxProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * THREE_CONSTANTS.ANIMATION.BOX_ROTATION_SPEED * speed;
    meshRef.current.rotation.y += delta * THREE_CONSTANTS.ANIMATION.BOX_ROTATION_SPEED_Y * speed;
  });
  
  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full">
      <Canvas 
        shadows 
        camera={{ 
          position: THREE_CONSTANTS.CAMERA.POSITION, 
          fov: THREE_CONSTANTS.CAMERA.FOV,
          near: THREE_CONSTANTS.CAMERA.NEAR,
          far: THREE_CONSTANTS.CAMERA.FAR
        }}
      >
        <color attach="background" args={[0.97, 0.97, 0.97]} />
        <ambientLight intensity={THREE_CONSTANTS.LIGHTING.AMBIENT_INTENSITY} />
        <directionalLight
          position={THREE_CONSTANTS.LIGHTING.DIRECTIONAL_POSITION}
          intensity={THREE_CONSTANTS.LIGHTING.DIRECTIONAL_INTENSITY}
          castShadow
          shadow-mapSize-width={THREE_CONSTANTS.SHADOWS.MAP_SIZE}
          shadow-mapSize-height={THREE_CONSTANTS.SHADOWS.MAP_SIZE}
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
