function imprimirPodcasts (array) {
    const nome = array.map(function(item, indice) {
        return item.nome
    })    
    console.log(nome.join(`\n`))
}

export default imprimirPodcasts