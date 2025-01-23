import styled, { keyframes } from "styled-components";

const WaveHand = keyframes`
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(55deg);
    }
`;

const Content = styled.div`
  padding: var(--sz-5) 0;
  text-align: center;
`;

const CanvasContainer = styled.div`
  position: absolute;
  height: 100svh;
  width: 100vw;
  inset: 0;
`;

const IconHandContainer = styled.div`
  display: inline-block;
  animation: ${WaveHand} 700ms cubic-bezier(0.4, 0, 0.6, 1) infinite alternate;
`;

const Name = styled.h2`
  font-weight: 400;
  font-size: var(--fz-3);
`;

const Title = styled.h2`
  background-image: linear-gradient(
    ${(p) => p.theme.primary},
    ${(p) => p.theme.secondaryLight}
  );
  background-clip: text;
  color: transparent;
  font-size: var(--fz-5);
`;

export { WaveHand, Content, IconHandContainer, Name, Title, CanvasContainer };
