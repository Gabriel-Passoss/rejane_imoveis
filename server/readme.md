
# Rejane Imóveis

Projeto para criação de uma aplicação web para uso imobiliário e real


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_URL`
`DATABASE_USER`
`DATABASE_PSSWD`


## Stack utilizada

**Back-end:** Node, Fastify, Prisma, Docker


## Requisitos Funcionais

- [x]  O usuário deve conseguir listar todos os anúncios
- [ ]  O usuário deve conseguir filtrar os anúncios
- [x]  O usuário deve conseguir criar novos anúncios
- [x]  Deve ser possível procurar um anúncio pelo ID
- [x]  Deve haver um endpoint para listagem de cidades que possuem anúncios
- [x]  Deve ser possível deletar um anúncio do site

### Regras de negócio

- [x]  Não deve ser possível criar anúncios sem foto, localização, preço e tipo de negócio
- [ ]  As fotos enviadas devem receber uma marca d'agua automaticamente
- [x]  Não deve ser possível criar dois anúncios com o mesmo nome