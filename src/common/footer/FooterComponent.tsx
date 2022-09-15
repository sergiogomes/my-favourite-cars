import React from 'react';
import { Link } from 'react-router-dom';

import lightLogo from '../../assets/images/light-logo.png';
import StyledFooter from '../../style/blocks/StyledFooter';

export default function FooterComponent() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <StyledFooter>
      <StyledFooter.Logo>
        <img src={lightLogo} alt="logo" />
      </StyledFooter.Logo>
      <StyledFooter.Section>
        <StyledFooter.Links>
          <StyledFooter.Link>
            <Link to="/cars">Cars</Link>
          </StyledFooter.Link>
          <StyledFooter.Link>
            <Link to="/brands">Brands</Link>
          </StyledFooter.Link>
          <StyledFooter.Link>
            <Link to="/about">About</Link>
          </StyledFooter.Link>
        </StyledFooter.Links>
        <StyledFooter.Copyright>
          &copy; {year} My Favourite Cars
        </StyledFooter.Copyright>
      </StyledFooter.Section>
    </StyledFooter>
  );
}
