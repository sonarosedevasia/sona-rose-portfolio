/**
 * SONA PORTFOLIO - COMMAND PALETTE (CTRL+K / CMD+K)
 * Fast keyboard-first spotlight navigation system.
 */

class CommandPalette {
  constructor() {
    this.overlay = document.getElementById('palette-overlay');
    this.input = document.getElementById('palette-input');
    this.resultsList = document.getElementById('palette-results');
    this.triggerBtn = document.getElementById('cmd-palette-trigger');
    this.closeBtn = document.getElementById('palette-close-btn');
    this.headerCloseBtn = document.getElementById('palette-header-close-btn');

    this.selectedIndex = 0;
    this.items = this.getDefaultItems();
    this.filteredItems = [...this.items];

    this.bindEvents();
  }

  getDefaultItems() {
    return [
      // Sections
      { title: 'Go to Hero / Home', category: 'Navigation', icon: '🏠', action: () => this.scrollTo('#hero') },
      { title: 'Go to About Me', category: 'Navigation', icon: '👤', action: () => this.scrollTo('#about') },
      { title: 'Go to Technical Skills', category: 'Navigation', icon: '⚡', action: () => this.scrollTo('#skills') },
      { title: 'Go to Projects', category: 'Navigation', icon: '🚀', action: () => this.scrollTo('#projects') },
      { title: 'Go to Education', category: 'Navigation', icon: '🎓', action: () => this.scrollTo('#education') },
      { title: 'Go to Experience', category: 'Navigation', icon: '💼', action: () => this.scrollTo('#experience') },
      { title: 'Go to Contact', category: 'Navigation', icon: '📬', action: () => this.scrollTo('#contact') },
      
      // Projects direct jump
      { title: 'View Project: Real-Time Infrastructure Monitoring Platform', category: 'Projects', icon: '📊', action: () => window.openProjectModal('infra_monitoring') },
      { title: 'View Project: Diabetic Foot Ulcer Classification (Deep Learning)', category: 'Projects', icon: '🔬', action: () => window.openProjectModal('dfu_classification') },
      { title: 'View Project: GeoSentinel — LoRa Landslide Early Warning System', category: 'Projects', icon: '📡', action: () => window.openProjectModal('geosentinel') },
      { title: 'View Project: Bot Trainer - NLU Model Trainer & Evaluator', category: 'Projects', icon: '🤖', action: () => window.openProjectModal('bot_trainer') },
      { title: 'View Project: Nutrition Assistant Grocery Store', category: 'Projects', icon: '🥗', action: () => window.openProjectModal('nutrition_assistant') },
      { title: 'View Project: Blood Bank Management System', category: 'Projects', icon: '🩸', action: () => window.openProjectModal('blood_bank') },
      { title: 'View Project: Book Tracker — Personal Library & Reading Manager', category: 'Projects', icon: '📚', action: () => window.openProjectModal('book_tracker') },

      // Hackathons & Certificates direct jump
      { title: 'View Certificate: Smart India Hackathon 2025', category: 'Hackathons', icon: '🏆', action: () => window.openCertificateModal('assets/images/hackathons/smart-india-hackathon-2025.png', 'Smart India Hackathon 2025', 'National Hackathon') },
      { title: 'View Certificate: NASA Space Apps Challenge 2024', category: 'Hackathons', icon: '🚀', action: () => window.openCertificateModal('assets/images/hackathons/nasa-space-apps-2024.jpg', 'NASA International Space Apps Challenge', 'Global Hackathon') },
      { title: 'View Certificate: Hackspiration Hackathon 2024', category: 'Hackathons', icon: '💻', action: () => window.openCertificateModal('assets/images/hackathons/hackspiration-2024.png', 'Hackspiration Hackathon', 'Open Source') },

      // Internship Certificates direct jump
      { title: 'View Certificate: NeST Digital — Completion Cover', category: 'Internships', icon: '💼', action: () => window.openCertificateModal('assets/images/internships/nest-digital-completion-cover.jpg', 'NeST Digital Academy — Certificate of Completion', 'Internship Cover') },
      { title: 'View Certificate: NeST Digital — Internship Certificate', category: 'Internships', icon: '💼', action: () => window.openCertificateModal('assets/images/internships/nest-digital-internship-certificate.jpg', 'NeST Digital — Certificate of Internship', 'Verified Internship') },
      { title: 'View Certificate: Infosys Springboard — Completion Certificate', category: 'Internships', icon: '💼', action: () => window.openCertificateModal('assets/images/internships/infosys-springboard-certificate.jpg', 'Infosys Springboard — Certificate of Completion', 'Verified Internship') },

      // Personal Certifications direct jump
      { title: 'View Certificate: IBM Python — Course Certificate', category: 'Certifications', icon: '📜', action: () => window.openCertificateModal('assets/images/certifications/ibm-python-course-certificate.jpg', 'IBM | Coursera — Python for Data Science, AI & Development', 'Course Certificate') },
      { title: 'View Certificate: IBM Python — Digital Credential Badge', category: 'Certifications', icon: '📜', action: () => window.openCertificateModal('assets/images/certifications/ibm-python-digital-badge.jpg', 'IBM — Python for Data Science and AI Digital Badge', 'IBM Digital Badge') },
      { title: 'View Certificate: NPTEL DBMS — Elite Distinction (71%)', category: 'Certifications', icon: '📜', action: () => window.openCertificateModal('assets/images/certifications/nptel-dbms-elite.jpg', 'NPTEL — Database Management System (Elite)', 'Elite 71%') },
      { title: 'View Certificate: Oracle Java — Course Achievement', category: 'Certifications', icon: '📜', action: () => window.openCertificateModal('assets/images/certifications/oracle-java-foundation-achievement.jpg', "Oracle Java Foundation Learner's — Award of Achievement", 'Course Achievement') },
      { title: 'View Certificate: Oracle Java — Final Exam Completion', category: 'Certifications', icon: '📜', action: () => window.openCertificateModal('assets/images/certifications/oracle-java-exam-completion.jpg', 'Java Foundations — Award of Final Exam Completion', 'Final Exam Award') },
      { title: 'View Certificate: Infosys Springboard — HTML5 - The Language', category: 'Certifications', icon: '📜', action: () => window.openCertificateModal('assets/images/certifications/infosys-html5.png', 'Infosys Springboard — HTML5 - The Language', 'Infosys Certified') },
      { title: 'View Certificate: Infosys Springboard — CSS3', category: 'Certifications', icon: '📜', action: () => window.openCertificateModal('assets/images/certifications/infosys-css3.jpg', 'Infosys Springboard — CSS3', 'Infosys Certified') },
      { title: 'View Certificate: Infosys Springboard — JavaScript', category: 'Certifications', icon: '📜', action: () => window.openCertificateModal('assets/images/certifications/infosys-javascript.jpg', 'Infosys Springboard — JavaScript', 'Infosys Certified') },
      // Key Honors & Achievements direct jump
      { title: 'View Honor: Cyfusion — Stage Award Ceremony', category: 'Honors', icon: '🏆', action: () => window.openCertificateModal('assets/images/achievements/cyfusion-award-ceremony.jpg', 'SAHYA 2026 Cyfusion — Stage Award Ceremony', 'Award Ceremony') },
      { title: 'View Certificate: Cyfusion — Certificate of Achievement (3rd Prize)', category: 'Honors', icon: '🏆', action: () => window.openCertificateModal('assets/images/achievements/cyfusion-3rd-prize-certificate.jpg', 'Cyfusion — Certificate of Achievement (3rd Prize)', 'Merit Certificate') },
      { title: 'View Certificate: Innovation Ideas Unleashed (I²U) 2025', category: 'Honors', icon: '🏆', action: () => window.openCertificateModal('assets/images/achievements/i2u-phase2-certificate.jpg', 'Innovation Ideas Unleashed (I²U) 2025 — Phase-II Evaluation', 'Phase-II Finalist') },


      { title: 'Copy Email to Clipboard', category: 'Quick Action', icon: '📋', action: () => window.copyToClipboard('sonarosedevasia@gmail.com', 'Email copied to clipboard!') },
      { title: 'Copy Phone to Clipboard', category: 'Quick Action', icon: '📞', action: () => window.copyToClipboard('+91 9207091814', 'Phone copied to clipboard!') },
      { title: 'View / Download Resume (PDF)', category: 'Quick Action', icon: '📄', action: () => window.openResumeModal() },
      { title: 'Open GitHub Profile', category: 'Social', icon: '🐙', action: () => window.open('https://github.com/sonarosedevasia', '_blank') },
      { title: 'Open LinkedIn Profile', category: 'Social', icon: '💼', action: () => window.open('https://linkedin.com/in/sona-rose-devasia-7812332a8', '_blank') }
    ];
  }

