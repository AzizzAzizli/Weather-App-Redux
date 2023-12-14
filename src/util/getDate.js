export function date() {
  let date = new Date();
  let time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    //   console.log(time);
    return time
}
