import React from 'react'
import renderer from 'react-test-renderer'
import Carousel from '../index'

describe('Snapshot', () => {
    it('Carousel renders correctly', () => {
        const tree = renderer.create(<Carousel />).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
