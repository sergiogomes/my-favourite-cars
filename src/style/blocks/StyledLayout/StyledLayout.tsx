import styled from 'styled-components';

import { device } from '../../device';

const StyledLayout: any = styled.main`
  min-height: calc(100vh - 60px - 400px);
  background: #fff;
  width: 100%;
  padding: 40px 20px;
  margin: auto;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    min-height: calc(100vh - 60px - 200px);
    padding: 60px 60px;
  }

  @media ${device.laptop} {
    min-height: calc(100vh - 90px - 200px);
    padding: 70px 40px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
    padding: 20px 60px;
  }
`;

export default StyledLayout;
