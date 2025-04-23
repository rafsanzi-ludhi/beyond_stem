const { renderDOM } = require('./helpers');

let dom;
let document;

xdescribe('index.html', () => {
  beforeEach(async () => {
    dom = await renderDOM('./client/index.html');
    document = dom.window.document;
  });

  it('has a title element', () => {
    const title = document.querySelector('title');
    expect(title).toBeTruthy();
  });
});

it('renders the dropdown with correct links', () => {
  const dropdown = document.querySelector('.dropdown-menu');
  const links = dropdown.querySelectorAll('a');

  expect(dropdown).toBeTruthy();
  expect(links.length).toBe(3);

  expect(links[0].textContent).toContain('Login');
  expect(links[1].textContent).toContain('SignUp');
  expect(links[2].textContent).toContain('Project on Github');
});
