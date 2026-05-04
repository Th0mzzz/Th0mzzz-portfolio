
export function smoothScrollTo(targetPosition: number, duration: number = 1000) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}


export function scrollToHash(href: string, duration: number = 1000) {
  if (typeof window === 'undefined') return;

  const targetElement = document.querySelector(href);
  if (!targetElement) {
    console.warn(`Elemento não encontrado para: ${href}`);
    return;
  }

  const offset = 10;
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
  smoothScrollTo(targetPosition, duration);

  if (history.pushState) {
    history.pushState(null, '', href);
  }
}


function scrollToInitialHash() {
  const hash = window.location.hash;

  if (!hash || hash === '#') return;

  const targetElement = document.querySelector(hash);
  if (!targetElement) return;

  const offset = 10;
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: targetPosition, left: 0, behavior: 'auto' });
}

export function initSmoothScroll(duration: number = 1200) {
  if (typeof window === 'undefined') return () => {};

  const handleClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]');

    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    e.preventDefault();

    scrollToHash(href, duration);
  };

  document.addEventListener('click', handleClick);

  const runInitialHashScroll = () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scrollToInitialHash);
    });
  };

  if (document.readyState === 'complete') {
    runInitialHashScroll();
  } else {
    window.addEventListener('load', runInitialHashScroll, { once: true });
  }

  return () => {
    document.removeEventListener('click', handleClick);
    window.removeEventListener('load', runInitialHashScroll);
  };
}

