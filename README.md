# provaI
resolução da prova 


## questão da prova

Em uma fazenda são utilizados inúmero produtos, sua tarefa e criar um programa para
controlar o estoque destes produtos conforme a descrição abaixo:
1. Criar uma classe chamada Fornecedor com os seguintes atributos:
ID
Nome/RazaoSocial
CPF/CNPJ
Telefone
Endereco
• Todos os atributos desta classe devem possuir encapsulamento (get e set).
2. Criar uma classe chamada Produto com os seguintes atributos:
ID
Descricao
Fornecedor (Tipo Fornecedor)
ValorUitario
• Todos os atributos desta classe devem possuir encapsulamento (get e set), porém
o modificador de acesso do atributo Fornecedor dever protegido.
• O valor do atributo ValorUnitario não pode ser menor ou igual a zero.
3. Criar uma classe chamada Estoque como os seguintes atributos:
ID
Produto (Tipo Produto)
Quantidade
• Todos os atributos desta classe devem possuir encapsulamento (get e set)
• O valor do atributo Quantidade não pode ser menor do que zero
4. Criar um objeto do tipo Fornecedor e exibir os dados no console.
5. Criar um objeto do tipo Produto e inserir no atributo Fornecedor o objeto criado no
item 4 e exibir os dados no console.
6. Criar um método chamado ValorDoProdutoEmEstoque para exibir o valor do
produto em estoque.
7. Provar que a validação dos atributos e o método ValorDoProdutoEmEstoque estão
funcionando.


