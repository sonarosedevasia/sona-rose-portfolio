/**
 * SONA PORTFOLIO - DEVELOPER CLI TERMINAL EMULATOR
 * Interactive terminal allowing recruiters and developers to explore the portfolio via CLI commands.
 */

class SonaTerminal {
  constructor() {
    this.overlay = document.getElementById('terminal-overlay');
    this.body = document.getElementById('terminal-body');
    this.output = document.getElementById('terminal-output');
    this.input = document.getElementById('terminal-input');
    this.openBtn = document.getElementById('terminal-trigger-btn');
    this.closeBtn = document.getElementById('terminal-close-btn');

    this.history = [];
    this.historyIndex = -1;

    this.commands = {
      help: () => this.cmdHelp(),
      bio: () => this.cmdBio(),
      whoami: () => this.cmdBio(),
      skills: () => this.cmdSkills(),
      projects: () => this.cmdProjects(),
      education: () => this.cmdEducation(),
      experience: () => this.cmdExperience(),
      certs: () => this.cmdCerts(),
      hackathons: () => this.cmdHackathons(),
      stats: () => this.cmdStats(),
      contact: () => this.cmdContact(),
      socials: () => this.cmdContact(),
      neofetch: () => this.cmdNeofetch(),
      clear: () => this.cmdClear(),
      cls: () => this.cmdClear(),
      theme: (args) => this.cmdTheme(args),
      matrix: () => this.cmdMatrix(),
      hire: () => this.cmdHire(),
      "sudo hire": () => this.cmdHire(),
      exit: () => this.close()
    };

    this.bindEvents();
  }

