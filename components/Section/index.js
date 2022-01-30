import styled from "@emotion/styled";

import Arrow from "../Arrow";

const SectionChildren = styled.div`
  width: var(--section-width);
  max-width: var(--section-max-width);
  margin: 0 auto;
  padding: 6.2vmax 2.2vw;
  & {
    > h1,
    h2 {
      margin-top: 0;
    }
  }
`;

const SectionContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-height: ${(props) => (props.fullscreen ? "100vh" : "auto")};
`;

const SectionWrapper = styled.section`
  display: block;
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.light
      ? `
    background: var(--light-background);
    color: var(--light-color);
  `
      : null}

  ${(props) =>
    props.dark
      ? `
    background: var(--dark-background);
    color: var(--dark-color);
  `
      : null}
`;

const SectionArrow = styled.div`
  position: absolute;
  bottom: var(--gap-md);
  right: var(--gap-md);
`;

const Section = ({ children, next, fullscreen, light, dark, ...props }) => {
  return (
    <SectionWrapper {...props} light={light} dark={dark}>
      <SectionContent fullscreen={fullscreen}>
        <SectionChildren>{children}</SectionChildren>
      </SectionContent>
      {next && (
        <SectionArrow>
          <Arrow down>{next}</Arrow>
        </SectionArrow>
      )}
    </SectionWrapper>
  );
};

export default Section;
