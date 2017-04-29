import { TTGFKalenderPage } from './app.po';

describe('ttgfkalender App', () => {
  let page: TTGFKalenderPage;

  beforeEach(() => {
    page = new TTGFKalenderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
