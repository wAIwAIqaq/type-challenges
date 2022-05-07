type GreaterThan<T extends number, U extends number> = GreaterThanByArr<
  BuildArray<T>,
  BuildArray<U>
>;
type BuildArray<
  Length extends number,
  Ele = unknown,
  Arr extends unknown[] = []
> = Arr["length"] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>;
type GreaterThanByArr<T extends unknown[], U extends unknown[]> = T extends [
  infer FirstT,
  ...infer RestT
]
  ? U extends [infer FirstU, ...infer RestU]
    ? GreaterThanByArr<RestT, RestU>
    : true
  : false;
