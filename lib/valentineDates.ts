export function isAllowedDay(day: number) {
  const now = new Date();
  return now.getMonth() === 1 && now.getDate() === day;
}
