// 1. Função para concatenar dois arrays
function concatenarArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// 2. Array de números de 1 a 10
const numeros = [1,2,3,4,5,6,7,8,9,10];

// Slice do índice 3 ao 7 (índice 3 até 7 não incluso)
const parteNumeros = numeros.slice(3, 8);
console.log(parteNumeros); // [4, 5, 6, 7, 8]

// 3. Manipulação do array frutas
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2, 2, 'Kiwi', 'Pêssego');
console.log(frutas); // ['Maçã', 'Banana', 'Kiwi', 'Pêssego', 'Abacaxi']

// 4. Concatenando menus
const menuPrincipal = ['Arroz', 'Feijão', 'Bife'];
const menuDeSobremesas = ['Pudim', 'Sorvete', 'Fruta'];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto); 
// ['Arroz', 'Feijão', 'Bife', 'Pudim', 'Sorvete', 'Fruta']
