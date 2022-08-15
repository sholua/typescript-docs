namespace utilityTypes {
  // Readonly<T>
  interface User {
    name: string;
  }

  const user: Readonly<User> = {
    name: "shol", // we cannot change this property
  };

  // Required<T>
  interface Props {
    name?: string;
    age?: number;
  }

  const a: Props = { name: "test" };
  const b: Required<Props> = { name: "test", age: 4 };

  // Record<T>
  interface PageInfo {
    title: string;
  }

  type Page = "home" | "about" | "contacts";

  const x: Record<Page, PageInfo> = {
    home: { title: "tes" },
    about: { title: "about" },
    contacts: { title: "contacts" },
  };

  // Pick<T, K>
  interface Todo {
    id: string;
    title: string;
    completed: boolean;
  }

  type TodoPreview = Pick<Todo, "title" | "completed">;

  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
  };

  // Omit<T, K>
  type TodoForPreview = Omit<Todo, "id">;

  const todoForPreview: TodoForPreview = {
    title: "Pass PDP",
    completed: false,
  };

  // Exclude<T, U>
  const excluded: Exclude<1 | 2 | 3, 2> = 3;

  // Extract<T, U>
  const extracted: Extract<1 | 2 | 3 | 4, 5 | 6 | 4> = 4;

  // NotNullable<T>
  const withoutNullable: NonNullable<string | null | undefined> = "hello";
}
