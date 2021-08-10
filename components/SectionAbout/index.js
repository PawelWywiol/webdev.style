import styled from "@emotion/styled";

import { Section, Sides, Side, Button, ClickEventWrapper } from "../index";

const StyledContent = styled.div``;

const About = () => (
  <Section id="about" light>
    <Sides>
      <Side>
        <StyledContent>
          <h2>
            Szukasz rzetelnego wsparcia w realizacji i&nbsp;rozwoju swoich
            projektów?
          </h2>

          <p>
            Masz mnóstwo pomysłów, które tylko czekają na przeniesienie do
            świata online. Pragniesz je wszystkie zrealizować. Niestety,
            specjalizujesz się w&nbsp;innej dziedzinie lub po prostu chcesz się
            skupić na pozostałych swoich celach.
          </p>
          <p>
            Wypatrując za pomocą szybko okazuje się, że duże firmy wymagają
            czasem zbyt dużych budżetów lub narzucają Ci swoje pomysły,
            a&nbsp;początkujący freelancerzy nie zawsze dysponują odpowiednią
            wiedzę lub nie mają wystarczającego zapału przy realizacji Twoich
            wizji.
          </p>

          <h3>Nie rezygnuj ze swoich planów.</h3>

          <p>Współpracując ze mną, możesz liczyć na:</p>
          <ul>
            <li>
              kilkunastoletnie doświadczenie praktyczne przy tworzeniu różnego
              rodzaju projektów webowych
            </li>
            <li>
              szeroką wiedzę teoretyczną z&nbsp;zakresu ich planowania, budowy,
              uruchamiania
            </li>
            <li>sumienność, rzetelność i&nbsp;profesjonalizm</li>
            <li>
              wsparcie także po zakończeniu projektu, przy jego utrzymaniu
              i&nbsp;rozwijaniu. Zawsze pozostaję do dyspozycji i&nbsp;służę
              pomocą.
            </li>
          </ul>
          <div>
            <ClickEventWrapper
              component={Button}
              eventname={"clickOnAboutButton"}
              aria-label={"Zacznijmy współpracę"}
              href="#contact"
            >
              {"Zacznijmy współpracę"}
            </ClickEventWrapper>
          </div>
        </StyledContent>
      </Side>
    </Sides>
  </Section>
);

export default About;
