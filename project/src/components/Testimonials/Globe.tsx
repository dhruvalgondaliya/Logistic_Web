import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, useTexture, Html } from "@react-three/drei";
import * as THREE from "three";
import { MapPin } from "lucide-react";

interface CountryMarker {
  name: string;
  lat: number;
  lng: number;
  description: string;
}

const markers: CountryMarker[] = [
  { name: "USA", lat: 37.0902, lng: -95.7129, description: "Major economic and technological hub" },
  { name: "UK", lat: 55.3781, lng: -3.4360, description: "Historic maritime nation" },
  { name: "Germany", lat: 51.1657, lng: 10.4515, description: "Leading European industrial power" },
  { name: "Japan", lat: 36.2048, lng: 138.2529, description: "Advanced technology and rich culture" },
  { name: "India", lat: 20.5937, lng: 78.9629, description: "Rich heritage and emerging tech hub" },
];

const latLngToVector3 = (lat: number, lng: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

const LocationMarker = ({
  position,
  onClick,
}: {
  position: THREE.Vector3;
  onClick: () => void;
}) => {
  return (
      <group position={position}>
        <Html
          center
          style={{
            transition: "all 0.2s ease-in-out",
            cursor: "pointer",
          }}
          onClick={onClick}
        >
          <div className="relative group -z-10">
            <div className="w-8 h-8 flex items-center justify-center text-teal-600 transition-colors duration-200 -z-10">
              <MapPin className="w-full h-full " />
            </div>
          </div>
        </Html>
      </group>
  );
};

export default function Globe({ onMarkerClick }: { onMarkerClick: (info: CountryMarker) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const radius = 2;

  const earthTexture = useTexture(
    "https://upload.wikimedia.org/wikipedia/commons/6/6f/Earth_Eastern_Hemisphere.jpg"
  );

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      {/* Earth Sphere */}
      <Sphere ref={meshRef} args={[radius, 64, 64]}>
        <meshStandardMaterial
          map={earthTexture}
          bumpScale={0.05}
          roughness={1}
          metalness={0}
        />
      </Sphere>

      {/* Country Markers */}
      {markers.map((marker) => {
        const position = latLngToVector3(marker.lat, marker.lng, radius + 0.05);
        return (
          <LocationMarker
            key={marker.name}
            position={position}
            onClick={() => onMarkerClick(marker)}
          />
        );
      })}

      {/* Ambient and Key Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={1} />
    </group>
  );
}
