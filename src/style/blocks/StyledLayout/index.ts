import styled from 'styled-components';

import { device } from '../../device';

const StyledLayout: any = styled.main`
  min-height: calc(100vh - 60px);
  background: #fff;
  width: 100%;
  padding: 40px 20px;
  margin: auto;

  @media ${device.tablet} {
    padding: 60px 60px;
  }

  @media ${device.laptop} {
    min-height: calc(100vh - 90px);
    padding: 70px 40px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
    padding: 20px 60px;
  }
`;

export default StyledLayout;
