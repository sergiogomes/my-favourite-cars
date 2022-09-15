import React from 'react';

import StyledLayout from '../../style/blocks/StyledLayout';

type LayoutProps = {
  children: JSX.Element;
};

export default function LayoutComponent({ children }: LayoutProps) {
  return <StyledLayout>{children}</StyledLayout>;
}
