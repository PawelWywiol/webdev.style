import Link from "next/link";

import styled from "@emotion/styled";

import { Section, Sides, Side, EmailProtector } from "../index";

const Styled404 = styled.div`
  font-size: 16rem;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  @media (max-width: 760px) {
    font-size: 11rem;
  }
`;

const About = () => (
  <Section fullscreen>
    <Sides>
      <Side>
        <Styled404>404</Styled404>
      </Side>
      <Side>
        <h2>Ups! Niestety, to czego szukasz jeszcze tu nie ma!</h2>
        <p>
          <span>Ale może być! </span>
          <EmailProtector
            email={["kontakt", "webdev.style"]}
            label={"Napisz co Ci chodzi po głowie!"}
          />
        </p>
        <Link href="/">
          <a>albo wróć na stronę główną</a>
        </Link>
      </Side>
    </Sides>
  </Section>
);

export default About;
