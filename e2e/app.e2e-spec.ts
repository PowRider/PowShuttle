import { PowShuttlePage } from './app.po';

describe('pow-shuttle App', function() {
  let page: PowShuttlePage;

  beforeEach(() => {
    page = new PowShuttlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
