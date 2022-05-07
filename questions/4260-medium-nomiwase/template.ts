type Combination<A extends string, B extends string> =
  | A
  | B
  | `${A}${B}`
  | `${B}${A}`;
type SubAllCombinations<A extends string, B extends string = A> = A extends A
  ? Combination<A, AllCombinations<Exclude<B, A>>>
  : never;
type AllCombinations<A extends string> =
  | ""
  | SubAllCombinations<StringToUnion<A>>;
