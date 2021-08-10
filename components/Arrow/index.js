import styled from "@emotion/styled";

const ArrowContent = styled.span`
  font-size: 0.8rem;
  pointer-events: none;
`;
const ArrowIcon = styled.span`
  display: inline-block;
  position: relative;
  width: 3rem;
  height: 0.125rem;
  background: var(--default-color);
  opacity: 0.6;
  &:after,
  &:before {
    content: " ";
    display: inline-block;
    position: absolute;
    left: ${(props) => (props.left ? 0 : "auto")};
    right: ${(props) => (props.left ? "auto" : 0)};
    top: 50%;
    width: 0.5rem;
    height: 0.125rem;
    background: var(--default-color);
    transform: rotateZ(45deg) translate3D(0, -50%, 0);
    transform-origin: ${(props) =>
      props.left ? "center left" : "center right"};
  }
  &:after {
    transform: rotateZ(-45deg) translate3D(0.125rem, -50%, 0);
  }
`;
const ArrowWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  position: relative;
  transform-origin: right top;
  transform: ${(props) => (props.down ? "rotateZ(90deg)" : "none")};
`;

const Arrow = ({ children, left, down }) => (
  <ArrowWrapper down={down}>
    {left ? <ArrowIcon left={left} /> : null}
    {children && <ArrowContent>{children}</ArrowContent>}
    {!left ? <ArrowIcon /> : null}
  </ArrowWrapper>
);
export default Arrow;
