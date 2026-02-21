'use client';

import { useEffect } from 'react';
import { initSmoothScroll } from '@/lib/smoothScroll';

export default function SmoothScrollInit() {
  useEffect(() => {
    // Inicializa smooth scroll com duração de 1200ms (mais lento que o padrão)
    // Você pode ajustar o valor: quanto maior, mais lento
    // 800ms = rápido, 1200ms = médio, 1800ms = lento
    const cleanup = initSmoothScroll(1200);

    return cleanup;
  }, []);

  return null;
}

