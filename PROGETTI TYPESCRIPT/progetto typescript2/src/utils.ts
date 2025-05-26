//  In src, crea un nuovo file utils.ts.
//Definisci una funzione generica filterTodos che accetta un array di Todo e
//  una funzione di filtro e restituisce un array di todo filtrati.

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export function filterTodos<T>(
  todos: T[],
  filterFn: (todo: T) => boolean
): T[] {
  return todos.filter(filterFn);
}
            