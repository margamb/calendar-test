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
