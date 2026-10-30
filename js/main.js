/**
 * SONA PORTFOLIO - MAIN INTERACTION & ENGINE
 */

// Global state variables
let activeSkillCategory = 'all';
let skillSearchQuery = '';
let activeProjectCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeroStats();
  initHeroCodeRunner();
  renderAboutSection();
  renderSkillsSection();
  renderProjectsSection();
  renderTimelineSection();
  renderAchievements();
  renderHackathons();
  renderCertifications();
  initCertificateModal();
  initContactForm();
  initScrollSpyAndNav();
  initScrollAnimations();
  initLocalClock();
});

/* ==========================================================================
   1. THEME MANAGEMENT - FIXED PASTEL BLUE & MINT GREEN PALETTE
   ========================================================================== */
function initTheme() {
  document.documentElement.removeAttribute('data-theme');
  try {
    localStorage.removeItem('sona_theme');
  } catch (e) {}
}
function setTheme() {
  document.documentElement.removeAttribute('data-theme');
}
window.setTheme = setTheme;

/* ==========================================================================
   2. HERO METRICS & STATS DYNAMIC BINDING
   ========================================================================== */
function initHeroStats() {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // Dynamically set projects count from projects array
  const projectCountEl = document.getElementById('hero-projects-val');
  if (projectCountEl && data.projects) {
    projectCountEl.textContent = data.projects.length;
  }

  // Dynamically set certifications count from certifications array
  const certsCountEl = document.getElementById('hero-certs-val');
  if (certsCountEl && data.certifications) {
    certsCountEl.textContent = data.certifications.length;
  }

  // Dynamically set internships count from experience array
  const internshipsCountEl = document.getElementById('hero-internships-val');
  if (internshipsCountEl && data.experience) {
    internshipsCountEl.textContent = data.experience.length;
  }

  // Dynamically set CGPA
  const cgpaEl = document.getElementById('hero-cgpa-val');
  if (cgpaEl && data.education && data.education[0] && data.education[0].cgpa) {
    const match = data.education[0].cgpa.match(/[\d.]+/);
    if (match) cgpaEl.textContent = match[0];
  }
}

/* ==========================================================================
   3. HERO CODE RUNNER (INTERACTIVE MINI-IDE)
   ========================================================================== */
function initHeroCodeRunner() {
  const runBtn = document.getElementById('hero-run-code-btn');
  const outputText = document.getElementById('hero-code-output');

  if (!runBtn || !outputText) return;

  runBtn.addEventListener('click', () => {
    runBtn.disabled = true;
    runBtn.innerHTML = `<span>⏳ Running Script...</span>`;
    outputText.textContent = "Loading Python 3.11 environment & initializing model pipelines...";

    setTimeout(() => {
      runBtn.disabled = false;
      runBtn.innerHTML = `<span>▶ Run Script</span>`;
      outputText.innerHTML = `✔ Sona Rose Devasia is ready to build &amp; innovate! [Execution: 12ms]`;
      showToast("Python script executed successfully!", "success");
    }, 650);
  });
}

/* ==========================================================================
   4. ABOUT SECTION
   ========================================================================== */
function renderAboutSection() {
  const data = window.PORTFOLIO_DATA;
  const narrativeContainer = document.getElementById('about-narrative-container');
  const pillarsContainer = document.getElementById('about-pillars-container');

  if (narrativeContainer && data.personal.bio) {
    narrativeContainer.innerHTML = data.personal.bio.map(paragraph => `
      <p class="narrative-p">${paragraph}</p>
    `).join('');
  }

  if (pillarsContainer && data.pillars) {
    pillarsContainer.innerHTML = data.pillars.map(p => `
      <div class="pillar-card">
        <div class="pillar-icon-box">
          ${getPillarIcon(p.icon)}
        </div>
        <h4 class="pillar-title">${p.title}</h4>
        <p class="pillar-desc">${p.desc}</p>
      </div>
    `).join('');
  }
}

function getPillarIcon(name) {
  switch (name) {
    case 'cpu': return '⚡';
    case 'layers': return '🌐';
    case 'sparkles': return '🤖';
    case 'server': return '☁️';
    default: return '💻';
  }
}

/* ==========================================================================
   5. SKILLS SECTION WITH SEARCH & FILTER
   ========================================================================== */

