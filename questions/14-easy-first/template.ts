type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;
