import { FcRosterPage } from './app.po';

describe('fc-roster App', () => {
  let page: FcRosterPage;

  beforeEach(() => {
    page = new FcRosterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
