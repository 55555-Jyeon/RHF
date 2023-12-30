import { styled, css } from "styled-components";

const BasicInput = ({ variant, size, ...inputProps }) => {
  return <Input variant={variant} size={size} {...inputProps} />;
};

export default BasicInput;

const variantCSS = {
  primary: css``,
  secondary: css``,
};

const sizeCSS = {};

const Input = styled.input`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
    border: none;
  margin: 0px;
  outline: none;
`;
