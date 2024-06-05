
# Organiza To-Do

O Organiza To-Do é um app para dispositivos móveis que objetiva ser uma aplicação com diferenciais em questões de funcionalidade e utilidade. Trata-se de um agendador de tarefas para tornar a vida do usuário mais produtiva e menos fastigante na hora de se planejar para ter mais foco e concentração. O Organiza To-Do é o aplicativo que compete em patamares superiores com outras aplicações. E o melhor de tudo: é GRÁTIS.


## Funcionalidades

- Definição de prioridades de tarefas;
- Categorias e descrição das atividades;
- Ordenação em datas e horários;
- Ordem lógica


## Aprendizados

A squad como um todo aprendeu mais sobre o trabalho em equipe, divisão de tarefas e proatividade. Aprendemos mais também sobre a resolução de problemas lógicos e sintáticos com o banco e com o back-end da aplicação. A lição que nos resta no presente momento é perseverar e não desistir frente ao erro.


## Stack utilizada

**Front-end:** React Native e CSS

**Back-end:** Node, Express e Sequelize


## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |







```http
  PUT /api/{id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Edita um item




```http
  DELETE /api/{id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Deleta um item


