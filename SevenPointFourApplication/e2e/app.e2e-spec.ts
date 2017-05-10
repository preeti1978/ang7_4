import { SevenPointFourApplicationPage } from './app.po';

describe('seven-point-four-application App', function() {
  let page: SevenPointFourApplicationPage;

  beforeEach(() => {
    page = new SevenPointFourApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
