/* MIT licensed clean-room template JS */
// Keyboard shortcuts
const searchInput = document.getElementById('search');
window.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
  if (e.key === 'Escape') {
    searchInput.value = '';
    renderList();
  }
});

// Theme toggle
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const THEME_KEY = 'procedures_theme';
function applyTheme(theme) {
  if (theme === 'light') root.setAttribute('data-theme', 'light');
  else root.removeAttribute('data-theme');
}
applyTheme(localStorage.getItem(THEME_KEY) || 'dark');
themeToggle.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  const next = isLight ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
});

// Load data
let procedures = [];
fetch('./data/procedures.json').then(r => r.json()).then(json => {
  procedures = json;
  renderList();
  routeFromHash();
});

// Render list
const listEl = document.getElementById('procList');
function renderList() {
  const q = (searchInput.value || '').toLowerCase().trim();
  listEl.innerHTML = '';
  procedures
    .filter(p => !q || p.title.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q))
    .forEach(p => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.innerHTML = \`
        <span class="item-title">\${p.title}</span>
        <span class="item-meta">\${p.tags.join(' • ')}</span>
      \`;
      btn.addEventListener('click', () => openProc(p.slug));
      if (location.hash.endsWith(p.slug)) btn.classList.add('active');
      li.appendChild(btn);
      listEl.appendChild(li);
    });
}
searchInput.addEventListener('input', renderList);

// Routing
window.addEventListener('hashchange', routeFromHash);
function routeFromHash() {
  const slug = location.hash.replace('#/procedure/', '');
  const p = procedures.find(x => x.slug === slug);
  if (p) renderDetail(p);
}
function openProc(slug) {
  location.hash = '#/procedure/' + slug;
}

const detailEl = document.getElementById('procDetail');
function renderDetail(p) {
  detailEl.innerHTML = \`
    <h1>\${p.title}</h1>
    <p class="item-meta">\${p.tags.join(' • ')}</p>
    \${p.body.map(section => '<h2>' + section.heading + '</h2><p>' + section.text + '</p>').join('')}
  \`;
}

// Configurable link
const linkEl = document.getElementById('newLink');
const linkText = document.getElementById('linkText');
fetch('./config.js').then(() => {
  if (window.NEW_LINK) {
    linkEl.href = window.NEW_LINK;
    linkText.textContent = window.NEW_LINK;
  } else {
    linkEl.removeAttribute('href');
    linkText.textContent = 'Set NEW_LINK in config.js';
  }
});
