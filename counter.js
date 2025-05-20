  const counters = [
  { id: 'pd', start: 550, target: 700 },
  { id: 'gtp', start: 0, target: 100 },
  { id: 'unit', start: 0, target: 4 },
  { id: 'mitra', start: 0, target: 35 }
];

let hasAnimated = false;

function animateCounters(duration = 6000) {
  const startTime = performance.now();

  counters.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.add('fade-in');
    }
  });

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    counters.forEach(({ id, start, target }) => {
      const el = document.getElementById(id);
      if (el) {
        const currentValue = Math.floor(start + (target - start) * easedProgress);
        el.textContent = currentValue;
      }
    });

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      counters.forEach(({ id, target }) => {
        const el = document.getElementById(id);
        if (el) { 
          el.textContent = target;

        }
      });
    }
  }

  requestAnimationFrame(update);
}

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !hasAnimated) {
    animateCounters(1500);
    hasAnimated = true;
  }
}, { threshold: 0.5 });

observer.observe(document.querySelector('.jumlah'));