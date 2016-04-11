import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  //should display comment in list, and should dispay all Comment
  let component;

  beforeEach(() => {
    const props = {comments: ['new Comment', "other"]}
    component = renderComponent(CommentList, null, props );
  });

  it('shows a li for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  })

  it('shows each comment that is provided', () => {
    expect(component).to.contain('new Comment');
    expect(component).to.contain('other')
  })

});