function renderSkillsSection() {
  const tabsContainer = document.getElementById('skills-tabs');
  const searchInput = document.getElementById('skills-search-input');
  const gridContainer = document.getElementById('skills-grid');

  if (!gridContainer) return;

  // Render Filter Tabs
  if (tabsContainer) {
    tabsContainer.innerHTML = window.PORTFOLIO_DATA.skills.categories.map(cat => `
      <button class="skill-tab-btn ${cat.id === activeSkillCategory ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.name}
      </button>
    `).join('');

    tabsContainer.querySelectorAll('.skill-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        tabsContainer.querySelectorAll('.skill-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeSkillCategory = btn.getAttribute('data-cat');
        filterSkills();
      });
    });
  }

  // Search input listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      skillSearchQuery = e.target.value.toLowerCase().trim();
      filterSkills();
    });
  }

  filterSkills();
}

function filterSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  const data = window.PORTFOLIO_DATA.skills;
  const clusters = data.clusters || [];

  // Filter clusters based on active category
  let relevantClusters = clusters;
  if (activeSkillCategory !== 'all') {
    relevantClusters = clusters.filter(c => c.id === activeSkillCategory);
  }

  // Filter skills inside clusters if search query is present
  if (skillSearchQuery) {
    relevantClusters = relevantClusters.map(cluster => {
      const matchingSkills = cluster.skills.filter(s =>
        s.name.toLowerCase().includes(skillSearchQuery) ||
        cluster.title.toLowerCase().includes(skillSearchQuery)
      );
      return { ...cluster, skills: matchingSkills };
    }).filter(c => c.skills.length > 0);
  }

  if (relevantClusters.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle); color: var(--text-muted);">No technical competencies match your search query.</div>`;
    return;
  }

  grid.innerHTML = relevantClusters.map(cluster => `
    <div class="skills-cluster-card card-fade-in active">
      <div class="cluster-header">
        <div class="cluster-title-wrap">
          <div class="cluster-icon-box">${getClusterIconSvg(cluster.id)}</div>
          <div>
            <h3 class="cluster-title">${cluster.title}</h3>
            <p class="cluster-subtitle">${cluster.summary}</p>
          </div>
        </div>
      </div>

      <div class="cluster-skills-wrap">
        ${cluster.skills.map(s => `
          <div class="skill-pill-item">
            <span class="skill-pill-pip"></span>
            <span class="skill-pill-name">${s.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function getClusterIconSvg(id) {
  switch (id) {
    case 'programming':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    case 'ai_ml':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`;
    case 'web_frameworks':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
    case 'database_tools':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;
    case 'concepts_soft':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`;
    default:
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;
  }
}

/* ==========================================================================
   6. PROJECTS SECTION WITH CATEGORY FILTER
   ========================================================================== */

function renderProjectsSection() {
  const filterContainer = document.getElementById('projects-filter-bar');
  if (filterContainer) {
    const buttons = filterContainer.querySelectorAll('.project-filter-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeProjectCategory = btn.getAttribute('data-filter');
        filterProjects();
      });
    });
  }

  // Layout switcher (2 vs 3 in a row)
  const layoutToggle = document.getElementById('projects-layout-toggle');
  if (layoutToggle) {
    const toggleBtns = layoutToggle.querySelectorAll('.layout-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cols = btn.getAttribute('data-cols');
        const featuredList = document.getElementById('featured-projects-container');
        if (featuredList) {
          if (cols === '2') {
            featuredList.classList.add('grid-cols-2');
            featuredList.classList.remove('grid-cols-3');
          } else {
            featuredList.classList.add('grid-cols-3');
            featuredList.classList.remove('grid-cols-2');
          }
        }
      });
    });
  }

  filterProjects();
}

