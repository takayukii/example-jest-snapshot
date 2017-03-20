import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App/>', () => {
  it('snapshot1', () => {
    const component = renderer.create(
      <App greeting="Hello simple"/>
    );
    expect(component).toMatchSnapshot('Greeting Hello simple is displayed?');
  });
});
