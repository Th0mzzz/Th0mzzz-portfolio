/**
 * Smooth scroll customizado com controle de velocidade
 */

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

  // Easing function para scroll mais suave (ease in out quad)
  function ease(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

/**
 * Hook para adicionar smooth scroll aos links âncora
 */
export function initSmoothScroll(duration: number = 1200) {
  if (typeof window === 'undefined') return () => {};

  const handleClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]');

    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    const targetElement = document.querySelector(href);
    if (!targetElement) {
      console.warn(`Elemento não encontrado para: ${href}`);
      return;
    }

    e.preventDefault();

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    smoothScrollTo(targetPosition, duration);

    // Atualiza URL sem scroll
    if (history.pushState) {
      history.pushState(null, '', href);
    }
  };

  document.addEventListener('click', handleClick);

  // Cleanup function
  return () => {
    document.removeEventListener('click', handleClick);
  };
}

