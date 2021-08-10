import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

const globals = (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Poppins:wght@300;400;900&display=swap");

      :root {
        --gap: 0.5rem;
        --gap-md: 1rem;
        --gap-lg: 2rem;
        --gap-xl: 4rem;

        --side-gap: 4rem;

        --default-background: radial-gradient(
          circle farthest-corner at 100% 100%,
          #3a4d61,
          #222f3e 73%
        );
        --default-color: #fefefe;
        --default: #3a4d61;

        --primary-background: #ff9900;
        --primary-color: #232f3e;
        --primary: #ff9900;

        --light-background: #f0f4fa;
        --light-color: #232f3e;
        --light: #f0f4fa;

        --dark-background: #131c25;
        --dark-color: #fefefe;
        --dark: #131c25;

        --box-shadow: 0 0.74rem 0.75rem rgb(0 0 0 / 21%);

        --section-width: calc(80rem - var(--side-gap));
        --section-max-width: calc(100vw - var(--side-gap));
        --section-min-height: 100vh;
        --section-padding: 11rem 0;
      }

      ${emotionNormalize}

      html,
      body {
        font-family: Comfortaa, display;
        font-weight: 300;

        font-size: clamp(12px, 1vmax, 16px);

        background: var(--default-background);
        color: var(--default-color);
      }

      #__next {
        position: relative;
        display: block;
        height: 100%;
      }

      a {
        color: inherit;
        text-decoration: none;
        color: var(--primary);
        font-weight: 700;
      }

      b,
      strong {
        font-weight: 700;
      }

      * {
        box-sizing: border-box;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-family: Poppins, sans-serif;
        font-weight: 700;
      }

      h1 {
        font-size: 3.1rem;
        line-height: 1.1;
      }

      h2 {
        font-size: 3rem;
        line-height: 1.1;
      }

      h3 {
        font-size: 2rem;
        line-height: 1.1;
      }

      h4 {
        font-size: 0.8rem;
        line-height: 1.5;
      }

      h5 {
        font-size: 1.4rem;
        line-height: 1.1;
      }

      h6 {
        font-size: 1rem;
        line-height: 1.6;
        display: flex;
        column-gap: 0.2rem;
        row-gap: 0.2rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.6;
      }

      ul {
        font-size: 1rem;
        line-height: 1.6;
      }

      @media (min-width: 2500px) {
        h1 {
          font-size: 3rem;
        }
      }

      @media (max-width: 760px) {
        :root {
          --gap: 0.5rem;
          --gap-md: 1rem;
          --gap-lg: 2rem;
          --gap-xl: 4rem;

          --side-gap: 2rem;

          --section-width: calc(100vw - var(--side-gap));
          --section-max-width: calc(100vw - var(--side-gap));
          --section-min-height: 100vh;
          --section-padding: 11rem 0;
        }

        html,
        body {
          font-size: 2.1875vmax;
          scroll-behavior: smooth;
        }
        h1,
        h2 {
          font-size: 2.1rem;
          font-size: calc(1.7rem + (3 - 1.7) * ((100vw - 20rem) / (48 - 20)));
          line-height: calc(
            1.1 * (1.7rem + (3 - 1.7) * ((100vw - 20rem) / (48 - 20)))
          );
        }
        h3 {
          font-size: 1.6rem;
          font-size: calc(1.35rem + (2 - 1.35) * ((100vw - 20rem) / (48 - 20)));
          line-height: calc(
            1.3 * (1.35rem + (2 - 1.35) * ((100vw - 20rem) / (48 - 20)))
          );
        }
        h4 {
          font-size: 0.72rem !important;
          font-size: calc(
            0.93rem + (0.8 - 0.93) * ((100vw - 20rem) / (48 - 20))
          );
          line-height: calc(
            1.4 * (0.93rem + (0.8 - 0.93) * ((100vw - 20rem) / (48 - 20)))
          );
        }
        h5 {
          font-size: 1.12rem;
          font-size: calc(
            1.14rem + (1.4 - 1.14) * ((100vw - 20rem) / (48 - 20))
          );
          line-height: calc(
            1.4 * (1.14rem + (1.4 - 1.14) * ((100vw - 20rem) / (48 - 20)))
          );
        }
        h6,
        p {
          font-size: 0.8rem;
          font-size: calc(1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20)));
          line-height: calc(
            1.4 * (1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20)))
          );
        }
      }
    `}
  />
);

export { globals };
