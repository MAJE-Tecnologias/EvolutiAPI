# API de Requests para CRUD em MongoDB

Repositório para projeto simples de API, com o objetivo de realizar CRUD (Crate, Read, Update, Delete).

Criado para ser utilizado pelo projeto <a href="https://github.com/MAJE-Tecnologias/Evoluti-React">Evoluti</a> para CRUD ao banco de dados orientado à documentos em MongoDB.

## Configuração

Antes de utilizar o projeto, deve ser configurado a variável de ambiente no arquivo .env.<br>
Defina a seguinte váriavel no arquivo:

```dotenv
MONGO_URI=seu_acesso_ao_mongodb
```
> Obs: Esse acesso é gerado ao criar seu banco de dados no <a href="https://www.mongodb.com/pt-br/lp/cloud/atlas/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_amers-br_ps-all_desktop_pt-br_lead&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=20378068769&adgroup=154980291281&cq_cmp=20378068769&gad_source=1&gclid=EAIaIQobChMIgbGluZDXhgMVQGJIAB3oZQ7TEAAYASAAEgJ_LvD_BwE">MongoDB Atla</a>.

## Como Utilizar

Para utilizar o projeto, após clonar esse repositório, primeiro instale as dependências utilizando o código abaixo:

```node
npm install
```

Após isso, deverá rodar o <a href="index.js">Index.js</a> utilizando o código:

```node
node index.js
```

O servidor será iniciado a partir desse ponto para a realização de CRUD de acordo com os <a href="./models/">modelos</a> que estão feitos no projeto.

Para enviar um documento JSON ao seu banco de dados, faça uma solicitação POST de acordo com as <a href="./routes/">rotas</a> definidas. Por exemplo:

```url
http://localhost:3000/api/clinicas
```

com o corpo dado de acordo com seus <a href="./models/">modelos</a> feitos. Por exemplo:

```json
"cnpj": "12.345.678/9101-11",
"nome": "nome da clinica",
"email": "email-da-clinica@example.com",
"adicionadoEm": "dia-atual",
"profissoes": [
    "Profissao1",
    "Profissao2"
],
"verificadorProf": [
    true,
    false
],
"nivel": [
    0,
    1
]
```

## Hospedagem
Esse projeto est hospeado na plataforma <a href="https://render.com">Render</a>.

## Autor

<table>
  <tr>
  <td align="center">
      <a href="https://github.com/brunocmartins11" title="Bruno Martins">
        <img src="https://avatars.githubusercontent.com/u/101012137?v=4" width="100px;" alt="Foto de Bruno Martins"/><br>
        <sub>
          <b>Bruno Martins</b>
        </sub>
      </a>
    </td>
  </tr>
</table>