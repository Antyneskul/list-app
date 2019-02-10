import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

it('Home renders without crashing', () => {
    shallow(<Home/>);
});
