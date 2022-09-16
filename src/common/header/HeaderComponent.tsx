import React from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdPersonOutline } from 'react-icons/md';

import logoBrand from '../../assets/images/logo-brand.png';
import StyledHeader from '../../style/blocks/StyledHeader';

export default function HeaderComponent() {
  return (
    <StyledHeader>
      <StyledHeader.Menu>
        <MdMenu />
      </StyledHeader.Menu>
      <StyledHeader.Logo>
        <img src={logoBrand} alt="logo brand" />
      </StyledHeader.Logo>
      <StyledHeader.Links>
        <StyledHeader.Link>
          <Link to="/cars">Cars</Link>
        </StyledHeader.Link>
        <StyledHeader.Link>
          <Link to="/brands">Brands</Link>
        </StyledHeader.Link>
      </StyledHeader.Links>
      <StyledHeader.Actions>
        <MdPersonOutline />
      </StyledHeader.Actions>
    </StyledHeader>
  );
}
