import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

it('Header renders without crashing', () => {
    shallow(<Header/>);
});
