import { styled, css } from "styled-components";

const BasicInput = ({ size, ...inputProps }) => {
  return <Input size={size} {...inputProps} />;
};

export default BasicInput;

const sizeCSS = {
  large: css`
    min-width: 585px;
    min-height: 48px;
    border-radius: 6px;
    border: 1px solid #555;
  `,
  larger: css`
    max-width: 740px;
    max-height: 48px;
    border-radius: 6px;
    border: 1px solid #555;
  `,
  largest: css`
    width: 954px;
    min-height: 48px;
    border-radius: 6px;
    border: 1px solid #555;
  `,
};

const Input = styled.input`
  ${({ size }) => sizeCSS[size]}
  border: none;
  margin: 0px;
  outline: none;
`;
