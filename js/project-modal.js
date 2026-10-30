/**
 * SONA PORTFOLIO - PROJECT CASE STUDY MODAL & RESUME MODAL
 */

class ProjectModalManager {
  constructor() {
    this.overlay = document.getElementById('project-modal-overlay');
    this.modalContent = document.getElementById('project-modal-container');
    this.closeBtn = document.getElementById('project-modal-close');

    this.resumeOverlay = document.getElementById('resume-modal-overlay');
    this.resumeCloseBtn = document.getElementById('resume-modal-close');

    this.bindEvents();
  }

  bindEvents() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) this.close();
      });
    }

    if (this.resumeCloseBtn) {
      this.resumeCloseBtn.addEventListener('click', () => this.closeResume());
    }

    if (this.resumeOverlay) {
      this.resumeOverlay.addEventListener('click', (e) => {
        if (e.target === this.resumeOverlay) this.closeResume();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
        this.closeResume();
      }
    });
  }

  open(projectId) {
    const project = window.PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project || !this.overlay) return;

    const freshUrl = (u) => {
      if (!u) return '';
      const sep = u.includes('?') ? '&' : '?';
      return `${u}${sep}t=${Date.now()}`;
    };

    let mediaHtml = '';
    if (project.videos && project.videos.length > 0) {
      mediaHtml = `
        <div style="margin-bottom: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
            <h4 style="font-size: 1.05rem; color: var(--text-heading); display: flex; align-items: center; gap: 0.5rem; margin: 0;">
              <span>🎥</span> System Video Demonstrations (2 Separate Portals)
            </h4>
            <span style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">User &amp; Admin Walkthroughs</span>
          </div>
          ${project.videos.map((vid, idx) => `
            <div class="modal-video-card" style="border-radius: 12px; overflow: hidden; border: 1px solid var(--border-card); background: #0b0f19; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
              <div style="background: rgba(15, 23, 42, 0.95); padding: 0.75rem 1.25rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); flex-wrap: wrap; gap: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="color: ${vid.id === 'admin' ? '#f59e0b' : '#10b981'}; font-size: 0.85rem;">●</span>
                  <strong style="font-family: var(--font-sans); font-size: 0.92rem; color: #fff;">${vid.title}</strong>
                </div>
                <button onclick="window.openFullscreenVideo('${vid.src}', '${vid.title}')" style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--accent-secondary); background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.3); padding: 3px 12px; border-radius: 4px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;">
                  ⛶ Fullscreen
                </button>
              </div>
              <video id="modal-video-${vid.id || idx}" controls playsinline preload="metadata" style="width: 100%; max-height: 440px; display: block; background: #000; outline: none;">
                <source src="${freshUrl(vid.src)}" type="video/mp4">
                ${vid.altSrc ? `<source src="${freshUrl(vid.altSrc)}" type="video/mp4">` : ''}
                Your browser does not support HTML5 video.
              </video>
              ${vid.desc ? `
                <div style="padding: 0.75rem 1.25rem; background: rgba(15, 23, 42, 0.8); border-top: 1px solid rgba(255,255,255,0.06); font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55;">
                  ${vid.desc}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      `;
    } else if (project.video) {
      mediaHtml = `
        <div class="modal-video-card" style="margin-bottom: 1.75rem; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-card); background: #0b0f19; box-shadow: 0 12px 36px rgba(0,0,0,0.35);">
          <div style="background: rgba(15, 23, 42, 0.95); padding: 0.65rem 1.25rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08);">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="color: #ef4444; font-size: 0.85rem;">●</span>
              <span style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 700; color: #fff;">Project Demonstration Video</span>
            </div>
            <button onclick="window.openFullscreenVideo('${project.video}', '${project.title}')" style="font-family: var(--font-mono); font-size: 0.74rem; color: var(--accent-secondary); background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.3); padding: 3px 10px; border-radius: 4px; cursor: pointer;">
              ⛶ Fullscreen
            </button>
          </div>
          <video id="modal-project-video" controls playsinline preload="auto" poster="${project.image}" style="width: 100%; max-height: 480px; display: block; background: #000; outline: none;">
            <source src="${freshUrl(project.video)}" type="video/mp4">
            ${project.altVideo ? `<source src="${freshUrl(project.altVideo)}" type="video/mp4">` : ''}
            Your browser does not support HTML5 video.
          </video>
        </div>
      `;
    } else {
      mediaHtml = `
        <div style="margin-bottom: 1.5rem; border-radius: 10px; overflow: hidden; border: 1px solid var(--border-card); background: var(--bg-tertiary);">
          <img src="${project.image}" alt="${project.title}" style="width: 100%; height: auto; aspect-ratio: 5 / 3; object-fit: cover; display: block;" onerror="this.onerror=null; this.src='assets/images/project-nutrition.svg';" />
        </div>
      `;
    }

    let metricsHtml = '';
    if (project.metrics && project.metrics.length > 0) {
      metricsHtml = `
        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 1.5rem 0; background: var(--bg-tertiary); padding: 1rem; border-radius: 10px; border: 1px solid var(--border-subtle);">
          ${project.metrics.map(m => `
            <div style="text-align:center;">
              <div style="font-family: var(--font-mono); font-size: 1.15rem; font-weight: 700; color: var(--accent-secondary); line-height: 1.3;">${m.value}</div>
              <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; margin-top: 4px;">${m.label}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    let modulesHtml = '';
    if (project.modules && project.modules.length > 0) {
      modulesHtml = `
        <div style="margin-top: 1.75rem;">
          <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--text-heading); display: flex; align-items: center; gap: 0.45rem;">
            <span>🧩</span> Core System Modules
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.85rem;">
            ${project.modules.map(m => `
              <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: 10px; border: 1px solid var(--border-subtle);">
                <div style="font-weight: 700; color: var(--text-heading); font-size: 0.92rem; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.4rem;">
                  <span style="color: var(--accent-primary);">▸</span> ${m.name}
                </div>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55; margin: 0;">${m.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    let dbHtml = '';
    if (project.database && project.database.length > 0) {
      dbHtml = `
        <div style="margin-top: 1.5rem;">
          <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--text-heading); display: flex; align-items: center; gap: 0.45rem;">
            <span>🗄️</span> SQLite Relational Schema &amp; Data Model
          </h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; padding: 0;">
            ${project.database.map(d => `
              <li style="position: relative; padding-left: 1.25rem; font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
                <span style="position: absolute; left: 0; color: var(--accent-secondary);">▹</span>
                ${d}
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    let xaiHtml = '';
    if (project.xai && project.xai.length > 0) {
      xaiHtml = `
        <div style="margin-top: 1.75rem; background: var(--bg-tertiary); border: 1px solid var(--border-subtle); padding: 1.25rem; border-radius: 10px;">
          <h4 style="font-size: 1.05rem; margin-bottom: 0.85rem; color: var(--text-heading); display: flex; align-items: center; gap: 0.45rem;">
            <span>🔍</span> Explainable Artificial Intelligence (XAI) Suite
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem;">
            ${project.xai.map(x => `
              <div style="background: var(--bg-card); padding: 0.85rem; border-radius: 8px; border: 1px solid var(--border-subtle);">
                <div style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-primary); font-size: 0.92rem; margin-bottom: 0.35rem;">${x.name}</div>
                <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">${x.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    let datasetsHtml = '';
    if (project.datasets && project.datasets.length > 0) {
      datasetsHtml = `
        <div style="margin-top: 1.5rem;">
          <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--text-heading); display: flex; align-items: center; gap: 0.45rem;">
            <span>📊</span> Dataset Preparation &amp; Group-Aware Splitting
          </h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; padding: 0;">
            ${project.datasets.map(d => `
              <li style="position: relative; padding-left: 1.25rem; font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
                <span style="position: absolute; left: 0; color: var(--accent-secondary);">▹</span>
                <strong>${d.name}:</strong> ${d.count}
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    let archHtml = '';
    if (project.architecture && project.architecture.length > 0) {
      archHtml = `
        <div style="margin-top: 1.5rem;">
          <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--text-heading); display: flex; align-items: center; gap: 0.45rem;">
            <span>📐</span> System Architecture &amp; Implementation
          </h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; padding: 0;">
            ${project.architecture.map(item => `
              <li style="position: relative; padding-left: 1.25rem; font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
                <span style="position: absolute; left: 0; color: var(--accent-primary);">▹</span>
                ${item}
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    let problemHtml = '';
    if (project.problemStatement) {
      problemHtml = `
        <div style="margin-top: 1.5rem; background: rgba(239, 68, 68, 0.06); border: 1px solid rgba(239, 68, 68, 0.25); padding: 1.15rem 1.35rem; border-radius: 10px;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: #ef4444; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>⚠️</span> Problem Statement
          </h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">${project.problemStatement}</p>
        </div>
      `;
    }

    let objectivesHtml = '';
    if (project.objectives && project.objectives.length > 0) {
      objectivesHtml = `
        <div style="margin-top: 1.5rem;">
          <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--text-heading); display: flex; align-items: center; gap: 0.45rem;">
            <span>🎯</span> Key Objectives
          </h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.55rem; padding: 0;">
            ${project.objectives.map(obj => `
              <li style="position: relative; padding-left: 1.35rem; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.55;">
                <span style="position: absolute; left: 0; color: var(--accent-primary); font-weight: bold;">✓</span>
                ${obj}
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    let challengeHtml = '';
    if (project.challenges) {
      challengeHtml = `
        <div style="margin-top: 1.5rem; background: rgba(99, 102, 241, 0.08); border: 1px solid var(--border-glow); padding: 1.25rem; border-radius: 10px;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-primary); margin-bottom: 0.4rem;">💡 Key Engineering Challenges Solved</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">${project.challenges}</p>
        </div>
      `;
    }

    let interviewHtml = '';
    if (project.interviewSummary) {
      interviewHtml = `
        <div style="margin-top: 1.75rem; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); padding: 1.25rem; border-radius: 10px;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: #10b981; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>⚡</span> 30-Second Interview / Viva Summary
          </h4>
          <blockquote style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.65; margin: 0; font-style: italic;">
            "${project.interviewSummary}"
          </blockquote>
        </div>
      `;
    }

    let disclaimerHtml = '';
    if (project.disclaimer) {
      disclaimerHtml = `
        <div style="margin-top: 1.5rem; background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.3); padding: 0.95rem 1.25rem; border-radius: 8px;">
          <p style="font-size: 0.84rem; color: var(--text-muted); line-height: 1.55; margin: 0;">
            ⚠️ <strong>Medical Research Disclaimer:</strong> ${project.disclaimer}
          </p>
        </div>
      `;
    }

    this.modalContent.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.75rem; margin-bottom: 0.4rem; color: var(--text-heading);">${project.title}</h2>
        <p style="color: var(--accent-secondary); font-size: 0.98rem; font-family: var(--font-mono);">${project.tagline}</p>
      </div>

      ${mediaHtml}

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--text-heading);">📖 Project Overview</h4>
        <p style="color: var(--text-secondary); font-size: 0.98rem; line-height: 1.7; margin: 0;">
          ${project.description}
        </p>
      </div>

      ${problemHtml}
      ${objectivesHtml}
      ${metricsHtml}
      ${modulesHtml}
      ${archHtml}
      ${dbHtml}
      ${xaiHtml}
      ${datasetsHtml}
      ${challengeHtml}
      ${interviewHtml}
      ${disclaimerHtml}

      <div style="margin-top: 1.75rem;">
        <h5 style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 0.05em;">Technology Stack</h5>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div style="margin-top: 2rem; display: flex; gap: 0.85rem; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; flex-wrap: wrap;">
        ${project.videos && project.videos.length > 0 ? `
          <button class="btn btn-primary" onclick="window.openFullscreenVideo('${project.videos[0].src}', '${project.videos[0].title}')">
            <span>👤 Fullscreen User Demo</span>
          </button>
          <button class="btn btn-secondary" onclick="window.openFullscreenVideo('${project.videos[1].src}', '${project.videos[1].title}')">
            <span>🛡️ Fullscreen Admin Demo</span>
          </button>
        ` : (project.video ? `
          <button class="btn btn-primary" onclick="window.openFullscreenVideo('${project.video}', '${project.title}')">
            <span>⛶ Open Fullscreen Video</span>
          </button>
          ${project.demo ? `
            <a href="${project.demo}" target="_blank" class="btn btn-secondary">
              <span>🌐 Launch Live Site</span>
            </a>
          ` : ''}
        ` : (project.demo ? `
          <a href="${project.demo}" target="_blank" class="btn btn-primary">
            <span>🌐 Launch Live Site</span>
          </a>
        ` : ''))}
        <a href="${project.github || 'https://github.com/sonarosedevasia'}" target="_blank" class="btn btn-outline">
          <span>🐙 GitHub Profile</span>
        </a>
      </div>
    `;

    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.overlay) return;
    const videos = this.modalContent.querySelectorAll('video');
    videos.forEach(v => {
      try {
        v.pause();
      } catch (e) {}
    });
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openResume() {
    if (!this.resumeOverlay) return;
    
    // Primary path is resume/resume.pdf (matching the resume folder)
    let resumePath = 'resume/resume.pdf';
    
    // Append cache-busting timestamp to prevent browser from serving cached PDF
    const cacheBuster = (window.location.protocol === 'http:' || window.location.protocol === 'https:') 
      ? `?v=${Date.now()}` 
      : '';
    
    const pdfViewer = document.getElementById('resume-pdf-viewer');
    const openLink = document.getElementById('resume-open-link');

    if (pdfViewer) {
      pdfViewer.src = resumePath + cacheBuster;
    }
    if (openLink) {
      openLink.href = resumePath + cacheBuster;
    }

    this.resumeOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeResume() {
    if (!this.resumeOverlay) return;
    this.resumeOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Global exposure
document.addEventListener('DOMContentLoaded', () => {
  window.projectModalManager = new ProjectModalManager();
  
  window.openProjectModal = (id) => {
    window.projectModalManager.open(id);
  };

  window.openResumeModal = () => {
    window.projectModalManager.openResume();
  };

  window.closeResumeModal = () => {
    window.projectModalManager.closeResume();
  };

  window.openFullscreenVideo = (videoSrc, videoTitle) => {
    const rawSrc = videoSrc || 'assets/videos/dfu-demo.mp4';
    const sep = rawSrc.includes('?') ? '&' : '?';
    const src = `${rawSrc}${sep}t=${Date.now()}`;
    const title = videoTitle || 'Video Demonstration';
    let modal = document.getElementById('fullscreen-video-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'fullscreen-video-modal';
      modal.className = 'fullscreen-video-overlay';
      modal.innerHTML = `
        <div class="fs-video-topbar">
          <span class="fs-video-tag" id="fs-video-tag-label">🎥 ${title}</span>
          <button class="fs-video-close" id="fs-video-close-btn" aria-label="Close fullscreen video">&times;</button>
        </div>
        <div class="fs-video-wrapper">
          <video id="fs-video-player" controls autoplay playsinline preload="auto">
            <source src="${src}" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
        </div>
      `;
      document.body.appendChild(modal);

      const closeBtn = document.getElementById('fs-video-close-btn');
      const closeFs = () => {
        const v = document.getElementById('fs-video-player');
        if (v) v.pause();
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (document.fullscreenElement || document.webkitFullscreenElement) {
          if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen().catch(() => {});
          }
        }
      };

      closeBtn.addEventListener('click', closeFs);
      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('fs-video-wrapper')) closeFs();
      });
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
          closeFs();
        }
      });
    }

    const titleEl = document.getElementById('fs-video-tag-label');
    if (titleEl) {
      titleEl.innerHTML = `🎥 ${title}`;
    }

    const player = document.getElementById('fs-video-player');
    if (player) {
      player.pause();
      player.src = src;
      player.load();
      player.currentTime = 0;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      player.play().catch(() => {});
      if (player.requestFullscreen) {
        player.requestFullscreen().catch(() => {});
      } else if (player.webkitRequestFullscreen) {
        player.webkitRequestFullscreen().catch(() => {});
      }
    }
  };
});
