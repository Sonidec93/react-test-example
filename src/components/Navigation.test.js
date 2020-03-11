import { configure, shallow } from 'enzyme';
import enzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import Navigation from './navigation';

configure({ adapter: new enzymeAdapter() })

describe('<Navigation />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Navigation />);
    })
    test('2 tabs should be present in the Navigation component', () => {

        expect(wrapper.find('li')).toHaveLength(2);
    })

    test('test if nav links have search text', () => {

        expect(wrapper.contains(<li>Search</li>)).toEqual(true);
    })

    test('3 tabs is shown when supplied props',()=>{
       wrapper.setProps({showHome:true});
       expect(wrapper.find('li')).toHaveLength(3);
    })

})