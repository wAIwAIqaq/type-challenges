type MyReadonly<Obj extends Record<string, any>> = {
  readonly [Key in keyof Obj]: Obj[Key];
};
