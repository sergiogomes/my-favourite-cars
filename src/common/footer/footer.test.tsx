import React from 'react';
import { shallow } from 'enzyme';

import FooterComponent from './FooterComponent';
import StyledFooter from '../../style/blocks/StyledFooter';

describe('footer reducer', () => {
  let wrapper: any;
  const date = new Date();
  const year = date.getFullYear();

  beforeAll(() => {
    wrapper = shallow(<FooterComponent />).dive();
  });

  it('should have a styled footer tag', () => {
    expect(wrapper.find('footer')).toHaveLength(1);
  });

  it('should have a p copyright tag', () => {
    expect(wrapper.find(StyledFooter.Copyright)).toHaveLength(1);
  });

  it('should render the correct year', () => {
    const copyEl = wrapper.find(StyledFooter.Copyright);
    expect(copyEl.contains(year)).toEqual(true);
  });
});
