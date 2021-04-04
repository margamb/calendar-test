export function groupByDate(arr) {
  let groups = {};

  for (let i = 0; i < arr.length; i++) {
    const date = arr[i].date;

    if (!groups[date]) {
      groups[date] = [arr[i]];
    } else {
      groups[date].push(arr[i]);
    }
  }

  return groups;
}

// https://stackoverflow.com/a/29622653
export const sortObject = (o) =>
  Object.keys(o)
    .sort()
    .reduce((r, k) => ((r[k] = o[k]), r), {});

export function getTodayDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const formattedMonth = month < 10 ? '0' + month : month;
  const formattedDay = day < 10 ? '0' + day : day;

  const date = `${today.getFullYear()}-${formattedMonth}-${formattedDay}`;

  return date;
}
