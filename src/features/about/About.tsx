import React from 'react';

import StyledLink from '../../style/elements/StyledLink';
import darkLogo from '../../assets/images/dark-logo.png';
import H1 from '../../style/elements/H1';
import P from '../../style/elements/P';

export default function About() {
  return (
    <div>
      <H1>About</H1>
      <P>Under construction</P>
      <StyledLink to="/cars">RETURN</StyledLink>
      <img src={darkLogo} alt="logo" />
    </div>
  );
}
