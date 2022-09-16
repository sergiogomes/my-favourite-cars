import styled from 'styled-components';

import { device } from '../../device';

const StyledFooter: any = styled.footer`
  height: 400px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid #eaeaea;

  @media ${device.tablet} {
    flex-direction: row;
    height: 200px;
  }
`;

export default StyledFooter;
