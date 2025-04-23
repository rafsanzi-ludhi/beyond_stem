const { renderDOM } = require('./helpers');

let dom;
let document;

xdescribe('login.html', () => {
  beforeEach(async () => {
    dom = await renderDOM('./client/login.html');
    document = dom.window.document;
  });

  it('should have a login form', () => {
    const form = document.querySelector('form');
    expect(form).toBeTruthy();
  });

  it('should have username and password inputs', () => {
    const username = document.querySelector('input[type="text"]');
    const password = document.querySelector('input[type="password"]');

    expect(username).toBeTruthy();
    expect(password).toBeTruthy();
  });

  it('should have a login button', () => {
    const button = document.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.textContent.toLowerCase()).toContain('log in');
  });

  it('should have a signup link', () => {
    const link = document.querySelector('a[href*="register.html"]');
    expect(link).toBeTruthy();
    expect(link.textContent.toLowerCase()).toContain('sign up');
  });
});
