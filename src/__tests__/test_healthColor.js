import healthColor from '../healthColor';

test.each([
  ['Green', { name: 'Маг', health: 90 }, 'healthy'],
  ['Yellow', { name: 'Маг', health: 40 }, 'wounded'],
  ['Red', { name: 'Маг', health: 10 }, 'critical'],
])('%s', (color, el, expected) => {
  const result = healthColor(el);
  expect(result).toBe(expected);
});
