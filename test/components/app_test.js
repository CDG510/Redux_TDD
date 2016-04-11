import {renderComponent, expect} from '../test_helper';
import App from "../../src/components/app";

//describe groups similar tests
describe('App', () => {
  let component;

  beforeEach( () => {
    component = renderComponent(App)
  });

  //we should always have a commentbox
  it('shows a comment box', () => {
      expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  })
});

//it tests a single attribute of target
//inside it tells us what should do
