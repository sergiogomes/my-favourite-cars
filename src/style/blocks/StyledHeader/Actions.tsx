import styled from 'styled-components';

import { device } from '../../device';

const Actions = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    width: 300px;
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

export default Actions;
