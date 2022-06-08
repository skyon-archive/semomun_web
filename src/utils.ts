export function range(length: number, start = 0) {
  return Array.from({ length }, (_, i) => i + start);
}

export const zeroPad = (data: any, len: number) => {
  const zero = len - data.toString().length;
  return range(zero > 0 ? zero : 0).join("0") + data;
};

export const numberWithCommas = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export function cls(...classnames: string[]) {
  return classnames.join(" ");
}
