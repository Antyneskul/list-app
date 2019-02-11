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


});

