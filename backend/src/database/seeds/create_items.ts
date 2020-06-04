import Knex from 'knex'

export async function seed(knex:Knex) {
   await knex('items').insert([
        { title: 'Lâmpadas', image: 'lampadas.svg '},
        { title: 'Baterias e Pilhas', image: 'baterias.svg '},
        { title: 'Papéis e Papelão', image: 'papeis-papelao.svg '},
        { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg '},
        { title: 'Resíduos orgânicos', image: 'organicos.svg '},
        { title: 'Óleode cozinha', image: 'oleo.svg '},
    ])
}
