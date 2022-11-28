// eslint-disable-next-line
function comparison(a, b) {
  if (a.health > b.health) return -1;
  if (a.health === b.health) return 0;
  if (a.health < b.health) return 1;
}

export default function healthSort(arr) {
  arr.sort(comparison);

  return arr;
}
