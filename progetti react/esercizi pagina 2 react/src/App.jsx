//Crea un contesto per lo stato dei to-do e un provider che fornisca i to-do e la funzione di aggiornamento. Utilizza useContext per accedere ai to-do nel componente TodoList.





const App =() => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}

export default App;