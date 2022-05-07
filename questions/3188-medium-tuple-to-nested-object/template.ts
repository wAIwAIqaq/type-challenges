type TupleToNestedObject<T extends unknown[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? {
      [Key in First as Key extends keyof any
        ? Key
        : never]: Rest extends unknown[] ? TupleToNestedObject<Rest, U> : U;
    }
  : U;
type TupleToNestedObjectRes = TupleToNestedObject<["a"], string>;
