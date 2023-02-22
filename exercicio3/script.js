const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

// a)
const pokemon2 = {
    ...pokemon1,
    nome: 'Squirtle',
    tipo: 'Água'
}

// b)
pokemon1.ataques = []

// c)
const ataques = {
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
}

pokemon1.ataques.push(ataques)

// d)
pokemon2.ataques = [...pokemon1.ataques]

// e)
pokemon1.ataques.push({
    ...pokemon1.ataques[0],
    nome: 'Folha Navalha',
    dano: 45,
    tipo: 'Grama'
})

// f)
pokemon2.ataques.push({
    ...pokemon2.ataques[0],
    nome: 'Jato de Água',
    tipo: 'Água'
})

// g)
console.log('Pokemon 1:', pokemon1)
console.log('Pokemon 2:', pokemon2)
