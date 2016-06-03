import { expect } from 'chai';
import React from 'react';
import sd from 'skin-deep';

import App from '../src/components/App';

describe('App Component', () => {
  let tree;

  beforeEach(() => {
    tree = sd.shallowRender(
      <App todos={[]} dispatch={() => {}} />
    );
  });

  it('Should render the app body with headers, and form', () => {
    expect(tree.subTree('h1').text()).to.equal('React & Redux Starter Project');
    expect(tree.subTree('h4').text()).to.equal('Todo Example');
    expect(tree.subTree('form')).to.exist;
  });
});
