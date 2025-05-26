//In src, crea un nuovo file User.ts.
//Definisci una classe User con le proprietà id, name, email (opzionale), e un costruttore per inizializzare queste proprietà.
export class User {
  id: number;
  name: string;
  email?: string;

  constructor(id: number, name: string, email?: string) {
    this.id = id;
    this.name = name;
    if (email) {
      this.email = email;
    }
  }
}