import { TheMagicGatheredPage } from './app.po';

describe('the-magic-gathered App', () => {
  let page: TheMagicGatheredPage;

  beforeEach(() => {
    page = new TheMagicGatheredPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
