import { shallow } from 'enzyme';
import React from 'react';
import { Loader } from './Loader';


it('Loader renders without crashing', () => {
    const props = {fetching: true};
    const wrapper = shallow(
        <Loader {...props} />
    );

    expect(wrapper.exists()).toBeTruthy();

});

it('Loader renders Backdrop during fetching phase', () => {
    const props = {fetching: true};
    const wrapper = shallow(
        <Loader {...props} />
    );

    expect(wrapper.find('Backdrop').length).toBe(1);
});

it('Loader does not render Backdrop if fetching is false', () => {
    const props = {fetching: false};
    const wrapper = shallow(
        <Loader {...props} />
    );

    expect(wrapper.find('Backdrop').length).toBe(0);
});
