const cimema = "Cine House"
const catalogo = require('./database/catalogo.json')
const filmes = []

const filmeUm = {
    nomees: 'Gedeon'
}
filmeUm.codigo = 120
filmeUm.titulo = 'Filme Um'
filmeUm.duracao = 2
filmeUm.atores = ['Gedeon', 'Maria', 'Fernanda' ]
filmeUm.anoLancamento = 2016
filmeUm.emCartaz = true

console.log(filmes)
filmes.push(filmeUm)
console.log(filmes)
console.log(catalogo)