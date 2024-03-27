export function getDate() {
  const date = new Date();

  const addZero = (value: number) => {
    if (value < 10) {
      return "0" + value;
    } else return value;
  };

  const time =
    date.getFullYear() +
    "/" +
    addZero(date.getMonth() + 1) +
    "/" +
    addZero(date.getDate());

  const hour =
    addZero(date.getHours()) +
    ":" +
    addZero(date.getMinutes()) +
    ":" +
    addZero(date.getSeconds());

  const timestamp = time + ", " + hour;

  return timestamp;
}
