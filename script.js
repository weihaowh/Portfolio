// ===================================
// NAVIGATION
// ===================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Update active navigation link
  updateActiveNavLink();
});

// ===================================
// SMOOTH SCROLLING
// ===================================

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      const navLinksContainer = document.getElementById('navLinks');
      navLinksContainer.classList.remove('active');
    }
  });
});

// ===================================
// ACTIVE SECTION TRACKING
// ===================================

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100;

  // Check if we are at the bottom of the page to highlight Contact
  const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20;

  if (isAtBottom) {
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#contact') {
        link.classList.add('active');
      }
    });
    return;
  }

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ===================================
// MOBILE MENU
// ===================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinksContainer = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');

  // Toggle hamburger icon
  if (navLinksContainer.classList.contains('active')) {
    mobileMenuBtn.textContent = '✕';
  } else {
    mobileMenuBtn.textContent = '☰';
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    navLinksContainer.classList.remove('active');
    mobileMenuBtn.textContent = '☰';
  }
});

// ===================================
// SCROLL ANIMATIONS
// ===================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with fade-in class
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
  observer.observe(element);
});

// ===================================
// TYPING EFFECT (Optional Enhancement)
// ===================================

// Uncomment this to add a typing effect to the hero subtitle
/*
const heroSubtitle = document.querySelector('.hero-subtitle');
const subtitleText = heroSubtitle.textContent;
heroSubtitle.textContent = '';

let charIndex = 0;
function typeWriter() {
  if (charIndex < subtitleText.length) {
    heroSubtitle.textContent += subtitleText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing effect after page load
window.addEventListener('load', () => {
  setTimeout(typeWriter, 500);
});
*/

// ===================================
// SMOOTH SCROLL TO TOP
// ===================================

// Scroll-to-top button: glass circle whose ring fills as you scroll down the page
function createScrollToTopButton() {
  const RING = 2 * Math.PI * 23; // circumference of the r=23 progress circle

  const button = document.createElement('button');
  button.className = 'scroll-to-top';
  button.setAttribute('aria-label', 'Back to top');
  button.innerHTML = `
    <svg class="scroll-to-top-ring" viewBox="0 0 52 52" aria-hidden="true">
      <defs>
        <linearGradient id="scrollRingGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#667eea" />
          <stop offset="100%" stop-color="#4facfe" />
        </linearGradient>
      </defs>
      <circle class="scroll-to-top-track" cx="26" cy="26" r="23" />
      <circle class="scroll-to-top-progress" cx="26" cy="26" r="23"
        stroke-dasharray="${RING}" stroke-dashoffset="${RING}" />
    </svg>
    <svg class="scroll-to-top-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  `;
  const progress = button.querySelector('.scroll-to-top-progress');

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    progress.style.strokeDashoffset = RING * (1 - ratio);
    button.classList.toggle('visible', window.scrollY > 300);
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  document.body.appendChild(button);
  update();
}

// Initialize scroll to top button
createScrollToTopButton();

// ===================================
// PROJECT FILTERING (Optional)
// ===================================

// If you want to add project filtering functionality, uncomment below:
/*
function filterProjects(category) {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 10);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

// Add filter buttons to HTML and call filterProjects('category-name')
*/

// ===================================
// WEBGL BACKGROUND & GLASS INTERACTION
// ===================================

const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (gl) {
    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    function createProgram(gl, vertexShader, fragmentShader) {
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }
      return program;
    }

    const vertexShaderSource = document.getElementById('vertexShader').textContent;
    const fragmentShaderSource = document.getElementById('fragmentShader').textContent;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = createProgram(gl, vertexShader, fragmentShader);

    const uTime = gl.getUniformLocation(program, 'uTime');
    const uResolution = gl.getUniformLocation(program, 'uResolution');
    const uMouse = gl.getUniformLocation(program, 'uMouse');

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };

    window.addEventListener('mousemove', (e) => {
      mouse.targetX = e.clientX / window.innerWidth;
      mouse.targetY = 1.0 - e.clientY / window.innerHeight;
    });

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let startTime = Date.now();
    function render() {
      const currentTime = (Date.now() - startTime) * 0.001;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      gl.useProgram(program);
      gl.uniform1f(uTime, currentTime);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouse.x, mouse.y);

      const positionLocation = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      requestAnimationFrame(render);
    }
    render();
  }
}

