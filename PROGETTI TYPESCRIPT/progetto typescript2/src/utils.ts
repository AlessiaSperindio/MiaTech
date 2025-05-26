//  In src, crea un nuovo file utils.ts.
//Definisci una funzione generica filterTodos che accetta un array di Todo e
//  una funzione di filtro e restituisce un array di todo filtrati.

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const  filterTodos<T>(
  todos: T[],
  filterFn: (todo: T) => boolean
): T[] {
  return todos.filter(filterFn);
}
// Crea un tipo mappato PartialTodo che rende tutte le proprietà dell'interfaccia Todo opzionali.
//Crea una funzione updatePartialTodo che accetta un todoId e un oggetto di tipo PartialTodo e aggiorna le proprietà specificate del todo.
  type PartialTodo = Partial<Todo>;


const  PartialTodo(
  todos: Todo[], 
  todoId: number, 
  updates: PartialTodo 
): Todo[] {
  return todos.map(todo => {
    if (todo.id === todoId) {
      return { ...todo, ...updates };
    }
    return todo;
  });
}          