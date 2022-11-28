export default function healthColor(data) {
  let str = '';
  if (data.health >= 50) {
    str = 'healthy';
  }
  if ((data.health < 50) && (data.health >= 15)) {
    str = 'wounded';
  }
  if (data.health < 15) {
    str = 'critical';
  }
  return str;
}
