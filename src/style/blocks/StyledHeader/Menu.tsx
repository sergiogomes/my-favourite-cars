import styled from 'styled-components';

import { device } from '../../device';

const Menu = styled.button`
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  border: unset;
  background-color: unset;

  @media ${device.laptop} {
    display: none;
  }

  svg {
    width: 25px;
    height: 25px;
    color: #222;

    &:hover {
      color: #696969;
      cursor: pointer;
    }
  }
`;

export default Menu;
