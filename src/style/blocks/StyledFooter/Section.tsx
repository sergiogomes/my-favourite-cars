import styled from 'styled-components';

import { device } from '../../device';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-inline-start: 0;
  height: 50%;
  justify-content: space-around;
  width: 100%;
  background-color: #eaeaea;

  @media ${device.tablet} {
    width: 50%;
    height: 100%;
  }
`;

export default Section;
