import {Request, Response} from 'express'
import knex from '../database/connection'

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*')
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                imagem_url: `http://192.168.0.5:3333/uploads/${item.imagem}`, 
            }
        })     // exp://192.168.0.5:19000
    
        return response.json(serializedItems)
    }
}

export default ItemsController