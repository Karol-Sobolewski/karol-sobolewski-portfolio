import { React } from 'react';
import { shallow } from 'enzyme';
import { ProjectFormComponent } from './ProjectForm';

describe(`Component ProjectForm`, () => {
  it(`should render without crashing`, () => {
    const component = shallow(<ProjectFormComponent />);
    expect(component).toBeTruthy();
  });
});
