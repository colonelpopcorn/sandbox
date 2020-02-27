
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function tryWithDefault<T>(func: () => T, defaultVal: T): T {
  try {
    return func();
  } catch (e) {
    return defaultVal;
  }
}