// Glass button mouse interaction
document.querySelectorAll('.glass-button').forEach(button => {
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    button.style.setProperty('--x', x + '%');
    button.style.setProperty('--y', y + '%');
  });
});

// Section glow interaction
const glowElements = document.querySelectorAll('.hero-content, .about-content, .pt-detail, .project-card, .contact-content');

glowElements.forEach(element => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    element.style.setProperty('--mouse-x', `${x}px`);
    element.style.setProperty('--mouse-y', `${y}px`);
  });
});

// Project preview videos: play while on screen, pause when scrolled away
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.play().catch(() => {});
    } else {
      entry.target.pause();
    }
  });
}, { threshold: 0.5 });

if (!reduceMotion) {
  document.querySelectorAll('video.project-image').forEach(video => videoObserver.observe(video));
}

// Video preview modal: a history entry is pushed on open so the browser Back button closes it
const videoModal = document.getElementById('video-modal');
const modalPlayer = videoModal.querySelector('.video-modal-player');
let modalOpener = null;

function openVideoModal(link) {
  modalOpener = link;
  modalPlayer.src = link.getAttribute('href');
  modalPlayer.poster = link.dataset.poster || '';
  videoModal.querySelector('.video-modal-title').textContent = link.dataset.title || '';

  const tags = link.closest('.project-card')?.querySelector('.project-tags');
  videoModal.querySelector('.video-modal-tags').innerHTML = tags ? tags.innerHTML : '';

  videoModal.hidden = false;
  document.body.classList.add('modal-open');
  history.pushState({ videoModal: true }, '');
  videoModal.querySelector('.video-modal-back').focus();
  modalPlayer.play().catch(() => {});
}

function closeVideoModal() {
  if (videoModal.hidden) return;
  modalPlayer.pause();
  modalPlayer.removeAttribute('src');
  modalPlayer.load();
  videoModal.hidden = true;
  document.body.classList.remove('modal-open');
  if (modalOpener) modalOpener.focus({ preventScroll: true });
}

// Closing via the UI rewinds the history entry; popstate then does the actual close
function requestCloseVideoModal() {
  if (history.state && history.state.videoModal) {
    history.back();
  } else {
    closeVideoModal();
  }
}

document.querySelectorAll('[data-video-preview]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    openVideoModal(link);
  });
});

videoModal.querySelectorAll('[data-modal-close]').forEach(el => {
  el.addEventListener('click', requestCloseVideoModal);
});

window.addEventListener('popstate', closeVideoModal);

