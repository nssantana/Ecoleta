import express, { request, response } from 'express'
import {celebrate, Joi} from 'celebrate'

import multer from 'multer'
import multerConfig from './config/multer'
import PointsController from './controllers//PointsControllers'
import ItemsController from './controllers//ItemsControllers'

const routes = express.Router()

const upload = multer(multerConfig )
const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items',itemsController.index)

routes.post('/points',
            upload.single('imagem'),
            celebrate({
                body: Joi.object().keys({
                    name: Joi.string().required(),
                    email: Joi.string().required().email(),
                    whatsapp: Joi.number().required(),
                    latitude: Joi.number().required(),
                    longitude: Joi.number().required(),
                    city: Joi.number().required(),
                    uf: Joi.number().required().max(2),
                    items: Joi.number().required(),
                })
            },{
                abortEarly: false
            }),
            pointsController.create)

routes.get('/points', pointsController.index)

routes.get('/points/:id', pointsController.show)


export default routes