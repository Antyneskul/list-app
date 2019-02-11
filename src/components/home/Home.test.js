import { shallow } from 'enzyme';
import React from 'react';
import Home from './Home';

it('Home renders without crashing', () => {
    shallow(<Home/>);
});
