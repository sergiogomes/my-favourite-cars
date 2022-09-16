import styled from 'styled-components';

import { device } from '../../device';

const StyledHeader: any = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media ${device.laptop} {
    height: 90px;
  }
`;

export default StyledHeader;
