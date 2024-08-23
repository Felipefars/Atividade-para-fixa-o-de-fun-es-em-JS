// Array para armazenar os produtos
let produtos = [];

// Função para adicionar novos produtos ao array
function adicionarProduto(nome, preco, quantidade) {
    // Verificar se todos os campos estão preenchidos e são válidos
    if (!nome || preco <= 0 || quantidade <= 0) {
        console.error("Erro: Todos os campos devem estar preenchidos e preço e quantidade devem ser maiores que 0.");
        return;
    }

    // Criar um objeto para o produto
    const produto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };

    // Adicionar o produto ao array
    produtos.push(produto);
    console.log(`Produto ${nome} adicionado com sucesso!`);
}

// Função para listar todos os produtos cadastrados
function listarProdutos() {
    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
        return;
    }

    console.log("Produtos cadastrados:");
    produtos.forEach((produto, index) => {
        console.log(`${index + 1}. Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}, Quantidade: ${produto.quantidade}`);
    });
}

// Função para calcular e exibir o valor total dos produtos em estoque
function calcularValorEstoque() {
    let valorTotal = 0;
    produtos.forEach(produto => {
        valorTotal += produto.preco * produto.quantidade;
    });

    console.log(`Valor total dos produtos em estoque: R$${valorTotal.toFixed(2)}`);
}

// Exemplos de uso:

adicionarProduto("Caneta", 1.5, 100);
adicionarProduto("Caderno", 10, 50);
adicionarProduto("Borracha", 0.5, 200);

listarProdutos(); // Exibe todos os produtos cadastrados

calcularValorEstoque(); // Exibe o valor total dos produtos em estoque
