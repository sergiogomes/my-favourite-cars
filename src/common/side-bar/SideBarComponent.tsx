import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectVisibility, toggle } from './sideBarSlice';

import logoBrand from '../../assets/images/logo-brand.png';
import StyledSideBar from '../../style/blocks/StyleSideBar';

export default function SideBarComponent() {
  const visibility = useAppSelector(selectVisibility);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNavigation = (route: string) => {
    dispatch(toggle());
    navigate(route);
  };

  return (
    <StyledSideBar visibility={visibility}>
      <StyledSideBar.Icon type="button" onClick={() => dispatch(toggle())}>
        <MdClose />
      </StyledSideBar.Icon>
      <StyledSideBar.Logo>
        <img src={logoBrand} alt="logo brand" />
      </StyledSideBar.Logo>
      <StyledSideBar.Links>
        <StyledSideBar.Link>
          <button type="button" onClick={() => handleNavigation('/cars')}>
            Cars
          </button>
        </StyledSideBar.Link>
        <StyledSideBar.Link>
          <button type="button" onClick={() => handleNavigation('/brands')}>
            Brands
          </button>
        </StyledSideBar.Link>
      </StyledSideBar.Links>
    </StyledSideBar>
  );
}
