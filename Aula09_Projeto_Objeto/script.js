//criar uma variável do tipo objeto

let pessoa = {
    nome:'Gustavo',
    sobrenome:'Shaikoski',
    idade:'17',
    altura:'1.66',
    cargo:'Aluno'
}
//consumindo o objeto todo
console.log(pessoa)
//consumindo umas das caracteristicas do objeto
console.log(pessoa.nome)
console.log(pessoa.altura)

let carro = {
    nome:"Brasilia",
    cor:"Amarela",
    potencia: "80cv"
};

//acessar 2 propriedades ao mesmo tempo
console.log(carro.nome+' '+carro.cor);

//array de objetos
let usuario = [
    {nome:"Gustavo", cargo: 'Programador', status:'ativo'},
    {nome:"Diego", cargo: 'caminhoneiro', status:'inativo'},
    {nome:"Anna", cargo: 'Ditadora', status:'ativo'},
];

//consumindo o array
console.log(usuario);

//acessando um objeto especifico
console.log(usuario[2].nome);

//acessando uma caracteristica especifica dentro do objeto
console.log(usuario[2].nome);
