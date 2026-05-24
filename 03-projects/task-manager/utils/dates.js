export function formatDate(isoDate) {
  // 1. Validación falsy
  if (!isoDate) return 'Sin fecha';

  // 2. String ISO → Objeto Date
  const date = new Date(isoDate);

  // 3. Objeto Date → String en español bonito
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Calcula el número total de días naturales entre dos fechas (incluyendo ambos extremos).
 * Cuenta sábados, domingos y cualquier día del calendario.
 * @param {string} startDate - Fecha inicio en formato ISO "YYYY-MM-DD"
 * @param {string} endDate - Fecha fin en formato ISO "YYYY-MM-DD"
 * @returns {number} Número total de días, o 0 si alguna fecha es null/undefined
 */
export function totalDays(startDate, endDate) {
  // 1. Validación: si alguna fecha no existe, devolvemos 0
  if (!startDate || !endDate) return 0;

  // 2. Convertimos a Date con hora local para evitar problemas de zona horaria
  const start = new Date(startDate + 'T00:00:00');
  const end = new Date(endDate + 'T00:00:00');

  // 3. Si las fechas están al revés, las intercambiamos
  if (start > end) {
    // Intercambio: ponemos la más antigua como start y la más moderna como end
    const temp = start;
    start = end;
    end = temp;
  }

  // 4. Calculamos la diferencia en milisegundos
  const diffMs = end.getTime() - start.getTime();

  // 5. Convertimos milisegundos a días (1 día = 1000 * 60 * 60 * 24 ms)
  const msPerDay = 1000 * 60 * 60 * 24;
  const diffDays = diffMs / msPerDay;

  // 6. Como incluimos ambos extremos, sumamos 1. 
  // La división es exacta, así que no necesitamos redondeo extra.
  return diffDays + 1;
}


