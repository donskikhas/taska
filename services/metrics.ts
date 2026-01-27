const METRIKA_ID = 106475005;

export const trackMetrikaGoal = (goal: string) => {
  if (typeof window === 'undefined') return;
  
  const win = window as any;
  
  // Если Метрика уже загружена и готова
  if (typeof win.ym === 'function') {
    try {
      win.ym(METRIKA_ID, 'reachGoal', goal);
      if (process.env.NODE_ENV === 'development') {
        console.log('✅ Yandex.Metrika goal sent:', goal);
      }
      return;
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.error('❌ Yandex.Metrika error:', err);
      }
    }
  }
  
  // Если Метрика еще не загружена, используем очередь
  if (!win.ym) {
    win.ym = win.ym || function() {
      (win.ym.a = win.ym.a || []).push(arguments);
    };
    win.ym.l = 1 * new Date();
  }
  
  // Добавляем цель в очередь
  if (win.ym.a) {
    win.ym.a.push([METRIKA_ID, 'reachGoal', goal]);
    if (process.env.NODE_ENV === 'development') {
      console.log('📋 Yandex.Metrika goal queued:', goal);
    }
  } else {
    // Fallback: пытаемся вызвать напрямую
    try {
      win.ym(METRIKA_ID, 'reachGoal', goal);
    } catch {
      // ignore
    }
  }
};

