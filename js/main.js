document.addEventListener('DOMContentLoaded', function () {

  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.tabbar a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
    else link.classList.remove('active');
  });

  document.querySelectorAll('.btn').forEach(function (btn) {
    if (btn.textContent.trim() === 'В избранное') {
      btn.addEventListener('click', function () {
        btn.textContent = btn.textContent.trim() === 'В избранное'
          ? '✓ В избранном'
          : 'В избранное';
      });
    }
  });

  document.querySelectorAll('.sidebar a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
  });
});