  bindEvents() {
    if (this.openBtn) {
      this.openBtn.addEventListener('click', () => this.open());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) this.close();
      });
    }

    if (this.input) {
      this.input.addEventListener('keydown', (e) => this.handleKeyDown(e));
    }
  }

  open() {
    if (!this.overlay) return;
    this.overlay.classList.add('active');
    setTimeout(() => {
      this.input.focus();
    }, 100);
  }

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('active');
  }

  toggle() {
    if (this.overlay.classList.contains('active')) {
      this.close();
    } else {
      this.open();
    }
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      const commandLine = this.input.value.trim();
      if (commandLine) {
        this.history.push(commandLine);
        this.historyIndex = this.history.length;
        this.executeCommand(commandLine);
        this.input.value = '';
      }
    } else if (e.key === 'ArrowUp') {
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.input.value = this.history[this.historyIndex];
      }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex++;
        this.input.value = this.history[this.historyIndex];
      } else {
        this.historyIndex = this.history.length;
        this.input.value = '';
      }
      e.preventDefault();
    } else if (e.key === 'Escape') {
      this.close();
    }
  }

  appendLine(html, type = 'text') {
    const line = document.createElement('div');
    line.className = `terminal-line terminal-${type}`;
    line.innerHTML = html;
    this.output.appendChild(line);
    this.body.scrollTop = this.body.scrollHeight;
  }

  executeCommand(rawCmd) {
    // Print prompt echo
    this.appendLine(`<span style="color:#10b981;font-weight:700">sona@cse:~$</span> <span style="color:#ffffff">${rawCmd}</span>`);

    const parts = rawCmd.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (rawCmd.toLowerCase() === 'sudo hire' || rawCmd.toLowerCase() === 'sudo hire me') {
      this.cmdHire();
      return;
    }

    if (this.commands[cmd]) {
      this.commands[cmd](args);
    } else {
      this.appendLine(`<span style="color:#ef4444">Command not recognized: '${cmd}'. Type <span style="color:#38bdf8;cursor:pointer" onclick="window.terminalInstance.executeCommand('help')">'help'</span> for a list of commands.</span>`);
    }
  }

  cmdHelp() {
    const list = [
      { cmd: 'help', desc: 'Display this list of terminal commands' },
      { cmd: 'whoami', desc: 'Display student background & core focus' },
      { cmd: 'skills', desc: 'List technical skills across languages, AI, and systems' },
      { cmd: 'projects', desc: 'List flagship production projects with descriptions' },
      { cmd: 'education', desc: 'Show degree, university, CGPA, and coursework' },
      { cmd: 'experience', desc: 'Show internships and work history' },
      { cmd: 'certs', desc: 'List verified professional certifications (IBM, NPTEL, Oracle, Infosys)' },
      { cmd: 'hackathons', desc: 'List hackathons & awards (NASA Space Apps, SIH 2025, Hackspiration)' },
      { cmd: 'stats', desc: 'Display academic metrics and project achievements' },
      { cmd: 'contact', desc: 'Get direct email, phone, LinkedIn, and GitHub links' },
      { cmd: 'neofetch', desc: 'Display system specs in classic CLI ASCII format' },
      { cmd: 'theme <name>', desc: 'Change theme (options: dark, cyber, violet, light)' },
      { cmd: 'matrix', desc: 'Trigger digital rain Easter egg' },
      { cmd: 'sudo hire', desc: 'Recruiter one-click interest dispatch' },
      { cmd: 'clear', desc: 'Clear the terminal output window' },
      { cmd: 'exit', desc: 'Close terminal session' }
    ];

    let output = '<div style="margin: 0.5rem 0; color: #94a3b8;">Available Commands:</div><table style="width:100%; border-collapse: collapse;">';
    list.forEach(item => {
      output += `<tr>
        <td style="color:#38bdf8; font-weight:600; padding:2px 12px 2px 0; width: 140px;">${item.cmd}</td>
        <td style="color:#cbd5e1; padding:2px 0;">${item.desc}</td>
      </tr>`;
    });
    output += '</table>';
    this.appendLine(output);
  }

  cmdBio() {
    const p = window.PORTFOLIO_DATA.personal;
    this.appendLine(`
      <div style="color:#f8fafc; margin: 0.5rem 0;">
        <div style="font-weight:700; color:#818cf8; font-size:1.05rem;">${p.name}</div>
        <div style="color:#38bdf8;">${p.title}</div>
        <div style="color:#94a3b8; margin-top:0.4rem;">${p.tagline}</div>
        <div style="color:#34d399; margin-top:0.4rem;">Status: ${p.status.text}</div>
      </div>
    `);
  }

  cmdSkills() {
    const s = window.PORTFOLIO_DATA.skills.items;
    let html = '<div style="margin: 0.5rem 0; color:#a5b4fc; font-weight:600;">Technical Skill Arsenal:</div>';
    html += '<div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:4px;">';
    s.slice(0, 16).forEach(skill => {
      html += `<span style="background:rgba(255,255,255,0.08); padding:2px 8px; border-radius:4px; color:#e2e8f0; font-size:0.8rem;">${skill.name} (${skill.level}%)</span>`;
    });
    html += '</div>';
    this.appendLine(html);
  }

  cmdProjects() {
    const p = window.PORTFOLIO_DATA.projects;
    let html = '<div style="margin: 0.5rem 0; color:#38bdf8; font-weight:600;">Featured Engineering Projects:</div>';
    p.forEach(proj => {
      html += `
        <div style="margin-bottom:0.75rem; padding-left:0.5rem; border-left:2px solid #6366f1;">
          <div style="font-weight:700; color:#ffffff;">${proj.title}</div>
          <div style="color:#94a3b8; font-size:0.82rem;">${proj.tagline}</div>
          <div style="color:#818cf8; font-size:0.78rem;">Tech: ${proj.tech.join(', ')}</div>
        </div>
      `;
    });
    this.appendLine(html);
  }

  cmdEducation() {
    const edu = window.PORTFOLIO_DATA.education[0];
    this.appendLine(`
      <div style="margin:0.5rem 0;">
        <div style="font-weight:700; color:#34d399;">${edu.degree}</div>
        <div style="color:#cbd5e1;">${edu.institution} (${edu.duration})</div>
        <div style="color:#fbbf24;">CGPA: ${edu.cgpa} | ${edu.badge}</div>
        <div style="color:#94a3b8; font-size:0.8rem; margin-top:0.3rem;">Coursework: ${edu.coursework.slice(0, 5).join(', ')}...</div>
      </div>
    `);
  }

  cmdExperience() {
    const exp = window.PORTFOLIO_DATA.experience;
    let html = '<div style="margin:0.5rem 0; color:#818cf8; font-weight:600;">Professional Experience:</div>';
    exp.forEach(e => {
      html += `
        <div style="margin-bottom:0.6rem;">
          <span style="color:#ffffff; font-weight:600;">${e.role}</span> @ <span style="color:#38bdf8;">${e.company}</span>
          <span style="color:#64748b; font-size:0.8rem;"> (${e.period})</span>
          <div style="color:#94a3b8; font-size:0.82rem;">${e.summary}</div>
        </div>
      `;
    });
    this.appendLine(html);
  }

  cmdStats() {
    const p = window.PORTFOLIO_DATA.personal;
    let html = '<div style="margin:0.5rem 0; display:grid; grid-template-columns: repeat(2, 1fr); gap:8px;">';
    p.stats.forEach(st => {
      html += `
        <div style="background:rgba(255,255,255,0.05); padding:6px 10px; border-radius:4px;">
          <div style="font-size:0.75rem; color:#94a3b8;">${st.label}</div>
          <div style="font-size:1.1rem; font-weight:700; color:#34d399;">${st.value}</div>
          <div style="font-size:0.72rem; color:#818cf8;">${st.subtext}</div>
        </div>
      `;
    });
    html += '</div>';
    this.appendLine(html);
  }

  cmdCerts() {
    const certs = window.PORTFOLIO_DATA.certifications || [];
    let html = '<div style="margin:0.5rem 0; color:#38bdf8; font-weight:600;">Verified Professional Certifications:</div>';
    certs.forEach(c => {
      html += `
        <div style="margin-bottom:0.5rem; padding-left:0.5rem; border-left:2px solid #10b981;">
          <div style="font-weight:700; color:#ffffff;">${c.title}</div>
          <div style="color:#34d399; font-size:0.82rem;">${c.issuer} &bull; ${c.year} <span style="background:rgba(16,185,129,0.15); padding:1px 6px; border-radius:3px; font-size:0.75rem;">${c.badge}</span></div>
          <div style="color:#94a3b8; font-size:0.8rem;">${c.desc}</div>
        </div>
      `;
    });
    this.appendLine(html);
  }

  cmdHackathons() {
    const hackathons = window.PORTFOLIO_DATA.hackathons || [];
    let html = '<div style="margin:0.5rem 0; color:#38bdf8; font-weight:600;">Hackathons & Competitive Milestones:</div>';
    hackathons.forEach(h => {
      html += `
        <div style="margin-bottom:0.5rem; padding-left:0.5rem; border-left:2px solid #BAA893;">
          <div style="font-weight:700; color:#ffffff;">${h.title} — <span style="color:#B9CCDA;">${h.award}</span></div>
          <div style="color:#BAA893; font-size:0.82rem;">${h.organizer} &bull; ${h.date} <span style="background:rgba(185,204,218,0.2); padding:1px 6px; border-radius:3px; font-size:0.75rem; color:#B9CCDA;">${h.badge}</span></div>
        </div>
      `;
    });
    this.appendLine(html);
  }

  cmdContact() {
    const p = window.PORTFOLIO_DATA.personal;
    this.appendLine(`
      <div style="margin:0.5rem 0; line-height: 1.6;">
        <div>Name: <span style="color:#ffffff; font-weight:600;">${p.name}</span></div>
        <div>Email: <a href="mailto:${p.email}" style="color:#38bdf8; text-decoration:underline;">${p.email}</a></div>
        <div>Phone: <span style="color:#34d399;">${p.phone}</span></div>
        <div>Location: <span style="color:#cbd5e1;">${p.location}</span></div>
        <div>GitHub: <a href="${p.github}" target="_blank" style="color:#38bdf8; text-decoration:underline;">github.com/sonarosedevasia</a></div>
        <div>LinkedIn: <a href="${p.linkedin}" target="_blank" style="color:#38bdf8; text-decoration:underline;">linkedin.com/in/sona-rose-devasia-7812332a8</a></div>
      </div>
    `);
  }

  cmdNeofetch() {
    const art = `
<pre style="color:#818cf8; line-height:1.2; font-size:0.75rem; margin:0.5rem 0;">
        _nnnn_                      <span style="color:#34d399; font-weight:bold;">sona@engineering-workstation</span>
       dGGGGMMb                     -----------------------------
      @p~qp~~qMb                    <span style="color:#38bdf8;">OS:</span> Linux x86_64 / Windows
      M|@||@) M|                    <span style="color:#38bdf8;">College:</span> Amal Jyothi College of Engineering (Autonomous)
      @,----.JM|                    <span style="color:#38bdf8;">Degree:</span> B.Tech Computer Science (2023 - 2027)
     JS^\\__/  qKL                   <span style="color:#38bdf8;">Location:</span> Kanjirappally, Kerala
    dZP        qKRb                 <span style="color:#38bdf8;">Shell:</span> bash / zsh
   dZP          qKKb                <span style="color:#38bdf8;">Editor:</span> VS Code + Google Colab
  fZP            qXXb               <span style="color:#38bdf8;">Stack:</span> Python, FastAPI, Flask, Streamlit, ML, SQL
  H@b            dBDg               <span style="color:#38bdf8;">CGPA:</span> 9.28 / 10.00
  \\_H___         ___H/              <span style="color:#38bdf8;">Status:</span> Open to ML &amp; SWE Internships
</pre>`;
    this.appendLine(art);
  }

  cmdTheme(args) {
    if (!args || args.length === 0) {
      this.appendLine(`<span style="color:#fbbf24;">Usage: theme [dark | cyber | violet | light]</span>`);
      return;
    }
    const themeName = args[0].toLowerCase();
    const validThemes = ['dark', 'cyber', 'violet', 'light'];
    if (validThemes.includes(themeName)) {
      document.documentElement.setAttribute('data-theme', themeName);
      localStorage.setItem('sona_theme', themeName);
      const select = document.getElementById('theme-picker');
      if (select) select.value = themeName;
      this.appendLine(`<span style="color:#34d399;">✔ Theme switched to '${themeName}'.</span>`);
    } else {
      this.appendLine(`<span style="color:#ef4444;">Invalid theme. Choose from: dark, cyber, violet, light</span>`);
    }
  }

  cmdMatrix() {
    this.appendLine(`<span style="color:#10b981;">Wake up, Neo... Initiating Matrix stream...</span>`);
    let count = 0;
    const interval = setInterval(() => {
      const chars = "0101010101100101010101010101010101010101010101010101010101010101";
      const randomLine = Array.from({length: 45}, () => Math.random() > 0.5 ? '1' : '0').join(' ');
      this.appendLine(`<span style="color:#10b981; font-size:0.75rem;">${randomLine}</span>`);
      count++;
      if (count > 5) {
        clearInterval(interval);
        this.appendLine(`<span style="color:#34d399;">Matrix decoded successfully.</span>`);
      }
    }, 150);
  }

  cmdHire() {
    this.appendLine(`
      <div style="background:rgba(16,185,129,0.15); border:1px solid #10b981; padding:12px; border-radius:6px; margin:0.5rem 0;">
        <div style="color:#34d399; font-weight:700; font-size:1rem;">🎉 Excellent choice! Let's build something remarkable.</div>
        <div style="color:#ffffff; margin-top:0.4rem;">Sona is actively seeking Summer / Fall 2026 Software Engineering roles and internships.</div>
        <div style="color:#94a3b8; margin-top:0.4rem;">Send an email directly to: <a href="mailto:${window.PORTFOLIO_DATA.profile.email}" style="color:#38bdf8; text-decoration:underline; font-weight:bold;">${window.PORTFOLIO_DATA.profile.email}</a></div>
      </div>
    `);
  }

  cmdClear() {
    this.output.innerHTML = '';
  }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  window.terminalInstance = new SonaTerminal();
});
