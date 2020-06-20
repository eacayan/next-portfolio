import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import lerp from 'lerp';

function Plane() {
  const { camera } = useThree();
  const ref = useRef();
  useFrame(() => {
    ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.01);
    camera.position.z = lerp(camera.position.z, 7, 0.1);
    camera.updateProjectionMatrix();
  });
  return (
    <mesh ref={ref} position={[0, 0, 6]} scale={[100, 100, 1]}>
      <planeBufferGeometry attach='geometry' />
      <meshBasicMaterial
        attach='material'
        color='#0e0e0f'
        transparent
        opacity={1}
      />
    </mesh>
  );
}

function Polygon({ emissive, text, ...props }) {
  return (
    <mesh {...props}>
      <icosahedronBufferGeometry attach='geometry' />
      <meshStandardMaterial
        attach='material'
        roughness={0.85}
        emissive={emissive}
        wireframe
      />
      {/* idadagdag ko ba to huhu */}
      {/* <HTML scaleFactor={6.5}>
        <div class="text">{text}</div>
      </HTML> */}
    </mesh>
  );
}

function Group() {
  useFrame(() => {
    const rotation = groupRef.current.rotation;
    rotation.x += 0.02;
    rotation.y += 0.01;
    rotation.z += 0.01;
  });
  const groupRef = useRef();

  return (
    <>
      <group ref={groupRef}>
        <Polygon emissive='#FF8F00' position={[1, 1, 1]} />;
        <Polygon emissive='#e91e63' position={[1, 0, -2]} />;
        <Polygon emissive='#23c1f2' position={[-1, 0, 2]} />;
        <Polygon emissive='#FFC107' position={[-1, 2, -2]} />
        <Polygon emissive='#AFB42B' position={[-3, 0, 0]} />
        <Polygon emissive='#8E24AA' position={[-1, -3, -2]} />
      </group>
    </>
  );
}

const LandingAnimation = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 70] }}>
        <pointLight color='#90A4AE' position={[2, 2, 2]} />
        <Group />
        <Plane />
      </Canvas>
    </>
  );
};

export default LandingAnimation;
