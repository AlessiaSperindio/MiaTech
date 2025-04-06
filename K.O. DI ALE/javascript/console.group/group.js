const alimenti = [
    { nome: 'pane', prezzoMedio: "20 euro al kg",quantitàVendute: '500kg' },
    { nome: 'carne', prezzoMedio: "22 euro al kg",quantitàVendute: '60kg' },
    { nome: 'uova', prezzoMedio: "21 euro al kg",quantitàVendute: '300kg' }
];


console.group('Informazioni sugli alimenti');


console.table(alimenti);


console.groupEnd();