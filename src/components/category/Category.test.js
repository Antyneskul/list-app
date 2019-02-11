import { shallow } from 'enzyme';
import React from 'react';
import { Category } from './Category';


describe('<Category>', () => {
    const props = {
        match: {
            params: {
                id: 'people'
            }
        },
        fetchCategory: jest.fn(),
        categories: {
            people: {
                data: [
                    {
                        name: 'Alex'
                    },
                    {
                        name: 'Bob'
                    }
                ],
                loaded: true
            }
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
        expect(wrapper.find('Head').text()).toEqual('people');
    });

    it('Should render 2 Links', () => {
        expect(wrapper.find('Link').length).toBe(2);
    });

    it('Should render Error Message', () => {
        const newProps = {...props, error: 'Error Message'};

        wrapper = shallow(
            <Category {...newProps} />
        );

        expect(wrapper.find('ErrorMessage').text()).toBe('Error Message');
    });

});

