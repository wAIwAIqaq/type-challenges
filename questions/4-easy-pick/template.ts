type MyPick<T, K extends keyof T> = { [Key in K]: T[Key] };
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type MyPickRes = MyPick<Todo, "title">;
