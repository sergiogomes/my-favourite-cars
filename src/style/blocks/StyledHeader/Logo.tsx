import styled from 'styled-components';

import { device } from '../../device';

const Logo = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.laptop} {
    width: 300px;
  }
`;

export default Logo;
