import React from 'react';
import {mount} from 'enzyme';

import App from '../App';

describe('<App/>', () => {
  it('snapshot2', () => {
    const wrapper = mount(
      <App greeting="Hello enzyme"/>
    );
    expect(wrapper).toMatchSnapshot('Greeting Hello enzyme is displayed?');
  });
});
