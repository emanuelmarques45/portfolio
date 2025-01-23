import { PerspectiveCamera } from "@react-three/drei";
import { PiHandWavingFill } from "react-icons/pi";
import { HackerRoom } from "../../ui/HackerRoom";
import { CanvasLoader } from "../../ui/CanvasLoader";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { sizes } from "../../../constants/devices";
import { Target } from "../../ui/Target";
import { Leva, useControls } from "leva";
import * as S from "./style";
import { ReactLogo } from "../../ui/ReactLogo";
import { Cube } from "../../ui/Cube";
import { Rings } from "../../ui/Rings";
import { Canvas } from "@react-three/fiber";
import { HeroCamera } from "../../ui/HeroCamera";
import { Button } from "../../ui/Button";

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: sizes.mobileL });
  const controls = useControls({
    positionX: {
      value: 2.5,
      min: -100,
      max: 100,
    },
    positionY: {
      value: 2.5,
      min: -100,
      max: 100,
    },
    positionZ: {
      value: 2.5,
      min: -100,
      max: 100,
    },
    rotationX: {
      value: 2.5,
      min: -100,
      max: 100,
      step: 0.05,
    },
    rotationY: {
      value: 2.5,
      min: -100,
      max: 100,
      step: 0.05,
    },
    rotationZ: {
      value: 2.5,
      min: -100,
      max: 100,
      step: 0.05,
    },
    scale: {
      value: 2.5,
      min: -100,
      max: 100,
      step: 0.05,
    },
  });

  // position={[
  //   controls.positionX,
  //   controls.positionY,
  //   controls.positionZ,
  // ]}
  // rotation={[
  //   controls.rotationX,
  //   controls.rotationY,
  //   controls.rotationZ,
  // ]}

  return (
    <>
      <S.Content>
        <S.Name>
          Hi, I am Emanuel{" "}
          <span>
            <S.IconHandContainer>
              <PiHandWavingFill size={32} />
            </S.IconHandContainer>
          </span>
        </S.Name>
        <S.Title>Building Products & Brands</S.Title>
        <Leva hidden />
      </S.Content>
      <S.CanvasContainer>
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <group scale={0.9}>
              <Target position={[-11, -8, 0]} />
              <ReactLogo position={[15, 3, 0]} rotation={[19.35, 1.6, 11.85]} />
              <Cube position={[9, -5.5, 0]} rotation={[2.5, 2.5, 2.5]} />
              <Rings position={[-25, 7, 10]} />
            </group>
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={[0.25, -5.5, 0]}
                rotation={[0.2, -Math.PI, 0]}
                scale={0.07}
              />
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </S.CanvasContainer>
      <Button text="Let's work together" isBeam />
    </>
  );
}

export { Hero };
