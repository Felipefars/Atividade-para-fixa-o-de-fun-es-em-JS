// Array para armazenar as tarefas
let tarefas = [];

// Função para adicionar novas tarefas ao array
function adicionarTarefa(descricao) {
    // Criar um objeto para a tarefa
    const tarefa = {
        descricao: descricao,
        concluida: false
    };

    // Adicionar a tarefa ao array
    tarefas.push(tarefa);
    console.log(`Tarefa "${descricao}" adicionada com sucesso!`);
}

// Função para listar todas as tarefas cadastradas
function listarTarefas() {
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }

    console.log("Tarefas cadastradas:");
    tarefas.forEach((tarefa, index) => {
        const status = tarefa.concluida ? "Concluída" : "Pendente";
        console.log(`${index + 1}. Descrição: ${tarefa.descricao}, Status: ${status}`);
    });
}

// Função para remover uma tarefa específica do array
function removerTarefa(indice) {
    if (indice < 1 || indice > tarefas.length) {
        console.error("Erro: Índice de tarefa inválido.");
        return;
    }

    const tarefaRemovida = tarefas.splice(indice - 1, 1);
    console.log(`Tarefa "${tarefaRemovida[0].descricao}" removida com sucesso!`);
}

// Função para marcar uma tarefa como concluída
function concluirTarefa(indice) {
    if (indice < 1 || indice > tarefas.length) {
        console.error("Erro: Índice de tarefa inválido.");
        return;
    }

    tarefas[indice - 1].concluida = true;
    console.log(`Tarefa "${tarefas[indice - 1].descricao}" marcada como concluída!`);
}

// Exemplos de uso:

adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Ler um livro");
adicionarTarefa("Fazer exercícios");

listarTarefas(); // Exibe todas as tarefas cadastradas

concluirTarefa(2); // Marca a tarefa de índice 2 como concluída

listarTarefas(); // Exibe todas as tarefas cadastradas, mostrando o status atualizado

removerTarefa(1); // Remove a tarefa de índice 1

listarTarefas(); // Exibe todas as tarefas restantes
