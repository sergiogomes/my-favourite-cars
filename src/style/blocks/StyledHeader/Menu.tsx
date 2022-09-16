import styled from 'styled-components';

import { device } from '../../device';

const Menu = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    display: none;
  }
`;

export default Menu;