document.addEventListener('keydown', (e) => {
  if (videoModal.hidden) return;
  if (e.key === 'Escape') {
    requestCloseVideoModal();
  } else if (e.key === 'Tab') {
    // Keep focus inside the dialog
    const focusable = [...videoModal.querySelectorAll('button, video')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

// Skills periodic table
const ptTiles = document.querySelectorAll('.pt-tile');
const ptChips = document.querySelectorAll('.pt-chip');
const ptDetail = document.querySelector('.pt-detail');
const ptLogo = ptDetail.querySelector('.pt-detail-logo');
const ptLogoImg = ptLogo.querySelector('img');
const ptLogoSym = ptLogo.querySelector('.pt-detail-sym');
const familyNames = {};
ptChips.forEach(chip => familyNames[chip.dataset.filter] = chip.textContent.trim());

ptTiles.forEach((tile, index) => {
  const num = String(index + 1).padStart(2, '0');
  tile.style.setProperty('--i', index);
  tile.insertAdjacentHTML('afterbegin', `<span class="pt-num">${num}</span>`);

  const show = () => showElement(tile, num);
  tile.addEventListener('mouseenter', show);
  tile.addEventListener('focus', show);
  tile.addEventListener('click', () => {
    ptTiles.forEach(t => t.classList.toggle('selected', t === tile));
    show();
  });
});

function showElement(tile, num) {
  const family = tile.dataset.family;
  ptLogo.dataset.family = family;
  ptLogoSym.textContent = tile.querySelector('.pt-sym').textContent;
  ptDetail.querySelector('.pt-detail-num').textContent = num;
  ptDetail.querySelector('.pt-detail-name').textContent = tile.querySelector('.pt-name').textContent;
  ptDetail.querySelector('.pt-detail-family').textContent = familyNames[family];
  ptDetail.querySelector('.pt-detail-desc').textContent = tile.dataset.desc || '';

  const logo = iconUrl(tile.dataset.icon);
  if (logo) {
    ptLogoImg.src = logo;
    ptLogoImg.alt = tile.querySelector('.pt-name').textContent + ' logo';
  }
  setLogoVisible(Boolean(logo));
}

const iconSources = {
  dev: path => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${path}.svg`,
  si: slug => `https://cdn.jsdelivr.net/npm/simple-icons@16.0.0/icons/${slug}.svg`,
  lu: name => `https://cdn.jsdelivr.net/npm/lucide-static@0.544.0/icons/${name}.svg`
};

function iconUrl(icon) {
  if (!icon) return null;
  const [source, path] = icon.split(':');
  return iconSources[source] ? iconSources[source](path) : null;
}

// Warm the cache so the panel swaps instantly on hover
ptTiles.forEach(tile => {
  const url = iconUrl(tile.dataset.icon);
  if (url) new Image().src = url;
});

function setLogoVisible(visible) {
  ptLogoImg.hidden = !visible;
  ptLogoSym.hidden = visible;
  ptLogo.classList.toggle('has-logo', visible);
}

// Fall back to the element symbol if a logo fails to load
ptLogoImg.addEventListener('error', () => setLogoVisible(false));

ptChips.forEach(chip => {
  chip.addEventListener('click', () => {
    const isActive = chip.classList.toggle('active');
    ptChips.forEach(c => c !== chip && c.classList.remove('active'));
    chip.setAttribute('aria-pressed', isActive);
    ptTiles.forEach(tile => {
      tile.classList.toggle('dim', isActive && tile.dataset.family !== chip.dataset.filter);
    });
  });
});

// Start with the first element (C++) selected so the panel is never empty
ptTiles[0].classList.add('selected');
showElement(ptTiles[0], '01');

// Experience timeline: the rail fills up to the middle of the viewport and lights each entry it passes
const timeline = document.querySelector('.tl');
const tlItems = timeline.querySelectorAll('.tl-item');
let tlTicking = false;

function updateTimeline() {
  tlTicking = false;
  const marker = window.innerHeight / 2;
  const rect = timeline.getBoundingClientRect();
  const progress = Math.min(Math.max((marker - rect.top) / rect.height, 0), 1);
  timeline.style.setProperty('--progress', progress);
  timeline.classList.toggle('in-progress', progress > 0 && progress < 1);

  tlItems.forEach(item => {
    const dot = item.querySelector('.tl-dot').getBoundingClientRect();
    item.classList.toggle('reached', dot.top + dot.height / 2 <= marker);
  });
}

function requestTimelineUpdate() {
  if (!tlTicking) {
    tlTicking = true;
    requestAnimationFrame(updateTimeline);
  }
}

window.addEventListener('scroll', requestTimelineUpdate, { passive: true });
window.addEventListener('resize', requestTimelineUpdate);
updateTimeline();

console.log('Portfolio website loaded successfully');
