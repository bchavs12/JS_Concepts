/**
 * Paradigmas de programação em JavaScript
 * - Oriented programming language(OOP)
 * - Functional Programming
*/

// Oriented programming language(OOP) in JS
/*
class Person{
  constructor(name, idade) {
    this.name = name,
    this.idade = idade
  }

  saudacao = () => console.log(`Olá meu nome e ${this.name} é minha idade e ${this.idade} anos`);

}
// Creating a instance of class
  const pessoa1 = new Person("Bruno", 23)

  pessoa1.saudacao()
*/

// Functional Programming
// Função mestre estruturada para executar a outras funções utilizando conceito de CallBacks
/*
function aplicarOperacao(operacao, value){
  return operacao(value);
}

function dobro(numero){
  return numero * 2;
}

function quadrado(numero){
  return numero * numero;
}

const result = aplicarOperacao(dobro, 5);
const result2 = aplicarOperacao(quadrado, 5);

console.log(result2);
*/