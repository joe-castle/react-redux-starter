import React from 'react';
import sd from 'skin-deep';
import chai from 'chai';
import dirtyChai from 'dirty-chai';

import { App } from './App';

chai.use(dirtyChai);

const { expect } = chai;


describe('App Component', () => {
  let tree;

  beforeEach(() => {
    tree = sd.shallowRender(
      <App todos={[]} dispatch={() => {}} />,
    );
  });

  it('Should render the app body with headers, and form', () => {
    expect(tree.subTree('h1').text()).to.equal('React & Redux Starter Project');
    expect(tree.subTree('h4').text()).to.equal('Todo Example');
    expect(tree.subTree('form')).to.exist();
  });
});
