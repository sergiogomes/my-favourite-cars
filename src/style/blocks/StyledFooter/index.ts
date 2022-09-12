import styled from 'styled-components';

import { device } from '../../device';
import Logo from './Logo';
import Link from './Link';
import Links from './Links';
import Section from './Section';
import Copyright from './Copyright';

const StyledFooter: any = styled.footer`
  height: 400px;
  position: absolute;
  bottom: 0;
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

StyledFooter.Logo = Logo;
StyledFooter.Link = Link;
StyledFooter.Links = Links;
StyledFooter.Section = Section;
StyledFooter.Copyright = Copyright;

export default StyledFooter;
