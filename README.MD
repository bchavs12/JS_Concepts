# Promises e requisições async/await
    Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona.
 ``Ela pode estar em um dos três estados: ``
 * Pendente (pending), 
 * Cumprida (fulfilled),
 * Rejeitada (rejected). 
 ## Síncrono (Sync):
 - Em ``operações síncronas``, o código é executado de forma sequencial, passo a passo, e uma operação não é iniciada até que a anterior seja concluída.
 - Isso significa que o programa espera até que a ``operação atual`` termine antes de continuar com a próxima.
 - O código síncrono é geralmente fácil de entender, pois segue a ordem natural do código.
- No entanto, operações demoradas podem bloquear a execução de todo o programa, tornando-o não responsivo.

 ## Assíncrono (Async):
- Em `Operações Assincronas`, o código não espera que uma operação termine para iniciar a próxima. Em vez disso, ele inicia a operação e continua executando o restante do código.
- A resposta da operação assíncrona (como uma resposta de rede, conclusão de uma tarefa demorada, etc.) é tratada posteriormente, quando estiver disponível.
- Isso permite que o programa continue respondendo a eventos e interações do usuário, mesmo enquanto operações demoradas estão em andamento.
- Em linguagens de programação, isso é frequentemente alcançado usando callbacks, Promises, ou a sintaxe `async/await`.

## Utilidades e diferenças
- ``Código síncrono:`` é adequado quando você precisa que uma sequência de operações seja executada estritamente em ordem e não pode continuar até que todas as operações estejam concluídas. Isso é comum em cálculos sequenciais ou tarefas que dependem de resultados anteriores.
- ``Código assíncrono:``  é essencial quando você deseja que o programa continue sendo responsivo, mesmo durante operações demoradas, como leitura de arquivos grandes, chamadas de API ou downloads de rede. Isso evita que o programa pare de responder enquanto aguarda as operações serem concluídas.

## Contexto de funções
- ``Funções síncronas:`` São aquelas que retornam um valor diretamente após a chamada. 
- ``Enquanto funções assíncronas:`` São aquelas que retornam uma Promise ou usam callbacks para indicar quando a operação está completa. O uso de funções assíncronas permite que você escreva código que lida com operações demoradas de forma mais eficaz, mantendo a responsividade do programa.


# Immutability
 ## Conceito:
- ``Imutabilidade de dados:`` É um conceito importante em programação funcional e também é aplicado em algumas outras abordagens de programação. Refere-se à característica dos dados que não podem ser alterados após serem criados. 
- Em vez de modificar os dados existentes, o programa cria novos dados com base nos dados originais, mantendo os dados originais inalterados.

# Paradigmas