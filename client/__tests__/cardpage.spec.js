const { renderDOM } = require('./helpers');

let dom;
let document;

describe('cardPage.html', () => {
  beforeEach(async () => {
    dom = await renderDOM('./client/cardPage.test.html');
    document = dom.window.document;
  });

  it('should have a logout button', () => {
    const logoutBtn = document.querySelector('button');
    expect(logoutBtn).toBeTruthy();
    expect(logoutBtn.textContent.toLowerCase()).toContain('logout');
  });

  it('should have a previous button', () => {
    const prev = [...document.querySelectorAll('button')].find(btn =>
      btn.textContent.toLowerCase().includes('previous')
    );
    expect(prev).toBeTruthy();
  });

  it('should have a next button', () => {
    const next = [...document.querySelectorAll('button')].find(btn =>
      btn.textContent.toLowerCase().includes('next')
    );
    expect(next).toBeTruthy();
  });

  xit('should display a historical fact and an image', () => {
    const img = document.querySelector('img');
    const paragraph = document.querySelector('p');

    expect(img).toBeTruthy();
    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent.length).toBeGreaterThan(10);
  });
});
