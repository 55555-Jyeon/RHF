import { styled, css } from "styled-components";

const BasicButton = ({ variant, size, type, children, ...buttonProps }) => {
  return (
    <Button variant={variant} size={size} type={type} {...buttonProps}>
      {children}
    </Button>
  );
};

export default BasicButton;

const variantCSS = {
  primary: css``,
  secondary: css``,
  disabled: css``,
};

const sizeCSS = {};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
    cursor: pointer;
  transition: all 0.6s;

  &:hover,
  &:focus {
  }
`;
