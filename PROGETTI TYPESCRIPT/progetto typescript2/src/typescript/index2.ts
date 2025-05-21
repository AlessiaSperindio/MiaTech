//lezione 2 :dati primitivi, oggetti, array
const myName: string = "Alessia";
const myAge: number = 32;
const isAuth: boolean = true;
const user: { myName: string, myAge: number, isAuth: boolean } = {
    myName: "Alessia",
    myAge: 32,
    isAuth: true
}
const colors: string[] = ["blue", "red", "yellow"];
const myFunction = (array: string[], obj: {  myName: string, myAge: number, isAuth: boolean }): void => {
    console.log(array, obj);

}
myFunction(colors, user)