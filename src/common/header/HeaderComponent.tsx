import React from 'react';
import { Link } from 'react-router-dom';

import logoBrand from '../../assets/images/logo-brand.png';
import StyledHeader from '../../style/blocks/StyledHeader';

export default function HeaderComponent() {
  return (
    <StyledHeader>
      <StyledHeader.Menu>|||</StyledHeader.Menu>
      <StyledHeader.Logo>
        <img src={logoBrand} alt="logo brand" />
      </StyledHeader.Logo>
      <StyledHeader.Links>
        <StyledHeader.Link>
          <Link to="/counter">Counter</Link>
        </StyledHeader.Link>
        <StyledHeader.Link>
          <Link to="/cars">Cars</Link>
        </StyledHeader.Link>
        <StyledHeader.Link>
          <Link to="/brands">Brands</Link>
        </StyledHeader.Link>
      </StyledHeader.Links>
      <StyledHeader.Actions>O</StyledHeader.Actions>
    </StyledHeader>
  );
}