function filterProjects() {
  const featuredList = document.getElementById('featured-projects-container');
  const secondaryGrid = document.getElementById('secondary-projects-container');
  const allProjects = window.PORTFOLIO_DATA.projects;

  const filtered = allProjects.filter(p => {
    if (activeProjectCategory === 'all') return true;
    return p.category === activeProjectCategory;
  });

  const featured = filtered.filter(p => p.featured);
  const secondary = filtered.filter(p => !p.featured);

  if (featuredList) {
    if (featured.length === 0) {
      featuredList.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.95rem;">
          No projects found in this category.
        </div>`;
    } else {
      featuredList.innerHTML = featured.map(p => `
        <div class="featured-project-card card-fade-in active">
          <div class="project-media-col" onclick="window.openProjectModal('${p.id}')" style="cursor: pointer;" title="Click to view case study & video">
            <img src="${p.image}" alt="${p.title}" class="project-mockup-img" onerror="this.onerror=null; this.src='assets/images/project-nutrition.svg';" />
            ${p.videos && p.videos.length > 1 ? `
              <div class="project-video-tag-overlay" onclick="event.stopPropagation(); window.openProjectModal('${p.id}')" title="2 Demos Available: User & Admin">
                <span>▶ 2 Demos</span>
              </div>
            ` : (p.video || (p.videos && p.videos.length === 1)) ? `
              <div class="project-video-tag-overlay" onclick="event.stopPropagation(); window.openFullscreenVideo('${p.video || p.videos[0].src}')" title="Play Fullscreen Video">
                <span>▶ Video</span>
              </div>
            ` : (p.demo ? `
              <a href="${p.demo}" target="_blank" class="project-video-tag-overlay" onclick="event.stopPropagation();" title="Open Live Site in New Tab">
                <span>🌐 Live Site</span>
              </a>
            ` : '')}
          </div>
          <div class="project-details-col">
            <h3 class="project-title" onclick="window.openProjectModal('${p.id}')" style="cursor: pointer;" title="Click to view case study">${p.title}</h3>
            <p class="project-description">${p.tagline}</p>

            <div class="project-tech-tags">
              ${(p.tech || []).slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
              ${(p.tech && p.tech.length > 4) ? `<span class="tech-tag" style="opacity: 0.75;">+${p.tech.length - 4}</span>` : ''}
            </div>

            <div class="project-actions-row">
              <button class="btn btn-primary btn-sm" onclick="window.openProjectModal('${p.id}')" title="View Project Case Study & Details">
                <span>📖 Case Study</span>
              </button>
              ${p.videos && p.videos.length > 1 ? `
                <button class="btn btn-secondary btn-sm" onclick="window.openFullscreenVideo('${p.videos[0].src}', '${p.videos[0].title}')" title="${p.videos[0].title}">
                  <span>▶ User</span>
                </button>
                <button class="btn btn-secondary btn-sm" onclick="window.openFullscreenVideo('${p.videos[1].src}', '${p.videos[1].title}')" title="${p.videos[1].title}">
                  <span>▶ Admin</span>
                </button>
              ` : (p.video || (p.videos && p.videos.length === 1)) ? `
                <button class="btn btn-secondary btn-sm" onclick="window.openFullscreenVideo('${p.video || p.videos[0].src}')" title="Play Fullscreen Video">
                  <span>▶ Video</span>
                </button>
                ${p.demo ? `
                  <a href="${p.demo}" target="_blank" class="btn btn-secondary btn-sm" title="Launch Live Web App in New Tab">
                    <span>🌐 Live</span>
                  </a>
                ` : ''}
              ` : (p.demo ? `
                <a href="${p.demo}" target="_blank" class="btn btn-secondary btn-sm" title="Launch Live Web App in New Tab">
                  <span>🌐 Live Site</span>
                </a>
              ` : '')}
              <a href="${p.github || 'https://github.com/sonarosedevasia'}" target="_blank" class="btn btn-outline btn-sm" title="View GitHub Profile">
                <span>🐙 Code</span>
              </a>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  const secHeading = document.getElementById('secondary-projects-heading');
  if (secHeading) {
    secHeading.style.display = secondary.length === 0 ? 'none' : 'block';
  }

  if (secondaryGrid) {
    if (secondary.length === 0) {
      secondaryGrid.innerHTML = '';
    } else {
      secondaryGrid.innerHTML = secondary.map(p => `
        <div class="secondary-project-card card-fade-in active">
          <div>
            <div class="sec-project-thumb">
              <img src="${p.image}" alt="${p.title}" onerror="this.onerror=null; this.src='assets/images/project-nutrition.svg';" />
            </div>
            <div style="display:flex; gap:6px; margin-bottom:0.5rem; flex-wrap:wrap;">
              ${p.badges.map(b => `<span class="badge badge-sage">${b}</span>`).join('')}
            </div>
            <h4 style="font-size:1.2rem; margin-bottom:0.4rem; color:var(--text-heading);">${p.title}</h4>
            <p style="color:var(--text-secondary); font-size:0.88rem; line-height:1.6; margin-bottom:1rem;">${p.tagline}</p>
          </div>

          <div>
            <div class="project-tech-tags" style="margin-bottom:1.25rem;">
              ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <div style="display:flex; gap:0.5rem;">
              <button class="btn btn-secondary btn-sm" style="flex:1;" onclick="window.openProjectModal('${p.id}')">
                <span>Case Study</span>
              </button>
              <a href="${p.github}" target="_blank" class="btn btn-outline btn-sm">
                <span>🐙</span>
              </a>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

/* ==========================================================================
   7. CAREER & EDUCATION TIMELINES
   ========================================================================== */
function renderTimelineSection() {
  const expContainer = document.getElementById('experience-timeline-container');
  const eduContainer = document.getElementById('education-timeline-container');
  const data = window.PORTFOLIO_DATA;

  if (expContainer && data.experience) {
    expContainer.innerHTML = data.experience.map(e => `
      <div class="timeline-card experience-card reveal">
        <div class="timeline-card-main">
          ${e.coverImage ? `
            <div class="timeline-cover-wrap" onclick="window.openCertificateModal('${e.coverImage}', '${e.company} — Certificate', 'Internship Certificate')">
              <img src="${e.coverImage}" alt="${e.company} Certificate Cover" class="timeline-cover-img" loading="lazy" />
              <div class="timeline-cover-overlay">
                <span class="btn btn-primary btn-sm">🔍 View Certificate</span>
              </div>
            </div>
          ` : ''}
          <div style="margin-bottom: 0.5rem;">
            <span class="timeline-period-badge">${e.period} &bull; ${e.type}</span>
          </div>
          <h4 class="timeline-role-title">${e.role}</h4>
          <div class="timeline-org">${e.company} &bull; ${e.location}</div>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.85rem; line-height: 1.65;">${e.summary}</p>
          <ul class="timeline-bullet-list">
            ${e.achievements.map(ach => `<li class="timeline-bullet-item">${ach}</li>`).join('')}
          </ul>
        </div>
        ${e.certificates && e.certificates.length > 0 ? `
          <div class="timeline-cert-strip">
            <div style="font-size:0.75rem; font-family:var(--font-mono); color:var(--text-muted); text-transform:uppercase; margin-bottom:0.4rem;">Verified Credentials:</div>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
              ${e.certificates.map(c => `
                <button type="button" class="btn btn-secondary btn-sm" onclick="window.openCertificateModal('${c.image}', '${c.title}', '${c.badge}')" style="font-size:0.8rem; padding:0.35rem 0.75rem;">
                  <span>📜 ${c.badge}</span>
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `).join('');
  }

  if (eduContainer && data.education) {
    eduContainer.innerHTML = data.education.map(edu => `
      <div class="timeline-card education-card reveal">
        <div class="timeline-card-main">
          <div class="edu-card-header">
            <span class="timeline-period-badge" style="margin-bottom: 0;">${edu.duration}</span>
            <span class="badge badge-sage" style="font-size: 0.74rem;">${edu.badge}</span>
          </div>
          <h4 class="timeline-role-title">${edu.degree}</h4>
          <div class="timeline-org">${edu.institution}</div>
          <div class="edu-score-pill">
            <span style="color: var(--accent-primary);">★</span>
            <span>Score / CGPA: <strong>${edu.cgpa}</strong></span>
          </div>
          <ul class="timeline-bullet-list">
            ${edu.highlights.map(h => `<li class="timeline-bullet-item">${h}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   8. ACHIEVEMENTS SECTION
   ========================================================================== */
function renderAchievements() {
  const container = document.getElementById('achievements-container');
  if (!container) return;

  const ach = window.PORTFOLIO_DATA.achievements || [];
  container.innerHTML = ach.map(item => {
    const safeTitle = (item.title || '').replace(/'/g, "\\'");
    const safeBadge = (item.badge || '').replace(/'/g, "\\'");

    const coverHtml = item.coverImage ? `
      <div class="cert-cover-wrap" onclick="window.openCertificateModal('${item.coverImage}', '${safeTitle}', '${safeBadge}')" title="Click to view award">
        <img src="${item.coverImage}" alt="${item.title} Cover" class="cert-cover-img" loading="lazy" />
        <div class="cert-cover-overlay">
          <span class="btn btn-primary btn-sm">🔍 View Award</span>
        </div>
      </div>
    ` : '';

    const stripHtml = (item.certificates && item.certificates.length > 0) ? `
      <div class="cert-strip-wrap">
        <div class="cert-strip-label">Verified Recognition:</div>
        <div class="cert-strip-buttons">
          ${item.certificates.map(c => {
            const certSafeTitle = (c.title || '').replace(/'/g, "\\'");
            const certSafeBadge = (c.badge || '').replace(/'/g, "\\'");
            return `
              <button type="button" class="btn btn-secondary btn-sm" onclick="window.openCertificateModal('${c.image}', '${certSafeTitle}', '${certSafeBadge}')" style="font-size:0.8rem; padding:0.35rem 0.75rem;">
                <span>📜 ${c.badge}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    ` : '';

    return `
      <div class="achievement-card cert-achievement-card reveal">
        ${coverHtml}
        <div>
          <div class="achievement-top">
            <span class="achievement-icon">🏆</span>
            <span class="badge badge-amber">${item.badge}</span>
          </div>
          <h4 class="achievement-title" style="margin-top: 0.4rem;">${item.title}</h4>
          <div style="color: var(--accent-secondary); font-size: 0.88rem; font-weight: 600; margin-bottom: 0.4rem;">
            ${item.organizer ? item.organizer + ' &bull; ' : ''}${item.year}
          </div>
          <p class="achievement-desc">${item.desc}</p>
        </div>
        ${stripHtml}
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   8.2. HACKATHONS SECTION
   ========================================================================== */
function renderHackathons() {
  const container = document.getElementById('hackathons-container');
  if (!container) return;

  const hackathons = window.PORTFOLIO_DATA.hackathons || [];
  container.innerHTML = hackathons.map(h => `
    <div class="hackathon-card reveal">
      <div class="hackathon-thumb-wrap" onclick="window.openCertificateModal('${h.certificate}', '${h.title}', '${h.badge}')">
        <img src="${h.certificate}" alt="${h.title} Certificate" class="hackathon-thumb-img" loading="lazy" />
        <div class="hackathon-thumb-overlay">
          <span class="btn btn-primary btn-sm">🔍 View Certificate</span>
        </div>
      </div>
      <div class="hackathon-card-body">
        <div>
          <div class="hackathon-card-top">
            <span class="badge badge-olive">${h.badge}</span>
            <span class="hackathon-date">${h.date}</span>
          </div>
          <h4 class="hackathon-title">${h.title}</h4>
          <div class="hackathon-recognition">${h.award}</div>
          <div class="hackathon-organizer">${h.organizer}</div>
        </div>
        <div class="hackathon-actions">
          <button class="btn btn-secondary btn-sm" style="width: 100%;" onclick="window.openCertificateModal('${h.certificate}', '${h.title}', '${h.badge}')">
            <span>📜 View Certificate</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function initCertificateModal() {
  const overlay = document.getElementById('cert-viewer-modal-overlay');
  const closeBtn = document.getElementById('cert-viewer-modal-close');

  window.openCertificateModal = function(imageSrc, title, badge) {
    const img = document.getElementById('cert-modal-img');
    const titleEl = document.getElementById('cert-modal-title');
    const badgeEl = document.getElementById('cert-modal-badge');
    const openLink = document.getElementById('cert-modal-open-link');

    if (!overlay || !img) return;

    img.src = imageSrc;
    img.alt = title;
    if (titleEl) titleEl.textContent = title;
    if (badgeEl) badgeEl.textContent = badge || 'Verified Certificate';
    if (openLink) openLink.href = imageSrc;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeCertificateModal = function() {
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', window.closeCertificateModal);
  }

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) window.closeCertificateModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
      window.closeCertificateModal();
    }
  });
}

/* ==========================================================================
   8.5. CERTIFICATIONS SECTION
   ========================================================================== */
function renderCertifications() {
  const container = document.getElementById('certifications-container');
  if (!container) return;

  const certs = window.PORTFOLIO_DATA.certifications || [];
  container.innerHTML = certs.map(c => {
    const safeTitle = (c.issuer + ' — ' + c.title).replace(/'/g, "\\'");
    const safeBadge = (c.badge || '').replace(/'/g, "\\'");

    // Top Hero Cover (or placeholder if image pending)
    const coverHtml = c.coverImage ? `
      <div class="cert-cover-wrap" onclick="window.openCertificateModal('${c.coverImage}', '${safeTitle}', '${safeBadge}')" title="Click to view certificate">
        <img src="${c.coverImage}" alt="${c.title} Certificate Cover" class="cert-cover-img" loading="lazy" />
        <div class="cert-cover-overlay">
          <span class="btn btn-primary btn-sm">🔍 View Certificate</span>
        </div>
      </div>
    ` : `
      <div class="cert-cover-placeholder">
        <span class="cert-cover-placeholder-icon">☕</span>
        <div class="cert-cover-placeholder-title">${c.title}</div>
        <span class="badge badge-olive" style="font-size: 0.72rem;">Certificate Pending</span>
      </div>
    `;

    // Bottom Credentials Strip (matching internship card design)
    const stripHtml = (c.certificates && c.certificates.length > 0) ? `
      <div class="cert-strip-wrap">
        <div class="cert-strip-label">Verified Credentials:</div>
        <div class="cert-strip-buttons">
          ${c.certificates.map(item => {
            const itemSafeTitle = (c.issuer + ' — ' + item.title).replace(/'/g, "\\'");
            const itemSafeBadge = (item.badge || '').replace(/'/g, "\\'");
            return `
              <button type="button" class="btn btn-secondary btn-sm" onclick="window.openCertificateModal('${item.image}', '${itemSafeTitle}', '${itemSafeBadge}')" style="font-size:0.8rem; padding:0.35rem 0.75rem;">
                <span>📜 ${item.badge}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    ` : `
      <div class="cert-strip-wrap">
        <div class="cert-strip-label">Credential Status:</div>
        <span class="cert-pending-pill">
          <span>⏳</span> Awaiting Official Certificate Image
        </span>
      </div>
    `;

    return `
      <div class="achievement-card cert-achievement-card reveal">
        ${coverHtml}
        <div>
          <div class="achievement-top">
            <span class="achievement-icon">📜</span>
            <span class="badge badge-emerald">${c.badge}</span>
          </div>
          <h4 class="achievement-title" style="margin-top: 0.4rem;">${c.title}</h4>
          <div style="color: var(--accent-secondary); font-size: 0.88rem; font-weight: 600; margin-bottom: 0.4rem;">
            ${c.issuer} &bull; ${c.year}
          </div>
        </div>
        ${stripHtml}
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   9. CONTACT FORM & INTERACTIVE ACTIONS
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const messageInput = document.getElementById('form-message');
  const counter = document.getElementById('form-char-counter');

  if (messageInput && counter) {
    messageInput.addEventListener('input', () => {
      counter.textContent = `${messageInput.value.length} / 500`;
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        showToast("Please complete all required fields.", "info");
        return;
      }

      // Simulated dispatch
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>⏳ Transmitting message...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        if (counter) counter.textContent = '0 / 500';
        showToast(`Thank you ${name}! Message dispatched successfully.`, "success");
      }, 1200);
    });
  }
}

/* ==========================================================================
   10. SCROLL REVEAL & NAVIGATION SPY
   ========================================================================== */
function initScrollSpyAndNav() {
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navLinksContainer = document.getElementById('nav-links-menu');

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('mobile-open');
      });
    });
  }

  window.addEventListener('scroll', () => {
    // Header shadow on scroll
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  const checkAndReveal = () => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      // Element is visible or partially in viewport or user scrolled past it
      if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) + 50 && rect.bottom >= -50) {
        el.classList.add('active');
      }
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '100px 0px 100px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // Initial check
  checkAndReveal();
  window.addEventListener('scroll', checkAndReveal, { passive: true });
  window.addEventListener('resize', checkAndReveal, { passive: true });
  setTimeout(checkAndReveal, 150);
  setTimeout(checkAndReveal, 500);
  // Universal safety fallback to ensure no section stays hidden
  setTimeout(() => {
    revealElements.forEach(el => el.classList.add('active'));
  }, 800);
}

/* ==========================================================================
   11. UTILITIES: TOAST & COPY TO CLIPBOARD & LOCAL CLOCK
   ========================================================================== */
window.showToast = function(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✔' : 'ℹ'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

window.copyToClipboard = function(text, successMessage) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage || 'Copied to clipboard!', 'success');
    }).catch(() => {
      fallbackCopy(text, successMessage);
    });
  } else {
    fallbackCopy(text, successMessage);
  }
};

function fallbackCopy(text, msg) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  showToast(msg || 'Copied to clipboard!', 'success');
}

function initLocalClock() {
  const clockEl = document.getElementById('live-local-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' IST';
  }

  update();
  setInterval(update, 1000);
}
