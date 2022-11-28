import healthSort from '../healthSort';

test('health sort test', () => {
  const result = healthSort([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'Охотник', health: 40 },
    { name: 'Воин', health: 40 },
  ]);
  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'Охотник', health: 40 },
    { name: 'Воин', health: 40 },
    { name: 'мечник', health: 10 },
  ]);
});
