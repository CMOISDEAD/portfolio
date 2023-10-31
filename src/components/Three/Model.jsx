import { Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from "lamina";
import Noodles from "./Noodles";

export default function Model() {
  return (
    <div className="fixed w-full h-full">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
        <Bg />
        <Suspense fallback={null}>
          <Noodles />
          <Rig />
          <Caption size={8} y={0}>
            CAMILO DAVILA
          </Caption>
          <Caption size={20} y={-0.1}>
            FRONTEND DEVELOPER
          </Caption>
        </Suspense>
      </Canvas>
    </div>
  );
}

function Caption({ children, size = 8, y }) {
  const { width } = useThree((state) => state.viewport);

  return (
    <Text
      position={[0, y * width, -2]}
      lineHeight={0.8}
      font="/Ki-Medium.ttf"
      fontSize={width / size}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
    >
      {children}
    </Text>
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
          colorB="red"
          colorA="skyblue"
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
          alpha={0.2}
        />
      </LayerMaterial>
    </mesh>
  );
}
