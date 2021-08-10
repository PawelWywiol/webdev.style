import styled from "@emotion/styled";

import { animToTop, animFadeIn } from "../../styles/animations";

import Logo from "../Logo";

const Left = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 33vw;
  height: 100vh;
  background-color: var(--dark-background);
  color: var(--dark-color);
  z-index: 101;

  animation-fill-mode: forwards;
  animation-duration: 0.6s;
  animation-delay: 2s;
  animation-name: ${animToTop};
  will-change: transform;

  @media (max-width: 760px) {
    width: 20vw;
  }
`;

const Content = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 32vw;
  width: 35vw;
  height: 100vh;
  background-color: var(--dark-background);
  color: var(--dark-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;

  animation-fill-mode: forwards;
  animation-duration: 0.6s;
  animation-delay: 2.2s;
  animation-name: ${animToTop};

  @media (max-width: 760px) {
    width: 60vw;
    left: 20vw;
  }

  h2 {
    opacity: 0;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: 0.4s;
    animation-name: ${animFadeIn};
  }
  p {
    opacity: 0;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: 0.4s;
    animation-name: ${animFadeIn};
  }
`;

const Right = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  width: 33vw;
  height: 100vh;
  background-color: var(--dark-background);
  color: var(--dark-color);
  z-index: 101;

  @media (max-width: 760px) {
    width: 20vw;
  }

  animation-fill-mode: forwards;
  animation-duration: 0.6s;
  animation-delay: 2.4s;
  animation-name: ${animToTop};
  will-change: transform;
`;

const Wrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;

  animation-fill-mode: forwards;
  animation-duration: 0.1s;
  animation-delay: 3s;
  animation-name: ${animToTop};
`;

const Title = styled.div`
  text-align: center;
`;

const Start = () => {
  return (
    <Wrapper>
      <Left />
      <Right />
      <Content>
        <Title>
          <Logo />
          <p>landingi, strony, aplikacje, gry, narzędzia</p>
        </Title>
      </Content>
    </Wrapper>
  );
};

export default Start;
