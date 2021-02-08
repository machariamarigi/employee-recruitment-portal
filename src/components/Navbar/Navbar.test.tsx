import React from 'react'
import { shallow } from 'enzyme';
import Navbar from './Navbar'

describe('Navbar Testing', () => {
    it('should render the navbar with the title of the app', () => {
        const wrapper = shallow(<Navbar />)
        expect(wrapper).toMatchSnapshot()
    })
})
