import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('Has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('Has a textarea', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('Has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('Entering text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('Shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('When submitted, clears the textarea', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  })
});
