import { css } from "styled-components";

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlignCenter = css`
  display: flex;
  align-items: center;
`;

export const JustifyCenter = css`
  display: flex;
  align-items: center;
`;

export const PositionCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PositionYCenter = css`
  position: absolute;
  left: 50%;
  transform: translateY(-50%);
`;
