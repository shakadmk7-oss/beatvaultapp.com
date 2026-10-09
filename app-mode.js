// When a page is opened inside the BeatVault app's built-in viewer, the URL
// has ?app=1 and the app injects its current theme colours as
// window.__BV_APP__ before the page loads. This hides the website's own
// header/footer (the app shows its own) and recolours the page to match.
// The settings are kept for the rest of the visit, so links followed inside
// the viewer stay in app mode.
(function () {
  var KEY = 'bvAppMode';
  var saved = null;
  try { saved = JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch (e) {}
  if (new URLSearchParams(location.search).get('app') === '1') {
    saved = {};
    var given = window.__BV_APP__ || {};
    ['bg', 'card', 'line', 'text', 'muted', 'accent'].forEach(function (k) {
      var v = given[k];
      if (v && /^[0-9a-fA-F]{6}$/.test(v)) saved[k] = '#' + v;
    });
    try { sessionStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) {}
  }
  if (!saved) return;
  var root = document.documentElement;
  root.classList.add('in-app');
  var map = { bg: ['--bg', '--bg2'], card: ['--card'], line: ['--line'], text: ['--text'], muted: ['--muted'], accent: ['--accent'] };
  Object.keys(saved).forEach(function (k) {
    (map[k] || []).forEach(function (v) { root.style.setProperty(v, saved[k]); });
  });
})();
