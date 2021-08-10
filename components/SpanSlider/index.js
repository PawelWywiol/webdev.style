import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import useCounter from "../../hooks/useCounter";
import useDimensions from "../../hooks/useDimensions";

const showAnimation = keyframes`
  from  {
    transform: rotateX(-90deg) translate3D(0,-100%,0);
    opacity: 0;
  }

  to {
    transform: rotateX(0deg) translate3D(0,0,0);
    opacity: 1;
  }
`;

const hideAnimation = keyframes`
  from  {
    transform: rotateX(0deg) translate3D(0,0,0);
    opacity: 1;
  }

  to {
    transform: rotateX(90deg) translate3D(0,100%,0);
    opacity: 0;
  }
`;

const Wrapper = styled.span`
  position: relative;
`;
const Content = styled.span`
  display: inline-block;
`;
const WordWrapper = styled.span`
  position: ${(props) => (props.longest ? "relative" : "absolute")};
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  perspective: 1000rem;
  color: var(--primary);
  white-space: nowrap;
`;
const WordContent = styled.span`
  display: inline-block;
  position: relative;

  transform: rotateX(-90deg) translate3D(0, -100%, 0);
  opacity: 0;

  animation: ${hideAnimation} ${(props) => `${props.delay || 1500}ms`};
  animation: ${(props) => (props.show ? showAnimation : hideAnimation)} ${(props) => `${props.delay || 1500}ms`};
  animation-fill-mode: forwards;
`;

const SpanSlider = ({ words, delay }) => {
  const slide = useCounter({ max: (words || []).length, delay: delay || 1500 });
  const [ref, dimm] = useDimensions();

  return (
    <Wrapper>
      <Content ref={ref}>
        {(words || []).map((word, key) => (
          <WordWrapper key={key} longest={dimm.children.max.widthIndex === key}>
            <WordContent delay={delay} show={key === slide}>
              {word}
            </WordContent>
          </WordWrapper>
        ))}
      </Content>
    </Wrapper>
  );
};

export default SpanSlider;
