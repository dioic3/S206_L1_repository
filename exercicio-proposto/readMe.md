# Passo a passo necessário para executar o projeto de "Exercicios Propostos"

1. Clone o projeto.
2. Entre na pasta de exercicio-proposto (cd exercicio-proposto/).
3. Execute o comando "npm install --no-save".
4. Execute o comando "npx cypress open", depois de instalar o pacote node_modules.
5. Crie um arquivo ".env" na pasta de exercicio-propostos.
6. Assim que executar os testes e quiser gerar o relatório, você pode usar os seguintes comandos:
    ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
