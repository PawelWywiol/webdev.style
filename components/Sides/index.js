import styled from "@emotion/styled";

const Sides = styled.div`
  position: relative;
  display: flex;
  column-gap: var(--gap-lg);
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  height: ${(props) => (props.fullheight ? "100%" : "auto")};

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
const Side = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || "initial"};
  align-items: ${(props) => props.align || "initial"};
  @media (min-width: 768px) {
    ${(props) => (props.show === "sm" ? "display: none;" : "")};
  }
  @media (max-width: 760px) {
    ${(props) => (props.hide === "sm" ? "display: none;" : "")};
    ${(props) => (props.show === "sm" ? "display: flex;" : "")};
  }
`;

export { Sides, Side };
