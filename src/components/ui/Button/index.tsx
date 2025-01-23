import { BsDot } from "react-icons/bs";
import { GoDot } from "react-icons/go";
import styled, { keyframes } from "styled-components";

interface IProps {
  text: string;
  isBeam: boolean;
}

function Button({ text, isBeam = false }: IProps) {
  return (
    <>
      <ButtonS>
        {isBeam && (
          <span>
            <Dot>
              <HeartBeat />
            </Dot>
          </span>
        )}

        {text}
      </ButtonS>
    </>
  );
}

const ButtonS = styled.button`
  position: absolute;
  bottom: var(--sz-2);
  padding: var(--sz-1) var(--sz-2);
  border-radius: var(--sz-1);
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(p) => p.theme.neutralDark};
  display: flex;
  gap: 0.6rem;
  font-size: var(--fz-1);
`;

const Blink = keyframes`
  100% {
    scale: 2;
    opacity: 0;
  }
`;

const Dot = styled.div`
  position: relative;
  display: inline-block;
  aspect-ratio: 1/1;
  width: 0.6rem;
  background-color: ${(p) => p.theme.primary};
  border-radius: 50%;
`;

const HeartBeat = styled.div`
  position: absolute;
  inset: 0;
  display: inline-block;
  aspect-ratio: 1/1;
  width: 0.6rem;
  background-color: ${(p) => p.theme.primary};
  border-radius: 50%;
  animation: ${Blink} 1s ease infinite forwards;
`;

export { Button };
