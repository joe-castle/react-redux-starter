import {expect} from 'chai';
import React from 'react';
import sd from 'skin-deep';

import App from '../src/components/App';

describe('App Component', () => {
  let tree;

  beforeEach(() => {
    tree = sd.shallowRender(
      <App counter={5} dispatch={() => {}} />
    );
  });

  it('Should render the app body with header, paragraphs, counter and buttons', () => {
    expect(tree.subTree('h1').text()).to.equal('Hello World!');
    expect(tree.everySubTree('p')[0].text()).to.equal('React Starter Project');
    expect(tree.everySubTree('p')[2].text()).to.equal('5');
  });
});
