/**
 * Debonair Salon - Core Application Logic
 * Branch selection entry gate modal, dynamic personalization, service catalog rendering & bookings
 */
(() => {
  // Master Branch Directory & Verified Credentials
  const BRANCHES = {
    bukhari: {
      key: 'bukhari',
      badge: 'BRANCH 01',
      shortName: 'Bukhari Branch',
      fullName: 'Debonair Salon Bukhari Branch',
      area: 'Bukhari Commercial, DHA Phase 6',
      city: 'Karachi',
      phoneFormatted: '0302 3159374',
      rawPhone: '923023159374',
      hours: '10:30 AM – 11:30 PM',
      mapUrl: 'https://share.google/H75xiZkRyY7kfpgSU'
    },
    seher: {
      key: 'seher',
      badge: 'BRANCH 02',
      shortName: 'Seher Commercial Branch',
      fullName: 'Debonair Salon Seher Commercial Branch',
      area: 'Seher Commercial, DHA Phase 7',
      city: 'Karachi',
      phoneFormatted: '0307 0881490',
      rawPhone: '923070881490',
      hours: '10:30 AM – 11:30 PM',
      mapUrl: 'https://share.google/ngBiQtd1FlEuitcjI'
    },
    shaheed: {
      key: 'shaheed',
      badge: 'BRANCH 03',
      shortName: 'Shaheed-e-Millat Branch',
      fullName: 'Debonair Salon Shaheed-e-Millat Branch',
      area: 'Shaheed-e-Millat Road',
      city: 'Karachi',
      phoneFormatted: '0302 2469512',
      rawPhone: '923022469512',
      hours: '10:30 AM – 11:30 PM',
      mapUrl: 'https://share.google/5Sy5ObxdRhe7OUbqG'
    }
  };

  const STORAGE_KEY = 'debonair_selected_branch';

  const getSelectedBranchKey = () => {
    try {
      const val = localStorage.getItem(STORAGE_KEY);
      if (val && BRANCHES[val]) return val;
    } catch (_) {}
    return null;
  };

  const getSelectedBranch = () => {
    const k = getSelectedBranchKey();
    return k ? BRANCHES[k] : null;
  };

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[ch]));

  const wa = (message, branchKey) => {
    const b = (branchKey && BRANCHES[branchKey]) || getSelectedBranch() || BRANCHES.bukhari;
    return `https://wa.me/${b.rawPhone}?text=` + encodeURIComponent(message);
  };

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
        <button class="header-branch-pill" id="header-branch-trigger" type="button" aria-label="Branch location selector">
          <span class="branch-pill-pin" aria-hidden="true">📍</span>
          <span class="branch-pill-text" id="header-branch-name">Select Branch</span>
          <span class="branch-pill-action">Change</span>
        </button>
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
    const cur = getSelectedBranch() || BRANCHES.bukhari;
    footerRoot.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="brand" href="index.html">DEBONAIR SALON<small>THE STYLE YOU DESIRE</small></a>
            <p>Grooming, beauty and special-occasion care across Karachi.</p>
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
              <a id="footer-wa-link" href="https://wa.me/${cur.rawPhone}" target="_blank" rel="noopener">WhatsApp: ${cur.phoneFormatted} (${cur.shortName})</a>
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

  // Branch Selection Gate Modal Management
  function ensureBranchModal() {
    let modal = document.getElementById('branch-gate-modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'branch-gate-modal';
    modal.className = 'branch-modal-overlay';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'branch-modal-title');

    modal.innerHTML = `
      <div class="branch-modal-dialog">
        <button type="button" class="branch-modal-close" id="branch-modal-close-btn" aria-label="Close branch selector">✕</button>
        <div class="branch-modal-header">
          <span class="eyebrow">Debonair Salon · Karachi</span>
          <h2 id="branch-modal-title">SELECT YOUR PREFERRED BRANCH</h2>
          <p class="branch-modal-desc">
            Please choose your preferred branch to enter. Your selection personalizes service pricing, timings, direct WhatsApp booking, and location guidance across the salon website.
          </p>
        </div>

        <div class="branch-modal-cards">
          ${Object.values(BRANCHES).map((b) => `
            <div class="branch-modal-item" data-branch-choice="${b.key}" tabindex="0" role="button" aria-label="Select ${b.fullName}">
              <div class="modal-item-top">
                <span class="modal-item-badge">${b.badge}</span>
                <span class="modal-item-active-tag">Active</span>
              </div>
              <h3>${b.shortName}</h3>
              <p class="modal-item-area">${b.area}</p>
              <div class="modal-item-details">
                <div class="modal-detail-row">
                  <span class="detail-icon" aria-hidden="true">🕒</span>
                  <span><strong>Hours:</strong> ${b.hours}</span>
                </div>
                <div class="modal-detail-row">
                  <span class="detail-icon" aria-hidden="true">💬</span>
                  <span><strong>WhatsApp:</strong> ${b.phoneFormatted}</span>
                </div>
              </div>
              <button type="button" class="btn fill modal-item-select-btn" data-choose-branch="${b.key}">
                Select ${b.shortName}
              </button>
            </div>
          `).join('')}
        </div>

        <div class="branch-modal-footer">
          <span>You can switch branches at any time from the top navigation bar or the Karachi locations section.</span>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#branch-modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (getSelectedBranchKey()) {
          closeBranchModal();
        }
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal && getSelectedBranchKey()) {
        closeBranchModal();
      }
    });

    modal.querySelectorAll('[data-choose-branch], [data-branch-choice]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const choice = el.dataset.chooseBranch || el.dataset.branchChoice || el.closest('[data-branch-choice]')?.dataset.branchChoice;
        if (choice && BRANCHES[choice]) {
          setBranch(choice);
        }
      });

      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const choice = el.dataset.chooseBranch || el.dataset.branchChoice;
          if (choice && BRANCHES[choice]) {
            setBranch(choice);
          }
        }
      });
    });

    return modal;
  }

  function openBranchModal(isForced = false) {
    const modal = ensureBranchModal();
    const currentKey = getSelectedBranchKey();

    const closeBtn = modal.querySelector('#branch-modal-close-btn');
    if (closeBtn) {
      closeBtn.style.display = (!currentKey || isForced) ? 'none' : 'flex';
    }

    modal.querySelectorAll('.branch-modal-item').forEach((item) => {
      const isSel = item.dataset.branchChoice === currentKey;
      item.classList.toggle('is-selected', isSel);
      const btn = item.querySelector('.modal-item-select-btn');
      if (btn) {
        btn.textContent = isSel ? '✓ Current Branch' : `Select ${BRANCHES[item.dataset.branchChoice].shortName}`;
      }
    });

    modal.classList.add('is-open');
    document.documentElement.classList.add('branch-gate-locked');
    document.body.classList.add('branch-gate-locked');
  }

  function closeBranchModal() {
    const modal = document.getElementById('branch-gate-modal');
    if (modal) {
      modal.classList.remove('is-open');
    }
    document.documentElement.classList.remove('branch-gate-locked');
    document.body.classList.remove('branch-gate-locked');
  }

  function setBranch(branchKey) {
    if (!BRANCHES[branchKey]) return;
    try {
      localStorage.setItem(STORAGE_KEY, branchKey);
    } catch (_) {}
    applyBranch(branchKey);
    closeBranchModal();
  }

  function applyBranch(branchKey) {
    const branch = BRANCHES[branchKey] || BRANCHES.bukhari;

    // 1. Header Navigation Pill
    const pillText = document.getElementById('header-branch-name');
    if (pillText) {
      pillText.textContent = branch.shortName;
    }
    const pillTrigger = document.getElementById('header-branch-trigger');
    if (pillTrigger) {
      pillTrigger.setAttribute('title', `Selected branch: ${branch.fullName}. Click to change branch.`);
      pillTrigger.classList.add('has-selection');
    }

    // 2. Floating WhatsApp button
    const floatWa = document.querySelector('.float-wa');
    if (floatWa) {
      const floatMsg = `Hello Debonair Salon (${branch.shortName}), I would like to enquire about your services.`;
      floatWa.href = `https://wa.me/${branch.rawPhone}?text=` + encodeURIComponent(floatMsg);
      floatWa.setAttribute('aria-label', `Enquire on WhatsApp (${branch.shortName} - ${branch.phoneFormatted})`);
      floatWa.setAttribute('title', `WhatsApp ${branch.shortName}: ${branch.phoneFormatted}`);
    }

    // 3. Footer WhatsApp Link
    const footerWa = document.getElementById('footer-wa-link');
    if (footerWa) {
      const footMsg = `Hello Debonair Salon (${branch.shortName}), I would like to enquire about your services.`;
      footerWa.href = `https://wa.me/${branch.rawPhone}?text=` + encodeURIComponent(footMsg);
      footerWa.textContent = `WhatsApp: ${branch.phoneFormatted} (${branch.shortName})`;
    }

    // 4. General [data-wa] links
    document.querySelectorAll('[data-wa]').forEach((a) => {
      a.href = `https://wa.me/${branch.rawPhone}?text=` + encodeURIComponent(a.dataset.wa);
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    });

    // 5. Homepage: #active-branch-spotlight
    const spotlight = document.getElementById('active-branch-spotlight');
    if (spotlight) {
      const nameEl = document.getElementById('spotlight-branch-name');
      const detailsEl = document.getElementById('spotlight-branch-details');
      const waBtn = document.getElementById('spotlight-wa-btn');

      if (nameEl) nameEl.textContent = branch.fullName;
      if (detailsEl) {
        detailsEl.textContent = `${branch.city} · ${branch.area} · Hours: ${branch.hours} · WhatsApp: ${branch.phoneFormatted}`;
      }
      if (waBtn) {
        waBtn.href = `https://wa.me/${branch.rawPhone}?text=` + encodeURIComponent(`Hello Debonair Salon, I would like to enquire about ${branch.shortName}.`);
        waBtn.textContent = `Message ${branch.shortName}`;
      }
    }

    // 6. Highlight active cards on Home (.visit-card) and Contact (.branch)
    document.querySelectorAll('[data-branch-key]').forEach((card) => {
      const isMatch = card.dataset.branchKey === branchKey;
      card.classList.toggle('is-active-branch', isMatch);

      let badge = card.querySelector('.branch-active-pill');
      if (isMatch) {
        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'branch-active-pill';
          badge.textContent = '★ SELECTED BRANCH';
          const title = card.querySelector('h3');
          if (title) title.insertAdjacentElement('beforebegin', badge);
        }
      } else if (badge) {
        badge.remove();
      }

      const selectBtn = card.querySelector('[data-set-branch]');
      if (selectBtn) {
        if (isMatch) {
          selectBtn.textContent = '✓ CURRENT BRANCH';
          selectBtn.classList.add('fill');
        } else {
          selectBtn.textContent = 'SELECT THIS BRANCH';
          selectBtn.classList.remove('fill');
        }
      }
    });

    // 7. Contact Page: Auto-select in form dropdown
    const formBranchSelect = document.getElementById('branch');
    if (formBranchSelect) {
      formBranchSelect.value = branch.fullName;
    }

    // 8. Services Page: Refresh Deal & Pricing WhatsApp buttons
    document.querySelectorAll('.deal-card').forEach((card) => {
      const heading = card.querySelector('h3');
      const waLink = card.querySelector('.deal-action-row a.btn');
      const priceVal = card.querySelector('.deal-price-val');
      if (heading && waLink) {
        const label = heading.textContent.trim();
        const priceText = priceVal ? ` (${priceVal.textContent.trim()})` : '';
        const msg = `Hello Debonair Salon (${branch.shortName}), I would like to book or enquire about ${label}${priceText}. Please confirm availability.`;
        waLink.href = `https://wa.me/${branch.rawPhone}?text=` + encodeURIComponent(msg);
      }
    });

    document.querySelectorAll('.price-card').forEach((card) => {
      const heading = card.querySelector('h3');
      const waLink = card.querySelector('a.btn');
      if (heading && waLink) {
        const msg = `Hello Debonair Salon (${branch.shortName}), I would like to enquire about ${heading.textContent.trim()}. Please share booking details.`;
        waLink.href = `https://wa.me/${branch.rawPhone}?text=` + encodeURIComponent(msg);
      }
    });
  }

  // Bind Header Branch Trigger & Page Triggers
  const headerTrigger = document.getElementById('header-branch-trigger');
  if (headerTrigger) {
    headerTrigger.addEventListener('click', () => openBranchModal(false));
  }

  const spotlightChangeTrigger = document.getElementById('spotlight-change-trigger');
  if (spotlightChangeTrigger) {
    spotlightChangeTrigger.addEventListener('click', () => openBranchModal(false));
  }

  document.querySelectorAll('[data-set-branch]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.setBranch;
      if (target && BRANCHES[target]) {
        setBranch(target);
      }
    });
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
        const activeBranch = getSelectedBranch() || BRANCHES.bukhari;

        if (type === 'deals' && cat && cat.deals) {
          cat.deals.forEach((deal) => {
            const label = `Debonair Deal ${String(deal.number).padStart(2, '0')}`;
            const includes = deal.inclusions.map((name) => `<li>${escapeHtml(name)}</li>`).join('');
            const priceHtml = deal.price
              ? `<div class="deal-price-block"><span class="deal-price-label">Price</span><strong class="deal-price-val">${escapeHtml(deal.price)}</strong></div>`
              : '';
            const waMsg = deal.price
              ? `Hello Debonair Salon (${activeBranch.shortName}), I would like to book or enquire about ${label} (${deal.price}). Please confirm availability.`
              : `Hello Debonair Salon (${activeBranch.shortName}), please share the inclusions, price and availability for ${label}.`;
            area.insertAdjacentHTML(
              'beforeend',
              `<article class="service-card deal-card">
                <span class="eyebrow">The Debonair Collection</span>
                <h3>${label}</h3>
                <span class="deal-includes-title">Package Includes</span>
                <ul class="deal-inclusions">${includes}</ul>
                <div class="deal-action-row">
                  ${priceHtml}
                  <a class="btn" target="_blank" rel="noopener noreferrer" href="${wa(waMsg, activeBranch.key)}">Call on WhatsApp</a>
                </div>
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
                <a class="btn" target="_blank" rel="noopener noreferrer" href="${wa('Hello Debonair Salon (' + activeBranch.shortName + '), I would like to enquire about ' + group.title + ' for ' + audience + '. Please share booking details.', activeBranch.key)}">Call on WhatsApp</a>
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
          const matched = Object.values(BRANCHES).find((x) => x.fullName === b.dataset.branch);
          if (matched) {
            setBranch(matched.key);
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

        let targetPhone = getSelectedBranch()?.rawPhone || '923023159374';
        if (f.branch && f.branch.value) {
          const matchedBranch = Object.values(BRANCHES).find((b) => b.fullName === f.branch.value);
          if (matchedBranch) targetPhone = matchedBranch.rawPhone;
        }

        const msg = `Hello Debonair Salon, I would like to request an appointment.\n\nName: ${f.customer.value.trim()}\nPhone/WhatsApp: ${f.phone.value.trim()}\nPreferred Service: ${f.service.value}\nPreferred Date: ${f.date.value}\nPreferred Time: ${f.time.value}\nBranch: ${f.branch.value}\n\nPlease confirm availability. Thank you.`;

        const waUrl = `https://wa.me/${targetPhone}?text=` + encodeURIComponent(msg);
        const opened = window.open(waUrl, '_blank', 'noopener,noreferrer');
        if (status) {
          status.textContent = 'Please send the prepared message in WhatsApp. Your appointment is confirmed only after our team replies.';
        }

        if (!opened) {
          const link = document.getElementById('manual-wa');
          if (link) {
            link.href = waUrl;
            link.classList.remove('hidden');
          }
        }
      });
    }
  }

  // Initial State Evaluation: Force modal on initial visit if no branch selected
  const initialBranchKey = getSelectedBranchKey();
  if (!initialBranchKey) {
    // Brand new visitor: lock website and display branch selection gate card
    openBranchModal(true);
  } else {
    // Returning visitor: apply existing preference across all components
    applyBranch(initialBranchKey);
  }
})();