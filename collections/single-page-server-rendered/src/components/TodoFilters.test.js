import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import App from './App'

chai.use(chaiEnzyme())

describe('App Component', () => {
  it('Should render the app body with headers, and form', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('h2')).to.have.text('todos')
  })
})
