import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';

it('NotFoundPage renders without crashing', () => {
    shallow(<NotFoundPage/>);
});
