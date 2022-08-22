const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = document.body.clientWidth;
const height = document.body.clientHeight;
const pixelRatio = window.devicePixelRatio || 1;

canvas.width = width * pixelRatio;
canvas.height = height * pixelRatio;

canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;

let iteration = 0;
let particles = [];

const createParticle = () => {
  particles.push({
    x: 0,
    k: Math.random() * Math.PI * 2, // x0 shift
    a: 0.15 + Math.random() * 0.35, // amplitude
    s: 0.5, // vertical (spin) speed
    c: 750, // horizontal speed
    h: iteration % 360, // hue
  });
};

const angle = p => p.x / p.a * p.s + p.k;
const y = p => (p.a * Math.sin(angle(p)) + 1) * height;

const render = () => {
  ctx.clearRect(0, 0, width * pixelRatio, height * pixelRatio);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  particles
    .sort((p1, p2) => (
      Math.cos(angle(p1)) > Math.cos(angle(p2)) ? 1 : -1
    )).forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x * p.c, y(p), 4, 0, 2 * Math.PI, false);

      const l = 10 + 50 * (1 + Math.cos(angle(p))) / 2;

      ctx.fillStyle = `hsl(${p.h}, 100%, ${l}%)`;
      ctx.fill();

      p.x = p.x + 0.01;
    });
  
  particles = particles.filter(p => p.x * p.c < width * pixelRatio);

  iteration++;
  
  for (let i = 0; i < 10; i++) {
    createParticle();    
  }

  requestAnimationFrame(render);
};

render();