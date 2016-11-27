import React from 'react';
import sd from 'skin-deep';
import chai from 'chai';
import dirtyChai from 'dirty-chai';

import TodoList from '../../src/components/TodoList';

chai.use(dirtyChai);

const { expect } = chai;


describe('TodoList Component', () => {
  let tree;

  beforeEach(() => {
    tree = sd.shallowRender(
      <TodoList
        todos={[{ todoText: 'Wash Dishes', complete: false, id: 'test_id' }]}
        completeTodo={() => {}}
      />,
    );
  });

  it('Should render the todo list', () => {
    expect(tree.subTree('ul')).to.exist();
    expect(tree.subTree('li').text()).to.equal('Wash Dishes');
    expect(tree.subTree('li').props.className).to.equal('TodoList__item');
  });
});
