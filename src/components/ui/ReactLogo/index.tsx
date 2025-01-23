import { Float, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

function ReactLogo(props: GroupProps) {
  const { nodes, materials } = useGLTF("models/react-logo.glb");
  return (
    <Float floatIntensity={1}>
      <group {...props} scale={0.007}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </Float>
  );
}

useGLTF.preload("models/react-logo.glb");

export { ReactLogo };
