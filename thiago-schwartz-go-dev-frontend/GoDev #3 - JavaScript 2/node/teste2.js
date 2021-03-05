class Teste {

    main() {
        const pessoa = {
            nome: 'thiago',
            idade: 22,
            telefones : []
        }
        const telefone = {
            ddd: 47,
            numero: 991062826
        }
        pessoa.telefones.push(telefone)
        console.log(pessoa.telefones[0].ddd)
    }
}

const teste = new Teste()
teste.main();
