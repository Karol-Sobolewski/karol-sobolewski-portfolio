import { React } from 'react';
import { shallow } from 'enzyme';
import { SkillsComponent } from './Skills';

describe(`Component Skills`, () => {
  it(`should render without crashing`, () => {
    const component = shallow(<SkillsComponent />);
    expect(component).toBeTruthy();
  });
});
