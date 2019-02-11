import { shallow } from 'enzyme';
import React from 'react';
import { CategoryDetails } from './CategoryDetails';


describe('<CategoryDetails>', () => {
    const props = {
        match: {
            params: {
                id: 'people',
                name: 'Alex'
            }
        },
        categoriesData: {
            people: {
                data: [
                    {
                        name: 'Alex',
                    },
                    {
                        name: 'Bob'
                    }
                ]
            }
        }
    };

    let wrapper;

    beforeAll(() => {
        wrapper = shallow(
            <CategoryDetails {...props} />
        );
    });

    it('Should renders without crashing', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Should render correct list', () => {
        expect(wrapper.find('ListItem').text()).toEqual('name: Alex');
    });

    it('Should render  "Nothing to display" if data is empty', () => {
        const newProps = {
            ...props, categoriesData: {
                people: {
                    data: []
                }
            }
        };
        wrapper = wrapper = shallow(
            <CategoryDetails {...newProps} />
        );

        expect(wrapper.find('Head').text()).toEqual('Nothing to display');
    });


});

