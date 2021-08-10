import SmoothScroll from "../components/SmoothScroll";
import Head from "../components/PageHead";
import Start from "../components/SectionStart";
import Section404 from "../components/Section404";
import Contact from "../components/SectionContact";

export default function Home() {
  return (
    <>
      <Head
        title={"Paweł Wywioł - web developer"}
        description={
          "Tworzę, utrzymuję i rozwijam wszelkiego rodzaju landingi, strony, aplikacje, gry, narzędzia."
        }
        url={"https://webdev.style/"}
        cover={"https://webdev.style/assets/images/cover.png"}
        creator={"Paweł Wywioł"}
        keywords={
          "strony internetowe, landingi, mailingi, aplikacje, gry, react, javascript, front end developer, back end developer, web developer, Paweł Wywioł"
        }
      />
      <Start />
      <SmoothScroll>
        <Section404 />
        <Contact />
      </SmoothScroll>
    </>
  );
}
