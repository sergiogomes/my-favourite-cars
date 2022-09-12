import styled from 'styled-components';

import { device } from '../../device';

const Links = styled.ul`
  display: none;
  flex-direction: row;
  list-style: none;
  padding-inline-start: 0;
  height: 100%;
  justify-content: space-evenly;
  width: 400px;

  @media ${device.laptop} {
    display: flex;
  }
`;

export default Links;
