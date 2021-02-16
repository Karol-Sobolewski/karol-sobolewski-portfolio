import { React } from 'react';
import { shallow } from 'enzyme';
import { LandingComponent } from './Landing';

describe(`Component Landing`, () => {
  it(`should render without crashing`, () => {
    const component = shallow(<LandingComponent />);
    expect(component).toBeTruthy();
  });
});
