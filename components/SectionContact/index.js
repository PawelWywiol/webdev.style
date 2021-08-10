import {
  Section,
  Sides,
  Side,
  EmailProtector,
  Socials,
  ClickEventWrapper,
} from "../index";

const Contact = () => {
  return (
    <Section id="contact">
      <h2>Przyszedł Ci do głowy ciekawy projekt?</h2>
      <Sides>
        <Side>
          <p>
            Zastanawiasz się nad jego realizacją? Szukasz pomysłów, rozwiązań,
            inspiracji, podpowiedzi. Może masz jeszcze jakieś pytania do mnie
            lub po prostu chcesz się przywitać?
          </p>
          <h3>
            <span>Napisz do mnie : </span>
            <ClickEventWrapper
              eventname="footerEmailClicked"
              component={EmailProtector}
              email={["kontakt", "webdev.style"]}
            />
          </h3>
          <Socials />
        </Side>
        <Side></Side>
      </Sides>
    </Section>
  );
};

export default Contact;
