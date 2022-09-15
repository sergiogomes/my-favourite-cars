import styled, { css } from 'styled-components';

type ThProps = {
  textAlignment?: string;
};

const Th = styled.th<ThProps>`
  padding: 12px 15px;
  font-size: 14px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: lighter;
  line-height: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: unset;

  ${({ textAlignment }) =>
    textAlignment &&
    css`
      text-align: ${textAlignment};
    `}
`;

export default Th;
