import styled from "@emotion/styled";


const StyledHeader = styled.header`
  padding: var(--gap-md) var(--gap-lg);
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;
`;

const Header = () => <StyledHeader></StyledHeader>;
export default Header;
