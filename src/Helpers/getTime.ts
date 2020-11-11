export default function getTime(duration: number) {
  const time = duration / 60;
  const minute = Math.floor(time);
  const minuteStr = minute < 10 ? `0${minute}` : minute.toString();
  const second = duration % 60;
  const secondStr = second < 10 ? `0${second}` : second.toString();
  return `${minuteStr}:${secondStr}`;
}
