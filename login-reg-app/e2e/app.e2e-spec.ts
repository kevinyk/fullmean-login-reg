import { LoginRegAppPage } from './app.po';

describe('login-reg-app App', () => {
  let page: LoginRegAppPage;

  beforeEach(() => {
    page = new LoginRegAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
