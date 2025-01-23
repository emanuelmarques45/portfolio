// @ts-nocheck
import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { useRef } from "react";
import gsap from "gsap";

function Target(props: MeshProps) {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );
  const targetRef = useRef(null);

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <>
      <mesh
        {...props}
        ref={targetRef}
        rotation={[0, Math.PI / 3.5, 0]}
        scale={1.5}
      >
        <primitive object={scene} />
      </mesh>
    </>
  );
}

export { Target };
