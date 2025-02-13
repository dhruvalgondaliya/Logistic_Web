import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

const EarthTextureURL =
  "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg";

function RotatingEarth({ isDragging }) {
  const earthRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(EarthTextureURL);

  useFrame(() => {
    if (earthRef.current && !isDragging) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={earthRef} args={[1, 64, 64]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

export default function EarthScene() {
  const [isDragging, setIsDragging] = useState(false);
  const controlsRef = useRef(null);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        minWidth: "250px",
        height: "auto",
        aspectRatio: "1 / 1",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3] }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <RotatingEarth isDragging={isDragging} />
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          onStart={() => setIsDragging(true)}
          onEnd={() => setIsDragging(false)}
        />
      </Canvas>
    </div>
  );
}
