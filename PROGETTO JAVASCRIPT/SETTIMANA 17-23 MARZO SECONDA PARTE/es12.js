

    const { fake1,fake2,fake3,  ...others } = { fake1: 10,fake2: 20, fake3: 30, fake4: 40, fake5: 50 };
console.log(others);

const primoFake = fake1;

const secondoFake = fake2;

const terzoFake = fake3;

const quartoEQuintofake = {others};

console.log(fake1);
console.log(fake2);
console.log(primoFake);
console.log(secondoFake);
console.log(terzoFake);