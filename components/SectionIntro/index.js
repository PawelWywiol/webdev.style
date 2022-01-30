import styled from "@emotion/styled";

import Logo from "../Logo";

import {
  Section,
  Sides,
  Side,
  SpanSlider,
  Button,
  ClickEventWrapper,
} from "../index";

const Title = styled.h1`
  z-index: 10;
  margin-bottom: 0;
`;

const Intro = () => {
  return (
    <Section id="intro" fullscreen next={"Dowiedz się więcej"}>
      <Sides>
        <Side>
          <Title>
            Cześć! Nazywam się Paweł. Jestem web developerem. Tworzę, utrzymuję,
            rozwijam wszelkiego rodzaju{" "}
            <SpanSlider
              words={[
                "landingi.",
                "strony.",
                "aplikacje.",
                "gry.",
                "narzędzia.",
              ]}
            />
          </Title>
          <div>
            <ClickEventWrapper
              component={Button}
              eventname={"clickOnIntroButton"}
              aria-label="Napisz do mnie"
              href="#contact"
            >
              Napisz do mnie
            </ClickEventWrapper>
          </div>
        </Side>
        <Side>
          <Logo />
        </Side>
      </Sides>
    </Section>
  );
};

export default Intro;
