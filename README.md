# Case The Cat API
- Esta aplicação foi desenvolvida em Node.js

## Consumo da API de Gatos 
- Para consumir a API do site the cats, utilizamos a biblioteca request e o método get retornando um JSON na saída.
<details><summary>Metodo GET</summary>

```js
const request = require('request');
const hostname = 'https://api.thecatapi.com/';
const path = '/v1/breeds';
console.log(hostname + path)
request(`${hostname}${path}`, (err, res, body) => {
    console.log(body);
});

```
Saída 
```js
[
    {
        "weight": {
            "imperial": "7  -  10",
            "metric": "3 - 5"
        },
        "id": "abys",
        "name": "Abyssinian",
        "cfa_url": "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx",
        "vetstreet_url": "http://www.vetstreet.com/cats/abyssinian",
        "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian",
        "temperament": "Active, Energetic, Independent, Intelligent, Gentle",
        "origin": "Egypt",
        "country_codes": "EG",
        "country_code": "EG",
        "description": "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
        "life_span": "14 - 15",
        "indoor": 0,
        "lap": 1,
        "alt_names": "",
        "adaptability": 5,
        "affection_level": 5,
        "child_friendly": 3,
        "dog_friendly": 4,
        "energy_level": 5,
        "grooming": 1,
        "health_issues": 2,
        "intelligence": 5,
        "shedding_level": 2,
        "social_needs": 5,
        "stranger_friendly": 5,
        "vocalisation": 1,
        "experimental": 0,
        "hairless": 0,
        "natural": 1,
        "rare": 0,
        "rex": 0,
        "suppressed_tail": 0,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
        "hypoallergenic": 0,
        "reference_image_id": "0XYvRd7oD",
        "image": {
            "id": "0XYvRd7oD",
            "width": 1204,
            "height": 1445,
            "url": "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
        }
    },
```

</details><p></p>

## Criação API Rest



Criação de rota e Endpoint da API
```js
const gatosRoutes = require("./api/routes/gatos");
app.use('/gatos', gatosRoutes);
```
<details><summary>Método GET</summary>

- Para simular os dados na API, foi criada a base de dados com informações sobre os gatos retiradas do site.

```js
router.get('/', (req, res) => {
    gatosController.getAll(req, res);
    console.log(res.query);
}); 
```
Saída

<p align="center">
  <img <img src="/img/apigato.png">
</p>

</details><p></p>

<details><summary>Metodo POST</summary>

```js
router.post('/', (req, res) => {
    gatosController.create(req, res);
    console.log(res.body)
}); 
```
</details><p></p>

<details><summary>Base de dados MySQL</summary>
<p align="center">
  <img <img src="/img/bd.png">
</p>

</details><p></p>


## Como rodar a aplicação localmente

- Faça um git clone do repositório no prompt de comando

```sh
git clone <https://github.com/raissasantanapassos/case_itau.git>
```

- Após o projeto estar aberto no VSCode rodar a aplicação no terminal 

```sh
node app
```

- Para testar a API, inserir no Postman a rota 

```sh
http://localhost:7000/gatos
```

