const questions = [
  {
    q: "Jakich informacji potrzebujesz aby rozpocząć pracę?",
    a: (
      <>
        Napisz mi coś o sobie, swojej firmie, swoim pomyśle, o tym co mógłbym
        dla Ciebie zrobić, jaki jest cel Twojego projektu, jaki masz budżet na
        to przeznaczony i czy masz jakiś deadline? Na podstawie takich
        informacji mógłbym przedstawić Ci swoją ofertę. Zaproponuję co, jak i w
        jakiej formie mógłbym dla Ciebie zrobić. Po ustaleniu szczegółów naszej
        współpracy i ich akceptacji będę mógł rozpocząć pracę.
      </>
    ),
  },
  {
    q: "Czym konkretnie się zajmujesz?",
    a: (
      <>
        Zamieniam pomysły Twoje i Twoich klientów na realne projekty webowe. Do
        tej pory brałem udział między innymi przy budowie różnego rodzaju
        <ul>
          <li>landingów promujących produkty klientówskie</li>
          <li>
            landingów i aplikacji konkursowych (quiz, wykreślanka, memory itd)
          </li>
          <li>
            stron internetowych, statycznych jak i opartych na frameworkach typu
            CMS
          </li>
          <li>szablonów i pluginów dla Wordpressa</li>
          <li>szablonów dla Wordpressa opartych na blokach Gutenberga</li>
          <li>
            aplikacji graficznych typu edytory kompozycji (przykładowo edytory
            pocztówek online)
          </li>
          <li>gier webowych 2D i 3D</li>
          <li>konfiguratorów produktów klientowskich</li>
          <li>narzędzia typu CMS</li>
          <li>narzędzia typu CRM</li>
          <li>
            narzędzia bazodanowe służące do zarządzania magazynami produktów (np
            dla wypożyczalni)
          </li>
        </ul>
      </>
    ),
  },

  {
    q: "Ile kosztowałoby przygotowania np strony internetowej?",
    a: (
      <>
        Niestety jest to zależne od samego projektu. Od jego typu, wielkości,
        czasochłonności. Bez ustalenia szczegółów ciężko byłoby określić koszt
        produkcji. Opisując swój projekt zaproponuj budżet. Razem ustalimy w
        jaki sposób możemy zrealizować Twój pomysł.
      </>
    ),
  },
  {
    q: "Jak długo trwałoby przygotowanie takiej strony?",
    a: (
      <>
        W tym przypadku to także cecha indywidualna. Czas pracy za każdym razem
        jest inny i również jest zależny od typu projekty i jego wielkości, a
        często też od akceptacji przez klienta kolejnych kroków produkcji.
        Uogólniając średni czas przygotowania strony to mniej więcej dwa
        tygodnie na przygotowanie projektu i dwa tygodnie na jego realizację.
        Bardziej rozbudowane strony czasami zajmują nawet dwa razy więcej czasu.
      </>
    ),
  },
  {
    q: "Od jak dawna programujesz?",
    a: <>Mniej więcej od 2006 roku jako freelancer. Od 2013 roku zawodowo.</>,
  },
  {
    q: "Jakich technologii używasz?",
    a: (
      <>
        {[
          "JS",
          "ECMAScript",
          "React",
          "React Hooks",
          "Redux",
          "React Router",
          "Context API",
          "CRA",
          "NextJS",
          "CSS",
          "SCSS",
          "Styled-components",
          "EmotionCSS",
          "Material Design",
          "Materialize",
          "Ionic",
          "PHP",
          "Fat-Free Framework",
          "Siler",
          "GraphQL PHP",
          "ReadBean",
          "Twig",
          "Phug",
          "NodeJS",
          "Wordpress",
          "Wordpress Theme",
          "Wordpress Plugins",
          "Wordpress Guttenberg Blocks",
          "Composer",
          "Parcel",
          "Webpack",
          "GIT",
          "WSL",
          "Docker",
          "GSAP",
          "AnimeJS",
          "PixiJS",
          "FabricJS",
          "BabylonJS",
          "ThreeJS",
          "GraphQL",
          "JWT",
          "Firebase",
          "MySQL",
          "MongoDB",
          "Facebook API",
        ].join(", ")}
        .<br />
        Jeżeli przy Twoim projekcie będzie wymagana dodatkowa wiedza, to po
        prostu ją nabędę. Staram się nie ograniczać. Przy każdym projekcie
        zdobywam dodatkową wiedzę i doświadczenie. Myślę, że przy współpracy z
        Tobą także dużo się nauczę.
      </>
    ),
  },
];

export default questions;
