import styled from "@emotion/styled";

const ButtonWrapper = styled.a`
  margin-top: var(--gap-lg);
  padding: var(--gap-md) var(--gap-lg);
  background-color: var(--primary-background);
  color: var(--primary-color);
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  font-family: Poppins, sans-serif;
  font-weight: 900;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  border-radius: 0.125rem;
  box-shadow: 0 0.74rem 0.75rem rgb(0 0 0 / 21%);
  transform: scale(1);
  transition: all 400ms;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 1.94rem 1.95rem rgb(0 0 0 / 21%);
  }
`;

const Button = (props) => {
  const onClickWrapper = () => {
    const { href, onClick } = props;

    if (href && href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        const rect = target.getBoundingClientRect();
        window.scrollTo(0, window.scrollY + rect.top);
      }
    }

    if (onClick) {
      onClick();
    }
  };
  return <ButtonWrapper {...props} onClick={onClickWrapper} />;
};

export default Button;
