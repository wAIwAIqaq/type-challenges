type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer Arg
) => unknown
  ? Arg
  : never;
