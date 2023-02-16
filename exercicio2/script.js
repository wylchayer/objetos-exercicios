const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

// respostas aqui ⬇️

// a)
const primeiroAtorAtriz = filme.elenco[0]
console.log(`Primeiro ator/atriz:`, primeiroAtorAtriz)

// b)
const ultimoAtorAtriz = filme.elenco[filme.elenco.length -1]
console.log(`Último ator/atriz:`, ultimoAtorAtriz)

// c)
const todasTransmissoesHoje = filme.transmissoesHoje
console.log(`Todas trasmissões de hoje:`, todasTransmissoesHoje)

// d)
const horarioTransmissaoCanalBrasil = filme.transmissoesHoje[1].horario
console.log(`Horário de transmissão no Canal Brasil:`, horarioTransmissaoCanalBrasil)