import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('Header renders without crashing', () => {
    shallow(<Header/>);
});
