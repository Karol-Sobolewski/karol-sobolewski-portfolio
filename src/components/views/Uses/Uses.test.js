import { React } from 'react';
import { shallow } from 'enzyme';
import { UsesComponent } from './Uses';

describe(`Component Uses`, () => {
  it(`should render without crashing`, () => {
    const component = shallow(<UsesComponent />);
    expect(component).toBeTruthy();
  });
});
