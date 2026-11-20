// Mobile menu toggle + footer year + mobile call/audit bar
(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Close' : 'Menu';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Menu';
      }
    });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Sticky "Call / Free audit" bar on phones (not on the audit form or thank-you page)
  var path = location.pathname;
  if (!/audit\.html|thanks\.html/.test(path)) {
    var bar = document.createElement('div');
    bar.className = 'actionbar';
    bar.innerHTML = '<a class="call" href="tel:+13855435155">Call us</a><a class="go" href="audit.html">Get a free audit</a>';
    document.body.appendChild(bar);
    document.body.classList.add('has-actionbar');
  }
})();
