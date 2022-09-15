import styled from 'styled-components';

import { device } from '../../device';

const H1 = styled.h1`
  color: #222;
  display: block;
  font-size: 22px;
  line-height: 32px;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  font-weight: 400;
  font-family: Georgia, serif;
  letter-spacing: 0;

  @media ${device.tablet} {
    font-size: 30px;
    line-height: 42px;
    letter-spacing: -0.62px;
  }
`;

export default H1;
