//exercise"gestire input di testo per aggiornare lo stato ":Crea un input di testo in un componente chiamato TextInput e uno stato per mantenere il valore dell'input


import React from 'react';
import { useState } from 'react';

const LoginForm = () => {
    const [form, setForm] = useState ({
        username: "",
        password: "",
        isChecked: false,
    });
const handleInput =(event) => {
const {name, value, checked, type} = event.target;

setForm((_form) => ({
    ..._form,
    [name]:type == 'checkbox' ? checked : value,

}))
}
const handleSubmit = (event) => {
event.preventDefault();
console.log(form);
}    
return(
    <>
    <form onSubmit={handleSubmit}>
        <input type='username' name='username' value={form.username} onInput={handleInput}/>
        <input type='password' name='password' value={form.password} onInput={handleInput}/>
        <input type='checkbox' name='isChecked' checked ={form.isChecked} onInput={handleInput}/>
        <button type='submit'>login</button>
    </form>
    </>
)
}
export default LoginForm;