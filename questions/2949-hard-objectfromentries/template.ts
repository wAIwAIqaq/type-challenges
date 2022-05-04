type ObjectFromEntries<T> = T extends T
  ? T extends [infer Key, infer Value]
    ? { [K in keyof Key as K extends string ? K : never]: Value }
    : never
  : never;

type UnionToIntersection1<U> = (
  U extends U ? (x: U) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never;
interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type ObjectFromEntriesRes = ObjectFromEntries<ModelEntries>;
