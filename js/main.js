/**
 * Debonair Salon - Core Application Logic
 * Navigation, dynamic service catalog rendering, interactive booking & animations
 */
(() => {
  // Navigation & Header Setup
  const root = document.getElementById('site-header');
  const page = document.body.dataset.page;
  const nav = [
    ['Home', 'index.html', 'home'],
    ['Services', 'services.html', 'services'],
    ['About Us', 'about.html', 'about'],
    ['Contact', 'contact.html', 'contact']
  ];

  if (root) {
    root.innerHTML = `
      <div class="container head-inner">
        <a class="brand" href="index.html">DEBONAIR SALON</a>
        <button class="menu-toggle" aria-label="Toggle navigation" aria-controls="main-nav" aria-expanded="false">☰</button>
        <nav class="nav" id="main-nav" aria-label="Main navigation">
          ${nav.map(([n, h, id]) => `<a href="${h}" ${page === id ? 'aria-current="page"' : ''}>${n}</a>`).join('')}
          <a class="btn" href="contact.html#book-appointment">Book Appointment</a>
        </nav>
      </div>`;

    const toggle = root.querySelector('.menu-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const open = root.querySelector('.nav').classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
      });
    }

    root.querySelectorAll('.nav a').forEach((a) =>
      a.addEventListener('click', () => {
        const navEl = root.querySelector('.nav');
        if (navEl) navEl.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // Footer Setup
  const footerRoot = document.getElementById('site-footer');
  if (footerRoot) {
    footerRoot.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="brand" href="index.html">DEBONAIR SALON<small>THE STYLE YOU DESIRE</small></a>
            <p>Grooming, beauty and special-occasion care in Karachi.</p>
            <span class="review-tag">Prototype — business details pending verification</span>
          </div>
          <div>
            <h3>Explore</h3>
            <div class="footer-links">
              ${nav.map(([n, h]) => `<a href="${h}">${n}</a>`).join('')}
            </div>
          </div>
          <div>
            <h3>Connect</h3>
            <div class="footer-links">
              <a href="https://wa.me/923070881490" target="_blank" rel="noopener">WhatsApp: 0307 0881490</a>
              <div class="footer-social-row" aria-label="Social media">
                <a href="https://www.instagram.com/debonairsalon1/" target="_blank" rel="noopener" class="social-link icon-only" aria-label="Instagram">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5"/>
                    <circle cx="12" cy="12" r="4.2"/>
                    <circle cx="17.8" cy="6.4" r=".9" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/debonairsalon.pk/" target="_blank" rel="noopener" class="social-link icon-only" aria-label="Facebook">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 22v-8.3h2.8l.4-3.3h-3.2V8.3c0-1 .3-1.7 1.7-1.7h1.7V3.7c-.3-.1-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.4v2.5H7.5v3.3h2.7V22h3.3Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="fineprint">© Debonair Salon · Review prototype · No booking is confirmed online.</div>
      </div>`;
  }

  // Helpers
  const wa = (message) => 'https://wa.me/923070881490?text=' + encodeURIComponent(message);
  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[ch]));

  // Auto-fill WhatsApp links
  document.querySelectorAll('[data-wa]').forEach((a) => {
    a.href = wa(a.dataset.wa);
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });

  // Services Catalog Page Logic
  if (page === 'services') {
    const cat = window.DEBONAIR_CATALOG;
    const area = document.getElementById('catalog-area');
    const tabs = [...document.querySelectorAll('.tab')];

    const render = (type) => {
      const visual = document.getElementById('service-feature-image');
      const heading = document.getElementById('service-feature-title');
      const description = document.getElementById('service-feature-description');

      const moods = {
        men: [
          'assets/mens-services-approved.webp',
          'The art of grooming',
          'Browse our published men’s services and prices.'
        ],
        women: [
          'assets/womens-services-promo-oct17.webp',
          'Beauty, beautifully considered',
          'Browse our published service menu and enquire with Debonair about availability at your preferred branch.'
        ],
        deals: [
          'assets/packages-facial-approved.png',
          'FOR EVERY SPECIAL MOMENT',
          'Explore Debonair Deals and confirm the latest inclusions and pricing.'
        ]
      };

      const mood = moods[type];
      if (visual && mood) {
        visual.src = mood[0];
        visual.alt =
          (type === 'men'
            ? 'Male client receiving a haircut'
            : type === 'women'
            ? 'Women’s hairstyling'
            : 'Male client receiving a professional facial grooming treatment') + ' — reference imagery';
      }
      if (heading && mood) heading.textContent = mood[1];
      if (description && mood) description.textContent = mood[2];

      if (area) {
        area.innerHTML = '';
        area.classList.toggle('catalog-masonry', type !== 'deals');

        if (type === 'deals' && cat && cat.deals) {
          cat.deals.forEach((deal) => {
            const label = `Debonair Deal ${String(deal.number).padStart(2, '0')}`;
            const includes = deal.inclusions.map((name) => `<li>${escapeHtml(name)}</li>`).join('');
            area.insertAdjacentHTML(
              'beforeend',
              `<article class="service-card deal-card">
                <span class="eyebrow">The Debonair Collection</span>
                <h3>${label}</h3>
                <span class="deal-includes-title">Package Includes</span>
                <ul class="deal-inclusions">${includes}</ul>
                <a class="btn" target="_blank" rel="noopener noreferrer" href="${wa('Hello Debonair Salon, please share the inclusions, price and availability for ' + label + '.')}">Call on WhatsApp</a>
              </article>`
            );
          });
        } else if (cat && cat[type]) {
          cat[type].forEach((group, index) => {
            const audience = type === 'men' ? 'men' : 'women';
            const rows = group.items
              .map((item) => `<li class="price-row"><span>${escapeHtml(item.name)}</span><strong>${escapeHtml(item.price)}</strong></li>`)
              .join('');
            const note = group.note ? `<p class="price-note">${escapeHtml(group.note)}</p>` : '';
            const sub = group.subheading ? `<p class="price-subheading">${escapeHtml(group.subheading)}</p>` : '';
            area.insertAdjacentHTML(
              'beforeend',
              `<article class="service-card price-card">
                <span class="eyebrow">${String(index + 1).padStart(2, '0')} · ${audience === 'men' ? "Men's" : "Women's"} collection</span>
                <h3>${escapeHtml(group.title)}</h3>
                ${sub}
                <ul class="price-list">${rows}</ul>
                ${note}
                <a class="btn" target="_blank" rel="noopener noreferrer" href="${wa('Hello Debonair Salon, I would like to enquire about ' + group.title + ' for ' + audience + '. Please share booking details.')}">Call on WhatsApp</a>
              </article>`
            );
          });
        }
      }
    };

    tabs.forEach((tab) =>
      tab.addEventListener('click', () => {
        tabs.forEach((t) => {
          t.setAttribute('aria-selected', String(t === tab));
          t.tabIndex = t === tab ? 0 : -1;
        });
        render(tab.dataset.group);
        history.replaceState(null, '', '#' + tab.dataset.group);
      })
    );

    const selected = location.hash.replace('#', '');
    (tabs.find((t) => t.dataset.group === selected) || tabs[0])?.click();
  }

  // Scroll Animations / Observer
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const targets = document.querySelectorAll(
      '.story-grid, .section-top, .feature-tile, .experience-layout, .visit-layout, .closing-cta .container, .split, .service-photo-stage, .branch'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px 30px 0px' }
    );
    targets.forEach((el) => {
      el.classList.add('reveal-ready');
      observer.observe(el);
    });
  }

  // Contact Page Form Logic
  if (page === 'contact') {
    const form = document.getElementById('appointment-form');
    if (form) {
      const date = form.elements.date;
      const now = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Karachi',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).format(new Date());

      if (date) date.min = now;

      document.querySelectorAll('[data-branch]').forEach((b) =>
        b.addEventListener('click', () => {
          if (form.elements.branch) {
            form.elements.branch.value = b.dataset.branch;
          }
        })
      );

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const status = document.getElementById('form-status');
        if (status) status.textContent = '';

        if (!form.reportValidity()) return;

        const f = form.elements;
        const phone = f.phone.value.replace(/[^0-9]/g, '');

        if (phone.length < 10 || phone.length > 15) {
          if (status) status.textContent = 'Enter a valid phone/WhatsApp number (10–15 digits).';
          f.phone.focus();
          return;
        }

        if (f.date.value < now) {
          if (status) status.textContent = 'Please select today or a future date in Karachi.';
          f.date.focus();
          return;
        }

        const msg = `Hello Debonair Salon, I would like to request an appointment.\n\nName: ${f.customer.value.trim()}\nPhone/WhatsApp: ${f.phone.value.trim()}\nPreferred Service: ${f.service.value}\nPreferred Date: ${f.date.value}\nPreferred Time: ${f.time.value}\nBranch: ${f.branch.value}\n\nPlease confirm availability. Thank you.`;

        const opened = window.open(wa(msg), '_blank', 'noopener,noreferrer');
        if (status) {
          status.textContent = 'Please send the prepared message in WhatsApp. Your appointment is confirmed only after our team replies.';
        }

        if (!opened) {
          const link = document.getElementById('manual-wa');
          if (link) {
            link.href = wa(msg);
            link.classList.remove('hidden');
          }
        }
      });
    }
  }
})();