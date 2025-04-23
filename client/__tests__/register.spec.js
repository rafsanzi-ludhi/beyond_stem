const { renderDOM } = require('./helpers');

let dom;
let document;

describe('register.html', () => {
  beforeEach(async () => {
    dom = await renderDOM('./client/register.html');
    document = dom.window.document;
  });

  it('should have a registration form', () => {
    const form = document.querySelector('form');
    expect(form).toBeTruthy();
  });

  it('should have username and password inputs', () => {
    const username = document.querySelector('input[type="text"]');
    const password = document.querySelector('input[type="password"]');

    expect(username).toBeTruthy();
    expect(password).toBeTruthy();
  });

  it('should have a register button', () => {
    const button = document.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.textContent.toLowerCase()).toContain('register');
  });

  it('should have a login link', () => {
    const loginLink = document.querySelector('a[href*="login.html"]');
    expect(loginLink).toBeTruthy();
    expect(loginLink.textContent.toLowerCase()).toContain('log in');
  });
});

