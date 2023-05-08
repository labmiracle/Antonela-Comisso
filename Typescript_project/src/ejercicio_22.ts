function padLeft(value: string, padding: any): any {

    if (typeof value === 'string') {
        return `${Array(padding + 1).join(' ')}${value}`;
    }
    else if (typeof value === 'number') {
        return padding + value;
    }
 // si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
 // si padding es una cadena, return padding + value
 }

 console.log('[Ejercicio 4.2]', `
 ${padLeft('', 0)}
 ${padLeft('', '')}
 ${padLeft('', '')}
 ${padLeft('', '')}
 ${padLeft('', '')}
 `);