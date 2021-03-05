let listaItem = [];

let listaVenda = [];

const adicionarVenda = () => {
    const nomeDigitado = document.getElementById('nome').value;

    if (nomeDigitado) {
        document.getElementById('nomeObrigatorio').innerHTML = ''
    } else {
        return document.getElementById('nomeObrigatorio').innerHTML = 'Campo "Nome" Obrigatório'
    }

    const precoDigitado = document.getElementById('preco').value;

    if (precoDigitado) {
        document.getElementById('precoObrigatorio').innerHTML = ''
    } else {
        return document.getElementById('precoObrigatorio').innerHTML = 'Campo "Nome" Obrigatório'
    }

    const venda = {
        nome: nomeDigitado,
        preco: precoDigitado,
        items: listaItem
    }
    listaVenda.push(venda)
    listaItem = []
    desenharTabelaItem()
    desenharTabelaVenda()
    limparCampos()
}

const adicionarItem = () => {
    const nomeItem = document.getElementById('nome-item').value;

    if (nomeItem) {
        document.getElementById('itemObrigatorio').innerHTML = ''
    } else {
        return document.getElementById('itemObrigatorio').innerHTML = 'Campo "Nome" Obrigatório'
    }

    const item = {
        nome: nomeItem
    }
    listaItem.push(item)
    desenharTabelaItem()
    document.getElementById('nome-item').value = ''
}

const desenharTabelaItem = () => {
    document.getElementById('lista-item').innerHTML = '';
    listaItem.forEach(item => {
        document.getElementById('lista-item').innerHTML += '' +
            '<tr><td>' + item.nome + '</td></tr>';
    })
}

const desenharTabelaVenda = () => {
    document.getElementById('lista-venda').innerHTML = ''
    listaVenda.forEach(venda => {
        let tabelaVendas = '<tr>' +
            '<td>' + venda.nome + '</td>' +
            '<td>' + venda.preco + '</td>' +
            '<td>';
            for (let i = 0; i < venda.items.length; i++) {
               tabelaVendas += venda.items[i].nome + ','
            }
            tabelaVendas += '</td></tr>'
            document.getElementById('lista-venda').innerHTML += tabelaVendas
        })
}

const limparCampos = () => {

    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('en').value = '';
    document.getElementById('es').value = '';

}