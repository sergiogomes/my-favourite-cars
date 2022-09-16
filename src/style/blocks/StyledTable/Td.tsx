import styled, { css } from 'styled-components';

import { device } from '../../device';

type TdProps = {
  textAlignment?: string;
  hasActions?: boolean;
};

const Td = styled.td<TdProps>`
  padding: 6px;
  color: #222;
  font-size: 13px;
  font-family: Georgia, serif;
  line-height: 19px;
  letter-spacing: 0.1px;
  text-overflow: ellipsis;

  @media ${device.tablet} {
    padding: 12px 15px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
  }

  @media ${device.laptop} {
    font-size: 15px;
    line-height: 22px;
  }

  ${({ textAlignment }) =>
    textAlignment &&
    css`
      text-align: ${textAlignment};
    `}

  ${({ hasActions }) =>
    hasActions &&
    css`
      display: flex;
      min-width: 120px;
      justify-content: space-evenly;
    `}
`;

export default Td;
