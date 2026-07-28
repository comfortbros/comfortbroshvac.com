// Simple interactions: mobile nav + basic form handling
document.addEventListener('DOMContentLoaded', function () {
  // set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle?.addEventListener('click', () => {
    if (!nav) return;
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '0.5rem';
    nav.style.paddingTop = '0.75rem';
  });

  // form submit (progressive enhancement)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      // If the action is a third-party endpoint (Formspree/Netlify) let the browser handle it.
      // Try to submit via fetch for a better UX when action is CORS-friendly.
      const action = form.getAttribute('action') || '';
      if (action.includes('formspree.io') || action.includes('netlify')) {
        e.preventDefault();
        const formData = new FormData(form);
        fetch(action, {
          method: form.method || 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' },
        }).then(res => {
          if (res.ok) {
            status.textContent = 'Thanks — your request was sent. We will contact you shortly.';
            form.reset();
          } else {
            status.textContent = 'There was a problem sending the form. Please call us at +1 (234) 567-890.';
          }
        }).catch(() => {
          status.textContent = 'Network error. Please try again or call us directly.';
        });
      }
    });
  }
});