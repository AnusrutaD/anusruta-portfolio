import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const AvatarCanvas = () => {
  return (
    <div className="h-64 w-full md:h-80">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 3]} intensity={1} />

        <Sphere args={[1.2, 64, 64]} scale={1.3}>
          <MeshDistortMaterial
            color="#6366F1"
            roughness={0}
            metalness={0.1}
            distort={0.4}
            speed={1.8}
          />
        </Sphere>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default AvatarCanvas;
