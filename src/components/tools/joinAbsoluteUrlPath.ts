export function joinAbsoluteUrlPath(...args: string[]): string {
  return (
    // '/' +
    args
      .map((pathPart) => pathPart.replace(/(^\/|\/$)/g, ''))
      .filter((item) => !!item)
      .join('/')
  );
}
