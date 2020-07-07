let amigo = {nome: 'josé',     // 1 objeto 4 array(com uma função)
sexo: 'm',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p              // this palavra de autoreferencia ao objeto
}}

amigo.engordar(15)                  //let amigo tem funcionalidades dentro dela
console.log(''+amigo.nome+' pesa '+amigo.peso+'Kg')         //atributo de amigo=nome e peso
