import React from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdPersonOutline } from 'react-icons/md';

import { useAppDispatch } from '../../app/hooks';
import { toggle } from '../side-bar/sideBarSlice';

import logoBrand from '../../assets/images/logo-brand.png';
import StyledHeader from '../../style/blocks/StyledHeader';

export default function HeaderComponent() {
  const dispatch = useAppDispatch();

  return (
    <StyledHeader>
      <StyledHeader.Menu type="button" onClick={() => dispatch(toggle())}>
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
