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
import { calculateSizes } from "../../../constants";

function Hero() {
  const isSmall = useMediaQuery({ maxWidth: sizes.mobileL });
  const isMobile = useMediaQuery({ maxWidth: sizes.tablet });
  const isTablet = useMediaQuery({
    minWidth: sizes.tablet,
    maxWidth: sizes.laptop,
  });

  const positions = calculateSizes(isSmall, isMobile, isTablet);

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
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={positions.deskPosition}
                rotation={[0, Math.PI, 0]}
                scale={positions.deskScale}
              />
            </HeroCamera>

            <group scale={0.9}>
              <Target position={positions.targetPosition} />
              <ReactLogo position={positions.reactLogoPosition} />
              <Cube position={positions.cubePosition} />
              <Rings position={positions.ringPosition} />
            </group>

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
