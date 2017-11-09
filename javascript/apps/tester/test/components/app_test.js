import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('Shows the correct text', () => {
    expect(component).to.contain('React Tester');
  });

  it('Shows a CommentBox', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('Shows a CommentList', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
