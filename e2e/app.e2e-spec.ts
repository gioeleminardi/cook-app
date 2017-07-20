import { CookAppPage } from './app.po';

describe('cook-app App', () => {
  let page: CookAppPage;

  beforeEach(() => {
    page = new CookAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
