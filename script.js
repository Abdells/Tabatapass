/* TabataPass - Shared JS */

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });

    // Close nav when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });
  }

  // Packages page: show info when package is selected
  const packageSelect = document.getElementById('package-select');
  const packageInfo = document.getElementById('package-info');
  const packageNameEl = document.getElementById('package-name');
  const packageDescEl = document.getElementById('package-desc');

  // Package data – easy to extend later
  const packages = {
    'tpass-shs-core-f1-s1': {
      name: 'TPass - SHS Core Form1 Sem1',
      description: 'This package contain 4 subjects( core): Mathematics, Science, ICT and English Language for Senior High School – Form 1, Semester 1. Unlock full access to the core curriculum materials and assessments for the first semester.',
      level: 'SHS Form 1',
      semester: 'Semester 1',
      type: 'Core'
    }
    // Add more packages here as needed, e.g.:
    // 'another-package-id': { name: '...', description: '...', ... }
  };

  if (packageSelect && packageInfo) {
    packageSelect.addEventListener('change', () => {
      const value = packageSelect.value;
      if (value && packages[value]) {
        const pkg = packages[value];
        packageNameEl.textContent = pkg.name;
        packageDescEl.textContent = pkg.description;
        document.getElementById('pkg-level').textContent = pkg.level;
        document.getElementById('pkg-semester').textContent = pkg.semester;
        document.getElementById('pkg-type').textContent = pkg.type;
        packageInfo.classList.add('visible');
      } else {
        packageInfo.classList.remove('visible');
      }
    });
  }

  // Highlight current page in nav
  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelectorAll('.main-nav a').forEach(link => {
      if (link.dataset.page === currentPage) {
        link.classList.add('active');
      }
    });
  }
});