  bindEvents() {
    // Keyboard shortcut Ctrl+K or Cmd+K
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.toggle();
      }
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });

    if (this.triggerBtn) {
      this.triggerBtn.addEventListener('click', () => this.open());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.headerCloseBtn) {
      this.headerCloseBtn.addEventListener('click', () => this.close());
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) this.close();
      });
    }

    if (this.input) {
      this.input.addEventListener('input', (e) => this.handleFilter(e.target.value));
      this.input.addEventListener('keydown', (e) => this.handleInputKeys(e));
    }
  }

  isOpen() {
    return this.overlay && this.overlay.classList.contains('active');
  }

  open() {
    if (!this.overlay) return;
    this.overlay.classList.add('active');
    this.input.value = '';
    this.handleFilter('');
    setTimeout(() => this.input.focus(), 100);
  }

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('active');
  }

  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  handleFilter(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(item => 
        item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
      );
    }
    this.selectedIndex = 0;
    this.render();
  }

  handleInputKeys(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.selectedIndex = (this.selectedIndex + 1) % this.filteredItems.length;
      this.render();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.selectedIndex = (this.selectedIndex - 1 + this.filteredItems.length) % this.filteredItems.length;
      this.render();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (this.filteredItems[this.selectedIndex]) {
        const item = this.filteredItems[this.selectedIndex];
        this.close();
        item.action();
      }
    }
  }

  render() {
    if (!this.resultsList) return;
    if (this.filteredItems.length === 0) {
      this.resultsList.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">No matching commands found.</div>`;
      return;
    }

    let html = '';
    this.filteredItems.forEach((item, index) => {
      const isSelected = index === this.selectedIndex;
      html += `
        <div class="palette-item ${isSelected ? 'selected' : ''}" data-index="${index}">
          <div class="palette-item-left">
            <span style="font-size: 1.1rem;">${item.icon}</span>
            <div>
              <div style="font-weight: 500; font-size: 0.92rem;">${item.title}</div>
            </div>
          </div>
          <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted);">${item.category}</span>
        </div>
      `;
    });

    this.resultsList.innerHTML = html;

    // Attach click events
    const renderedItems = this.resultsList.querySelectorAll('.palette-item');
    renderedItems.forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-index'), 10);
        if (this.filteredItems[idx]) {
          this.close();
          this.filteredItems[idx].action();
        }
      });
    });
  }

  scrollTo(selector) {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  window.paletteInstance = new CommandPalette();
});
