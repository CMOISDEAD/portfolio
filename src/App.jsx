import React from "react";
import * as THREE from "three";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { LayerMaterial, Depth, Noise } from "lamina";
import Noodles from "./components/Noodles";

export default function App() {
  return (
    <div class="fixed w-full h-full">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
        <Bg />
        <Suspense fallback={null}>
          <Noodles />
          <Rig />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    );
  });
}

function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorB="darkgray"
          colorA="black"
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
        <Noise
          mapping="local"
          type="white"
          scale={1000}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.5}
        />
      </LayerMaterial>
    </mesh>
  );
}
