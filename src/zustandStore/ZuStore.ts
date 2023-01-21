import { create } from "zustand";

interface NumberState {
  userNumber: number;
  // increase: (inputNumber: number) => void;
  increase: () => void;
  restart: () => void;
}

export const UserNumberStore = create<NumberState>()((set) => ({
  userNumber: 0,
  increase: () => set((state) => ({ userNumber: state.userNumber + 1 })),
  restart: () => set(() => ({ userNumber: 0 })),
}));

type FormState = {
  firstName: string;
  lastName: string;
};

type Action = {
  updateFirstName: (firstName: FormState["firstName"]) => void;
  updateLastName: (lastName: FormState["lastName"]) => void;
};

export const UsersStore = create<FormState & Action>((set) => ({
  firstName: "",
  lastName: "",
  updateFirstName: (firstName) => set(() => ({ firstName })),
  updateLastName: (lastName) => set(() => ({ lastName })),
}));

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type Store = {
  todos: Todo[];
  newTodo: string;
  addTodo: () => void;
  setNewTodo: (text: string) => void;
  updateTodo: (id: number, text: string) => void;
  deteleTodo: (id: number) => void;
  LoadAPIData: (todo: Todo[]) => void;
};

const useStore = create<Store>()((set) => ({
  todos: [],
  newTodo: "",
  LoadAPIData(todos: Todo[]) {
    set((state) => ({
      ...state,
      todos,
    }));
  },

  addTodo() {
    set((state) => ({
      ...state,
      todos: [
        ...state.todos,
        { id: state.todos.length + 1, text: state.newTodo, done: false },
      ],
      newTodo: "",
    }));
  },
  setNewTodo(text: string) {
    set((state) => ({
      ...state,
      newTodo: text,
    }));
  },
  updateTodo(id: number, text: string) {
    set((state) => {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text };
        }
        return todo;
      });
      return { ...state, todos: updatedTodos };
    });
  },
  deteleTodo(id: number) {
    set((state) => {
      const updatedTodos = state.todos.filter((todo) => todo.id !== id);
      return { ...state, todos: updatedTodos };
    });
  },
}));

export default useStore;
