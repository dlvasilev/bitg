import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments_reducer';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('commentsReducer', () => {
  it('Handles action with unknown type', () => {
    // expect(commentReducer()).to.be.instanceof(Array);
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('Handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'New comment' };
    expect(commentReducer([], action)).to.eql(['New comment']);
  });
});
