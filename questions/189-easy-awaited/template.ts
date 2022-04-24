type MyAwaited<T extends Record<string, any>> = T extends Promise<infer R>
  ? R extends Promise<any>
    ? MyAwaited<R>
    : R
  : never;
// type MyAwaited<T extends Record<string, any>> = T extends Promise<infer R>
//   ? R
//   : never;
type MyAwaitedRes = MyAwaited<Promise<"string" | "number">>;
