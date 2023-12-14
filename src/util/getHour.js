export function hour() {
  let date = new Date();
  let time = `${date.getHours()<10?"0"+date.getHours():date.getHours()}:${date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes()}`;
//   console.log(time);
  return time;
}
