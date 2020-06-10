import Knex from 'knex'

export async function seed(knex: Knex){
    await knex('items').insert([
        { title: 'Lâmpadas', imagem: 'lampadas.svg' },
        { title: 'Pilhas e Baterias', imagem: 'baterias.svg' },
        { title: 'Papéis e Papelão', imagem: 'papeis-papelao.svg' },
        { title: 'Resíduos Eletrônicos', imagem: 'eletronicos.svg' },
        { title: 'Resíduos Orgânicos', imagem: 'organicos.svg' },
        { title: 'Óleo de Cozinha', imagem: 'oleo.svg' }
    ])
}