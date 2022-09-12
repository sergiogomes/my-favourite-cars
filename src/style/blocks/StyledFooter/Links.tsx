import styled from 'styled-components';

import { device } from '../../device';

const Links = styled.ul`
  display: none;
  flex-direction: row;
  list-style: none;
  padding-inline-start: 0;
  justify-content: space-evenly;

  @media ${device.laptop} {
    display: flex;
  }
`;

export default Links;
