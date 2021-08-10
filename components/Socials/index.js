import styled from "@emotion/styled";

import { ClickEventWrapper } from "../index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: var(--gap-md);
  a {
    display: flex;
    flex-direction: row;
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

const Socials = () => {
  return (
    <Wrapper>
      <ClickEventWrapper
        component={"a"}
        eventname={"clickOnFooterLinkedinIcon"}
        href="https://www.linkedin.com/in/pawel-wywiol/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Paweł Wywioł - Linkedin"
      >
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M45,1H5C2.8,1,1,2.8,1,5v40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V5C49,2.8,47.2,1,45,1z"
            fill="var(--primary)"
          />
          <g>
            <path
              d="M21.3,20.7h5.2v2.6l0,0c0.7-1.4,2.6-2.6,5.2-2.6c5.5,0,6.1,3.1,6.1,7.8V38h-5.2v-8.7   c0-2,0.2-4.3-2.6-4.3c-3.5,0-3.5,2.1-3.5,4.3V38h-5.2L21.3,20.7L21.3,20.7z"
              fill="var(--primary-color)"
            />
            <rect
              fill="var(--primary-color)"
              height="17.3"
              width="5.2"
              x="12.7"
              y="20.7"
            />
            <circle cx="15.3" cy="15" fill="var(--primary-color)" r="3" />
          </g>
        </svg>
      </ClickEventWrapper>

      <ClickEventWrapper
        component={"a"}
        eventname={"clickOnFooterGithubIcon"}
        href="https://github.com/PawelWywiol/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Paweł Wywioł - Github"
      >
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M45,1H5C2.8,1,1,2.8,1,5v40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V5C49,2.8,47.2,1,45,1z"
            fill="var(--primary)"
          />
          <path
            d="M30.4,40h-4h-4c0,0,0-2.4,0-4c-5.5,1.2-7-3-7-3c-1-2-2-3-2-3c-2-1.2,0-1,0-1c2,0,3,2,3,2  c1.8,3,4.9,2.5,6,2c0-1,0.4-2.5,1-3c-4.4-0.5-8-3-8-8s1-6,2-7c-0.2-0.5-1-2.3,0-5c0,0,2,0,4,3c1-1,4-1,5-1c1,0,4,0,5,1c2-3,4-3,4-3  c1.1,2.7,0.2,4.5,0,5c1,1,2,2,2,7s-3.6,7.5-8,8c0.6,0.5,1,2.2,1,3L30.4,40L30.4,40z"
            fill="var(--primary-color)"
          />
        </svg>
      </ClickEventWrapper>

      <ClickEventWrapper
        component={"a"}
        eventname={"clickOnFooterInstagramIcon"}
        href="https://www.instagram.com/czescczescczesc/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Paweł Wywioł - Instagram"
      >
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M45,1H5C2.8,1,1,2.8,1,5v40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V5C49,2.8,47.2,1,45,1z"
            fill="var(--primary)"
          />
          <path
            d="M36,10c0,0-22.5,0-22.5,0c-1.9,0-3.5,1.6-3.5,3.5l0,0c0,0,0,23,0,23c0,1.9,1.6,3.5,3.5,3.5  c0,0,23,0,23,0c1.9-0.1,3.5-1.6,3.5-3.5c0,0,0-23,0-23C40,11.6,37.9,10.1,36,10z M25,19.5c3,0,5.5,2.5,5.5,5.5c0,3-2.5,5.5-5.5,5.5  c-3,0-5.5-2.5-5.5-5.5C19.5,22,22,19.5,25,19.5z M36,34c0,1.1-0.9,2-2,2h-9h-9c-1.1,0-2-0.9-2-2V22.5h2.4C16.1,23.3,16,24.1,16,25  c0,5,4,9,9,9s9-4,9-9c0-0.9-0.1-1.7-0.4-2.5H36V34z M36,15v3h0c0,0.5-0.4,1-1,1v0h-3c-0.5,0-1-0.4-1-1h0v-3h0c0,0,0,0,0,0  c0-0.6,0.4-1,1-1h3v0C35.6,14,36,14.5,36,15C36,15,36,15,36,15L36,15z"
            fill="var(--primary-color)"
          />
        </svg>
      </ClickEventWrapper>

      <ClickEventWrapper
        component={"a"}
        eventname={"clickOnFooterFacebookIcon"}
        href="https://www.facebook.com/pawel.wywiol/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Paweł Wywioł - Facebook"
      >
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M45,1H5C2.8,1,1,2.8,1,5v40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V5C49,2.8,47.2,1,45,1z"
            fill="var(--primary)"
          />
          <path
            d="M32,26l1-5l-5,0v-4c0-1.5,0.8-2,3-2h2v-5c0,0-2,0-4,0c-4.1,0-7,2.4-7,7v4h-5v5h5v14h6V26H32z"
            fill="var(--primary-color)"
          />
        </svg>
      </ClickEventWrapper>
    </Wrapper>
  );
};

export default Socials;
