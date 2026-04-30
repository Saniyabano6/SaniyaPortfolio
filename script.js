// ── CURSOR GLOW ──
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});

// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── HAMBURGER ──
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '70px';
  links.style.right = '24px';
  links.style.background = 'rgba(5,8,16,0.98)';
  links.style.padding = '20px';
  links.style.border = '1px solid rgba(255,255,255,0.07)';
});

// ── TYPEWRITER ──
const roles = [
  'AI / ML Enthusiast',
  'Python Developer',
  'Electronics Engineer',
  'Full-Stack Builder',
  'Open Source Contributor',
  'Deep Learning Learner',
];
let ri = 0, ci = 0, deleting = false;
const roleEl = document.getElementById('roleText');

function typeWriter() {
  const current = roles[ri];
  if (!deleting) {
    roleEl.textContent = current.substring(0, ci + 1);
    ci++;
    if (ci === current.length) {
      deleting = true;
      setTimeout(typeWriter, 1800);
      return;
    }
  } else {
    roleEl.textContent = current.substring(0, ci - 1);
    ci--;
    if (ci === 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
    }
  }
  setTimeout(typeWriter, deleting ? 50 : 90);
}
typeWriter();

// ── NEURAL NETWORK CANVAS ──
const canvas = document.getElementById('neural-canvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const NODES = 55;
const nodes = [];

for (let i = 0; i < NODES; i++) {
  nodes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 2 + 1,
    pulse: Math.random() * Math.PI * 2,
  });
}

let mouseX = -1000, mouseY = -1000;
document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

function drawNeural() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update
  for (const n of nodes) {
    n.x += n.vx; n.y += n.vy; n.pulse += 0.02;
    if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
    if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

    // Mouse attraction
    const dx = mouseX - n.x, dy = mouseY - n.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    if (dist < 150) {
      n.x += dx * 0.003;
      n.y += dy * 0.003;
    }
  }

  // Connections
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const d = Math.sqrt(dx*dx + dy*dy);
      if (d < 140) {
        const alpha = (1 - d/140) * 0.35;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `rgba(0, 245, 212, ${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
  }

  // Nodes
  for (const n of nodes) {
    const pulse = Math.sin(n.pulse) * 0.5 + 0.5;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r + pulse, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 245, 212, ${0.4 + pulse * 0.4})`;
    ctx.fill();

    // Glow
    ctx.beginPath();
    ctx.arc(n.x, n.y, (n.r + pulse) * 3, 0, Math.PI * 2);
    const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, (n.r + pulse) * 3);
    grad.addColorStop(0, `rgba(0,245,212,${0.08 * pulse})`);
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fill();
  }

  requestAnimationFrame(drawNeural);
}
drawNeural();

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// ── ACTIVE NAV HIGHLIGHT ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--cyan)' : '';
  });
});

// ── ANIMATED METRICS ──
function animateMetrics() {
  const lossEl = document.getElementById('lossVal');
  const accEl  = document.getElementById('accVal');
  if (!lossEl || !accEl) return;
  setInterval(() => {
    const loss = (Math.random() * 0.15 + 0.18).toFixed(3);
    const acc  = (Math.random() * 4 + 89).toFixed(1);
    lossEl.textContent = loss;
    accEl.textContent  = acc + '%';
  }, 2000);
}
animateMetrics();

// ── SMOOTH SCROLL for all anchors ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── SKILL CARD TILT ──
document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ── STAGGER HERO ANIMATIONS ──
window.addEventListener('load', () => {
  const heroItems = document.querySelectorAll('.hero-tag, .hero-name .line1, .hero-name .line2, .hero-roles, .hero-desc, .hero-cta, .hero-stats');
  heroItems.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  });
});
