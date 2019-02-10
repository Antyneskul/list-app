import React from 'react';
import { shallow } from 'enzyme';
import { Category } from './Category';


describe('<Category>', () => {
    const props = {
        match: {
            params: {
                id: 'people'
            }
        },
        fetchCategory: jest.fn(),
        data: {
            people: [
                {
                    name: 'Alex'
                },
                {
                    name: 'Bob'
                }
            ]
        }
    };

    let wrapper;

    beforeAll(() => {
        wrapper = shallow(
            <Category {...props} />
        );
    });

    it('Should renders without crashing', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Should render correct Header', () => {
        expect(wrapper.find('h1').text()).toEqual('PEOPLE');
    });

    it('Should render 2 Links', () => {
        expect(wrapper.find('Link').length).toBe(2);
    });

});

