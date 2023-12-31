/**
 Imutabilidade com arrays
*/ 

// Função para adicionar um novo item em um array imutável

function addItem(array, value){
    return [...array, value];
}

// Array inicial (imutável)
const numerosImutaveis = [1, 2, 3];

console.log(numerosImutaveis);
console.log(addItem(numerosImutaveis, 4, 5, 6));
console.log(numerosImutaveis.length);

/*
    Imutabilidade com Objectos
    
    // Função para criar um novo objeto imutável com propriedades adicionais
    function addPropriedade(obj, propriedade, valor) {
    return {
        ... obj,
        [propriedade]: valor
    }
}

// Objeto inicial (imutável)
const pessoaImutavel = { nome: "João", idade: 30 };
const Person2 = { nome: "João", idade: 30 };


// Criar um novo objeto imutável com uma propriedade adicional
const pessoaComProfissao = addPropriedade(pessoaImutavel, "profissao", "Programador");
const Person2Clone = addPropriedade(Person2, "Programador", "Junior");

console.log(pessoaComProfissao);
console.log(Person2Clone);
*/