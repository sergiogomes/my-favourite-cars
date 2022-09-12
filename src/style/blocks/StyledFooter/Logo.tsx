import styled from 'styled-components';

import { device } from '../../device';

const Logo = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    height: 100%;
    object-fit: cover;
  }

  @media ${device.tablet} {
    width: 50%;
    height: 100%;
  }
`;

export default Logo;
