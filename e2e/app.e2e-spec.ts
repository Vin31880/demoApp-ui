import { DemoappUiPage } from './app.po';

describe('demoapp-ui App', () => {
  let page: DemoappUiPage;

  beforeEach(() => {
    page = new DemoappUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
