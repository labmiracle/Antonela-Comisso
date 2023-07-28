function saludo(saludoing: string, name: string): string {
    return saludoing + ' ' + name + '!';
}
saludo('Hello', 'Steve');
//saludo('Hi');
//saludo('Hi', 'Bill', 'Gates');

//Tipo Arreglos
var jobs: Array<string> = ['IBM', 'Microsoft', 'Google'];
var jobs: string[] = ['Apple', 'Dell', 'HP'];

//Tipo void
function sayHi(): void {
    console.log('Hi!');
}

let speech: void = sayHi();
console.log(speech);

//Tipo union
let code: string | number;
code = 123;
code = 'ABC';
//code = false;
