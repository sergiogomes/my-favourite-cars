import styled from 'styled-components';

import { device } from '../../device';
import Logo from './Logo';
import Links from './Links';
import Link from './Link';
import Menu from './Menu';
import Actions from './Actions';

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

StyledHeader.Logo = Logo;
StyledHeader.Links = Links;
StyledHeader.Link = Link;
StyledHeader.Menu = Menu;
StyledHeader.Actions = Actions;

export default StyledHeader;
